/**
 * 策略模式. 实现表单验证的策略
 */
var ruleMap = {
    notNull: function (val, msg) {
        if (!val.trim()) {
            return msg;
        }
    },
    isEmail: function (val, msg) {
        var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!ePattern.test(val)) {
            return msg;
        }
    },
    isPassword: function (val, msg) {
        var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if (!pPattern.test(val)) {
            return msg;
        }
    },
    isTel: function (val, msg) {
        var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        if (!mPattern.test(msg)) {
            return msg;
        }
    }
};
//由与校验表单数据
var Validator = /** @class */ (function () {
    function Validator() {
        this.caches = [];
    }
    Validator.prototype.addRules = function (ruleKey) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // @ts-ignore
        var ruleFunc = ruleMap[ruleKey];
        this.caches.push(function () {
            return ruleFunc.apply(void 0, args);
        });
    };
    Validator.prototype.validate = function () {
        var errList = [];
        this.caches.forEach(function (fn) {
            var result = fn();
            if (result) {
                //说明有错误信息
                errList.push(result);
            }
        });
        if (errList.length !== 0) {
            return Promise.reject(errList);
        }
        else {
            return Promise.resolve("验证通过!");
        }
    };
    return Validator;
}());
//表单绑定提交事件
var form = document.querySelector(".my-form form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var formData = new FormData(form);
    console.log(formData);
    var validator = new Validator();
    validator.addRules("notNull", formData.get("usrName"), "请输入用户名");
    validator.addRules("isEmail", formData.get("email"), "邮箱格式不正确");
    validator.addRules("isPassword", formData.get("password"), "密码格式不正确");
    validator.addRules("isTel", formData.get("tel"), "手机号格式不正确");
    validator.validate().then(function (res) {
        console.log(res);
    })["catch"](function (error) {
        console.log(error);
    });
});
