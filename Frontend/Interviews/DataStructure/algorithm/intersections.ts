/**
 * 349. 两个数组的交集
 *  输入：nums1 = [1,2,2,1], nums2 = [2,2]
 *      输出：[2]
 */


function intersection(nums1: number[], nums2: number[]): number[] {
    let inter = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            inter.add(nums1[i]);
        }
    }
    // @ts-ignore
    return [...inter]
}

console.log(intersection([2, 2], [1, 2, 2, 1]))
