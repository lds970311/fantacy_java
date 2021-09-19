function strStr(haystack: string, needle: string): number {
    if (haystack.length === 0 || needle.length === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            //开始比较
            if (haystack.substr(i, needle.length) === needle) {
                return i;
            }
        }
    }
    return -1;
};

let haystack = ""
let needle = ""

const number = strStr(haystack, needle);
console.log(number);
