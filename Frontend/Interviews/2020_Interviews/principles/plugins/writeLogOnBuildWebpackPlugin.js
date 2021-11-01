const pluginName = 'WriteLogOnBuildWebpackPlugin'
const path = require('path')
const fs = require('fs')


class WriteLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, (compilation) => {
            this.writeLog()
        })
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${year}-${month}-${day} :${hour}:${minute}:${second}`;
    }

    writeLog(option) {
        const p = path.join(__dirname, '../log/start.log')
        let data = {
            name: pluginName,
            time: this.formatDate(new Date()),
            opt: option || "haha"
        }
        fs.writeFileSync(p, JSON.stringify(data), {
            encoding: 'utf-8',
            mode: 0o755,
            flag: 'w'
        })
    }
}


module.exports = WriteLogOnBuildWebpackPlugin