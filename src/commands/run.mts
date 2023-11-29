import {Args, Command} from '@oclif/core'
import {execa} from 'execa'

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

  // static flags = {
  //   app: Flags.string({char: 'a', description: 'app to run', required: true}),
  // }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Run)

    // this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/run.ts)`)
    await execa('docker', ['pull', 'heroku/builder:22'], {stdio: 'inherit'} )
    await execa('pack', ['build', args.app], {stdio: 'inherit'})

  }
}

export default Run
