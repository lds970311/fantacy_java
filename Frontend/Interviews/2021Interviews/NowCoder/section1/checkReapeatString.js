/**
 * FED56 检查重复字符串
 *      给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 *              输入：
 *                    'rattler'
 *                   输出：
 *                       true
 */

function containsRepeatingLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            return true;
        }
    }
    return false;
}

console.log(containsRepeatingLetter("l33t"));
