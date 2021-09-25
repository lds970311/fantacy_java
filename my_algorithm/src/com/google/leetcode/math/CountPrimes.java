// AUTHOR: CSR丶SUSE
// TIME : 2021/9/9  22:53
// FILENAME: CountPrimes.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.leetcode.math;

import org.junit.jupiter.api.Test;

/**
 * 统计所有小于非负整数 n 的质数的数量。
 */
public class CountPrimes {
    public static int countPrimes(int n) {
        if (n == 0 || n == 1) {
            return 0;
        }
        int total = 0;
        for (int i = 2; i < n; i++) {
            if (isPrime(i)) {
                total++;
            }
        }
        return total;
    }

    private static boolean isPrime(int num) {
        boolean flag = true;
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = false;
            }
        }
        return flag;
    }

    @Test
    public void test() {
        int res = countPrimes(10);
        System.out.println(res);
    }
}
