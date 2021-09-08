// AUTHOR: CSR丶SUSE
// TIME : 2021/9/3  15:24
// FILENAME: RemoveElement.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.leetcode.array;

import org.junit.Test;


public class RemoveElement {
    public static int removeElement(int[] nums, int val) {
        int len = nums.length;
        int j = 0;
        for (int i = 1; i < len; i++) {
            if (nums[i] != val) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j + 1;
    }

    @Test
    public void test() {
        int[] nums = {0, 1, 2, 2, 3, 0, 4, 2};
        int val = 2;
        System.out.println(removeElement(nums, val));
    }
}
