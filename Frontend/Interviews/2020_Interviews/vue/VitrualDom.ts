//模拟VDOM

class VirtualDom {
    private tag: string;
    private props: Object;
    private children: Array<VirtualDom> | null
    private key: string

    constructor(tag: string, props: Object, children: string | Array<VirtualDom>, key: string) {
        this.tag = tag;
        this.props = props;
        if (Array.isArray(children)) {
            this.children = children
        } else {
            this.key = children
            this.children = null
        }
        if (key) {
            this.key = key;
        } else {
            this.key = ""
        }
    }

    createElement(tag: string, props: Object, child: any | Array<unknown>, key: string) {
        let el = document.createElement(tag);
        //设置节点属性
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                // @ts-ignore
                const value = props[key]
                el.setAttribute(key, value);
            }
        }
        if (key) {
            el.setAttribute('key', key)
        }
        //递归添加子节点
        if (child) {
            child.forEach((element: Array<VirtualDom> | string) => {
                let child;
                if (element instanceof VirtualDom) {
                    child = this.createElement(
                        element.tag,
                        element.props,
                        element.children,
                        element.key
                    )
                } else {
                    child = document.createTextNode(typeof element === "string" ? element : "")
                }
                el.appendChild(child)
            })
        }
        return el;
    }
}