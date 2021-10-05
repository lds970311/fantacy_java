// @ts-ignore
function formatDate(timeStamp: number): string {
    let date = new Date(timeStamp);
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + '-'
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':'
    let m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) + ":" : date.getMinutes() + ":"
    let s = date.getSeconds();

    return Y + M + D + h + m + s;
}

module.exports = {
    formatDate: formatDate
}
