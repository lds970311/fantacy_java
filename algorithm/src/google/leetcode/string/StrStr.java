package google.leetcode.string;

// Author : CSR丶SUSE
// Time ： 2021-09-18  21:54
// TOOLS : INTELLIJ IDEA
// FILENAME : StrStr.java

import org.junit.jupiter.api.Test;

/**
 * <p>
 * 28. 给你两个字符串haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。
 */
public class StrStr {
    public static int strStr(String haystack, String needle) {
        if (needle.length() == 0) {
            return 0;
        }
        int len = haystack.length();
        int sublen = needle.length();
        for (int i = 0; i < len; i++) {
            boolean flag = true;
            if (haystack.charAt(i) == needle.charAt(0)) {
                for (int j = 0; j < sublen; j++) {
                    if ((i + j) < len && haystack.charAt(i + j) != needle.charAt(j)) {
                        flag = false;
                    }
                }
                if (flag) {
                    return i;
                }
            }
        }
        return -1;
    }

    @Test
    public void strTest() {
        String haystack = "aaaaa";
        String needle = "aaaaaa";
        int i = strStr(haystack, needle);
        System.out.println(i);
    }
}
