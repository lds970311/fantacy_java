/**
 * 策略模式. 实现表单验证的策略
 */

const ruleMap = {
    notNull(val: string, msg: string): string | undefined {
        if (!val.trim()) {
            return msg;
        }
    },
    isEmail(val: string, msg: string): string | undefined {
        const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!ePattern.test(val)) {
            return msg;
        }
    },
    isPassword(val: string, msg: string): string | undefined {
        const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if (!pPattern.test(val)) {
            return msg;
        }
    },
    isTel(val: string, msg: string): string | undefined {
        const mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        if (!mPattern.test(msg)) {
            return msg;
        }
    }
}

//由与校验表单数据
class Validator {
    private caches: Function[];

    constructor() {
        this.caches = []
    }

    addRules(ruleKey: string, ...args: (FormDataEntryValue | null)[]): void {
        // @ts-ignore
        const ruleFunc = ruleMap[ruleKey]
        this.caches.push(function () {
            return ruleFunc(...args)
        })
    }

    validate() {
        const errList: string[] = [];
        this.caches.forEach(fn => {
            const result = fn();
                if (result) {
                    //说明有错误信息
                    errList.push(result)
                }
            }
        )
        if (errList.length !== 0) {
            return Promise.reject(errList)
        } else {
            return Promise.resolve("验证通过!")
        }
    }
}

//表单绑定提交事件
const form: HTMLFormElement = document.querySelector(".my-form form")!

form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    let formData = new FormData(form)
    console.log(formData)
    const validator = new Validator();
    validator.addRules("notNull", formData.get("usrName"), "请输入用户名")
    validator.addRules("isEmail", formData.get("email"), "邮箱格式不正确")
    validator.addRules("isPassword", formData.get("password"), "密码格式不正确")
    validator.addRules("isTel", formData.get("tel"), "手机号格式不正确")

    validator.validate().then((res) => {
        console.log(res)
    }).catch(error => {
        console.log(error)
    })

})