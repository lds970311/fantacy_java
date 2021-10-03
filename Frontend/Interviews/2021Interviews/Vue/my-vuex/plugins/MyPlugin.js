/*function formatDate(timestamp, formatter) {
    let day = timestamp.getDate()
    let month = timestamp.getMonth() + 1
    let year = timestamp.getFullYear()
    formatter = formatter.replace(/yyyy/, year)
    formatter = formatter.replace(/MM/, month)
    formatter = formatter.replace(/dd/, day)
    return formatter
}*/

const MyPlugin = {
    install(Vue) {
        Vue.directive('dateformat', {
            bind(el, binding) {
                console.log(el, binding)
                //el.innerText = formatDate(el.innerText, 'yyyy年MM月dd日')
            }
        })
    }
}


export default MyPlugin
