import {Args, Command} from '@oclif/core'
import {execa, execaSync} from 'execa'
import {mkdtemp, readFile} from 'node:fs/promises'
import {join} from 'node:path'
import waitOn from 'wait-on'

class Run extends Command {
  static args = {
    app: Args.string({description: 'app to run', required: true}),
  }

  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Run)

    const tmpdir = await mkdtemp('/tmp/cnb-fog-', {encoding: 'utf8'})
    const tmpfile = join(tmpdir, 'container.cid')

    await execa('docker', ['pull', 'heroku/builder:22'], {stdio: 'inherit'})
    await execa('pack', ['build', args.app], {stdio: 'inherit'})
    const running = execa('docker', ['run', '--cidfile', tmpfile, '--rm', '--expose', '5001', args.app], {
      cleanup: true,
      stdio: 'ignore',
    })

    await waitOn({interval: 500, resources: [tmpfile]})
    const cid = await readFile(tmpfile, {encoding: 'utf8'})

    process.on('SIGINT', () => {
      this.log(`Stopping container (${cid})...`)
      execaSync('docker', ['kill', cid])
      process.exit(0)
    })

    const ip = await execa(
      'docker',
      ['inspect', '-f', '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}', cid],
      {stdio: 'pipe'},
    )

    this.log(`http://${ip.stdout}:5001`)
  }
}

export default Run
