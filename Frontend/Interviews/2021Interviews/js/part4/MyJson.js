/**
 * 手动实现JSON.parse / stringify
 */

if (!window.JSON) {
    window.JSON = {
        parse: function (sJSON) {
            return eval("(" + sJSON + ")");
        },
        stringify: (function () {
            let toString = Object.prototype.toString;
            let isArray =
                Array.isArray ||
                function (a) {
                    return toString.call(a) === "[object Array]";
                };
            let escMap = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
            };
            let escFunc = function (m) {
                return (
                    escMap[m] ||
                    "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1)
                );
            };
            let escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function stringify(value) {
                if (value == null) {
                    return "null";
                } else if (typeof value === "number") {
                    return isFinite(value) ? value.toString() : "null";
                } else if (typeof value === "boolean") {
                    return value.toString();
                } else if (typeof value === "object") {
                    if (typeof value.toJSON === "function") {
                        return stringify(value.toJSON());
                    } else if (isArray(value)) {
                        let res = "[";
                        for (let i = 0; i < value.length; i++)
                            res += (i ? ", " : "") + stringify(value[i]);
                        return res + "]";
                    } else if (toString.call(value) === "[object Object]") {
                        let tmp = [];
                        for (let k in value) {
                            if (value.hasOwnProperty(k))
                                tmp.push(stringify(k) + ": " + stringify(value[k]));
                        }
                        return "{" + tmp.join(", ") + "}";
                    }
                }
                return '"' + value.toString().replace(escRE, escFunc) + '"';
            };
        })(),
    };
}
