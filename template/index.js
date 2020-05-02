#!/usr/bin/env node

const handleError = require('cli-handle-error')
const cli = require('./utils/cli.js')
const init = require('./utils/init.js')

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  handleError(`UNHANDLED ERROR`, err)
})

/**
 * {{_ "startCase" name}}.
 */
;(async () => {
  try {
    // Init.
    init()

    // Start.
    console.log(cli.input)
    console.log(cli.flags)
  } catch (error) {
    handleError(error.name, error)
  }
})()
