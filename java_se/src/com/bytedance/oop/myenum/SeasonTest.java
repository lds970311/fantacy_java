// AUTHOR: CSR丶SUSE
// TIME : 2021-09-25  21:08
// FILENAME: SeasonTest.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.bytedance.oop.myenum;

public class SeasonTest {
    public static void main(String[] args) {
        Seasons spring = Seasons.SPRING;
        System.out.println(spring);
        System.out.println(spring.ordinal());
        System.out.println(spring.name());
    }
}
