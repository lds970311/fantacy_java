/**
 * 是否含有子串
 */

function isContains(str, substr) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === substr.charAt(0)) {
            if (str.substr(i, substr.length) === substr) {
                return true;
            }
        }
    }
    return false;
}

console.log(isContains("abcdef", "fc"))