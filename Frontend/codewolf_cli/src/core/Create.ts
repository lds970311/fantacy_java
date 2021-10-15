// @ts-ignore
const program = require('commander')
const createProgram = require('../actions/CreateProjectAction')
// @ts-ignore
const addVueComponentAction = require('../actions/AddComponentAction');
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

    /**
     * 添加vue组件
     */
    program
        .command("add-vue-component <name>")
        .description('add vue component', '例如: wolf add-vue-component -d src/components')
        .action((project, others) => {
            addVueComponentAction(project, others)
        })
}

module.exports = createCommand
