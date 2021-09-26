// AUTHOR: CSR丶SUSE
// TIME : 2021-09-26  12:47
// FILENAME: LocalTimeTest.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.bytedance.commonapi.datetime;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;

public class LocalTimeTest {

    @Test
    public void localDateTest() {
        LocalDate now = LocalDate.now();
        System.out.println(now);
        System.out.println(now.isLeapYear());
    }
}
