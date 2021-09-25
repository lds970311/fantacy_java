// AUTHOR: CSR丶SUSE
// TIME : 2021/9/7  11:45
// FILENAME: MyPOW.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.leetcode.math;


import org.testng.annotations.Test;

public class MyPOW {
    public static double myPow(double x, int n) {
        if (x == 0) {
            return 0;
        }
        if (n == 0) {
            return x == 0 ? 0 : 1;
        }
        double result = 1;
        for (int i = 1; i < n; i++) {
            x = x * x;
        }
        if (n < 0) {
            if (x < 0) {
                if (n % 2 != 0) {
                    return 0 - (1 / x);
                } else {
                    return 1 / x;
                }
            }
            result = 1 / x;
        } else {
            if (x < 0) {
                if (n % 2 != 0) {
                    return 0 - x;
                } else {
                    return x;
                }
            }
            result = x;
        }
        return result;
    }

    @Test
    public void test() {
        System.out.println(myPow(-2, 3));
    }
}
