// @ts-ignore
const program = require('commander')
// @ts-ignore
const createCommand = function () {
    program
        .command('create <project>')
}

module.exports = createCommand
