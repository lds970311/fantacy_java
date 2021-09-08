/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const newArray = nums1.concat(nums2)
    newArray.sort((a, b) => {
        return a - b
    })
    // console.log(newArray)
    let midNum;
    let mid;
    if (newArray.length % 2 === 0) {
        mid = newArray.length / 2;
        midNum = (newArray[mid] + newArray[mid - 1]) / 2
    } else {
        mid = Math.floor(newArray.length / 2);
        midNum = newArray[mid]
    }
    return midNum
};


console.log(findMedianSortedArrays([0, 0], [0, 0]));