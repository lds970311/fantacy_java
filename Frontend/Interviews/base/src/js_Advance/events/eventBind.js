function bindEvent(el, type, selector, fn) {
    // 如果第四个参数不存在，则第三个参数就是fn
    if (!fn) {
        fn = selector
        selector = ''
    }
    // 普通的事件监听
    if (!selector) {
        el.addEventListener(type, fn)
        return
    }
    // 事件委托
    el.addEventListener(type, event => {
        let element = event.target
        // 点击的元素是否匹配期望的选择器
        while (!element.matches(selector)) {
            if (element === el) {
                element = null
                break
            }
            element = element.parentNode
        }
        element && fn.call(element, event, element)
    })
}

const lis = document.querySelector(".content ul")

bindEvent(lis, "click", "li", function () {
    console.log("123")
})
