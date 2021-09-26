// AUTHOR: CSR丶SUSE
// TIME : 2021-09-25  22:51
// FILENAME: MyInner.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.bytedance.oop.innerclass;


import org.junit.jupiter.api.Test;

public class MyInner {
    private static int a = 2;
    private int b;

    public MyInner(int b) {
        this.b = b;
    }

    public void outerMethod() {
        final int c = 3;
        class Inner {
            public void innerMethod() {
                System.out.println("out.a = " + a);
                System.out.println("out.b = " + b);
                System.out.println("out.c = " + c);
            }
        }
        Inner inner = new Inner();
        inner.innerMethod();
    }
}

class InnerTest {
    public InnerTest() {
    }

    @Test
    public void innerTest() {
        MyInner myInner = new MyInner(2);
        myInner.outerMethod();
    }
}

