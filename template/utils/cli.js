const meow = require('meow')
const chalk = require('chalk')
const blue = chalk.blue
const bold = chalk.bold
const cyan = chalk.cyan
const yellow = chalk.yellow

module.exports = meow(
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
    flags: {},
  },
)
