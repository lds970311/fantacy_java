// AUTHOR: CSR丶SUSE
// TIME : 2021-09-26  15:45
// FILENAME: StringTest.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.bytedance.stringapi;

public class StringTest {
    public static void main(String[] args) {
        String s1 = "abc" + "def";
        String s2 = new String(s1);
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
    }
}
