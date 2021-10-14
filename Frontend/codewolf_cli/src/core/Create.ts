// @ts-ignore
const program = require('commander')
const createProgram = require('../actions/CreateProjectAction')
/**
 *  创建工程
 */
// @ts-ignore
const createCommand = async function (): void {
    program
        .command('create <project> [...others]')
        .description('clone repository into a folder')
        .action((project, others) => {
            // console.log(project, others)
            createProgram(project, others)
        })
}

module.exports = createCommand
