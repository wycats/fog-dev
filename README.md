oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g local-docker-hackday
$ local-v2 COMMAND
running command...
$ local-v2 (--version)
local-docker-hackday/0.0.0 linux-x64 node-v21.2.0
$ local-v2 --help [COMMAND]
USAGE
  $ local-v2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`local-v2 get`](#local-v2-get)
* [`local-v2 help [COMMANDS]`](#local-v2-help-commands)
* [`local-v2 plugins`](#local-v2-plugins)
* [`local-v2 plugins:install PLUGIN...`](#local-v2-pluginsinstall-plugin)
* [`local-v2 plugins:inspect PLUGIN...`](#local-v2-pluginsinspect-plugin)
* [`local-v2 plugins:install PLUGIN...`](#local-v2-pluginsinstall-plugin-1)
* [`local-v2 plugins:link PLUGIN`](#local-v2-pluginslink-plugin)
* [`local-v2 plugins:uninstall PLUGIN...`](#local-v2-pluginsuninstall-plugin)
* [`local-v2 plugins reset`](#local-v2-plugins-reset)
* [`local-v2 plugins:uninstall PLUGIN...`](#local-v2-pluginsuninstall-plugin-1)
* [`local-v2 plugins:uninstall PLUGIN...`](#local-v2-pluginsuninstall-plugin-2)
* [`local-v2 plugins update`](#local-v2-plugins-update)
* [`local-v2 run APP`](#local-v2-run-app)

## `local-v2 get`

Get container info

```
USAGE
  $ local-v2 get

DESCRIPTION
  Get container info

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/get.ts](https://github.com/heroku/local-docker-hackday/blob/v0.0.0/src/commands/get.ts)_

## `local-v2 help [COMMANDS]`

Display help for local-v2.

```
USAGE
  $ local-v2 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for local-v2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.7/src/commands/help.ts)_

## `local-v2 plugins`

List installed plugins.

```
USAGE
  $ local-v2 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ local-v2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/index.ts)_

## `local-v2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ local-v2 plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ local-v2 plugins add

EXAMPLES
  $ local-v2 plugins add myplugin 

  $ local-v2 plugins add https://github.com/someuser/someplugin

  $ local-v2 plugins add someuser/someplugin
```

## `local-v2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ local-v2 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ local-v2 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/inspect.ts)_

## `local-v2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ local-v2 plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ local-v2 plugins add

EXAMPLES
  $ local-v2 plugins install myplugin 

  $ local-v2 plugins install https://github.com/someuser/someplugin

  $ local-v2 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/install.ts)_

## `local-v2 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ local-v2 plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ local-v2 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/link.ts)_

## `local-v2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ local-v2 plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ local-v2 plugins unlink
  $ local-v2 plugins remove

EXAMPLES
  $ local-v2 plugins remove myplugin
```

## `local-v2 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ local-v2 plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/reset.ts)_

## `local-v2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ local-v2 plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ local-v2 plugins unlink
  $ local-v2 plugins remove

EXAMPLES
  $ local-v2 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/uninstall.ts)_

## `local-v2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ local-v2 plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ local-v2 plugins unlink
  $ local-v2 plugins remove

EXAMPLES
  $ local-v2 plugins unlink myplugin
```

## `local-v2 plugins update`

Update installed plugins.

```
USAGE
  $ local-v2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/update.ts)_

## `local-v2 run APP`

Say hello

```
USAGE
  $ local-v2 run APP

ARGUMENTS
  APP  app to run

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/run.ts](https://github.com/heroku/local-docker-hackday/blob/v0.0.0/src/commands/run.ts)_
<!-- commandsstop -->
