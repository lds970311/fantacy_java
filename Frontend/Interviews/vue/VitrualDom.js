class VirtualDom {
    constructor(tag, props, children, key) {
        this.tag = tag;
        this.props = props;
        if (Array.isArray(children)) {
            this.children = children;
        } else {
            this.key = children;
            this.children = null;
        }
        if (key) {
            this.key = key;
        } else {
            this.key = "";
        }
    }

    createElement(tag, props, child, key) {
        let el = document.createElement(tag);
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                const value = props[key];
                el.setAttribute(key, value);
            }
        }
        if (key) {
            el.setAttribute('key', key);
        }
        if (child) {
            child.forEach((element) => {
                let child;
                if (element instanceof VirtualDom) {
                    child = this.createElement(element.tag, element.props, element.children, element.key);
                } else {
                    child = document.createTextNode(typeof element === "string" ? element : "");
                }
                el.appendChild(child);
            });
        }
        return el;
    }
}

//# sourceMappingURL=VitrualDom.js.map