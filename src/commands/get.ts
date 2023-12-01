import {Command} from '@oclif/core'
import {parseJSON} from '@typed-utils/json'
import {execa} from 'execa'

class Get extends Command {
  static args = {}
  static description = 'Get container info'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  async run(): Promise<void> {
    const idResult = await execa('docker', ['ps', '--latest', '--format', '{{json .ID}}'])
    const id = parseJSON(idResult.stdout) as string
    const ip = await execa(
      'docker',
      ['inspect', '-f', '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}', id],
      {stdio: 'pipe'},
    )

    this.log(`http://${ip.stdout}:5001`)
  }
}

export default Get
