// AUTHOR: CSR丶SUSE
// TIME : 2021/9/3  12:20
// FILENAME: IntToRoman.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.leetcode.string;

import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

/**
 * 整数转罗马数字
 */
public class IntToRoman {
    public static String intToRoman(int num) {
        int[] values = new int[]{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] romans = new String[]{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < values.length; i++) {
            int value = values[i];
            String r = romans[i];
            while (num >= value) {
                num -= value;
                sb.append(r);
            }
            if (num == 0) {
                break;
            }
        }
        return sb.toString();
    }

    //罗马数字转整数

    public int romanToInt(String s) {
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int len = s.length();
        int result = 0;
        for (int i = 0; i < len; i++) {
            int val = romanMap.get(s.charAt(i));
            if (i < len - 1 && val < romanMap.get(s.charAt(i + 1))) {
                result -= val;
            } else {
                result += val;
            }
        }
        return result;
    }

    @Test
    public void romanTest() {
//        System.out.println(intToRoman(500));
        System.out.println(romanToInt("MCMXCIV"));
    }
}
