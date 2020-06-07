import meow from 'meow'
import {blue, bold, cyan, yellow} from 'chalk'

export default meow(
  `
  ${bold('Usage')}
    ${blue(`{{name}}`)} ${cyan(`<input>`)} ${yellow(`[--option]`)}

  ${bold('Input')}
    ${cyan(`<input>`)}      input

  ${bold('Options')}
    ${yellow(`--option`)}, ${yellow(`-o`)}     option

  ${bold('Examples')}
`,
  {
    booleanDefault: undefined,
    description: false,
    hardRejection: false,
    inferType: false,
    input: [],
    flags: {}
  }
)
