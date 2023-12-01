#!/usr/bin/env -S node --import esyes

// eslint-disable-next-line node/shebang
import {execute} from '@oclif/core'

await execute({dir: import.meta.url})
