package google.part1.fib;

// Author : CSR丶SUSE
// Time ： 2021/8/28  17:00
// TOOLS : INTELLIJ IDEA
// FILENAME : Fib.java
// STATEMENT: 斐波那契数列


public class Fib {

    public static int fib1(int n) {
        if (n == 1 || n == 2) {
            return n - 1;
        }
        return fib1(n - 1) + fib1(n - 2);
    }

    //方法w
    public static int fib2(int n) {
        if (n <= 1) {
            return n;
        }
        int first = 0;
        int second = 1;
        for (int i = 0; i < n - 1; i++) {
            int res = first + second;
            first = second;
            second = res;
        }
        return second;
    }

    public static int fib3(int n) {
        double c = Math.sqrt(5);
        return (int) ((Math.pow((1 + c) / 2, n) - Math.pow((1 - c) / 2, n)) / c);
    }

    public static void main(String[] args) {
       /* int res = fib1(20);
        System.out.println(res);*/

        /*System.out.println(fib2(1));
        System.out.println(fib2(2));
        System.out.println(fib2(3));
        System.out.println(fib2(4));
        System.out.println(fib2(5));
        System.out.println(fib2(6));
        System.out.println(fib2(64));*/

        System.out.println(fib3(1));
        System.out.println(fib3(5));
        System.out.println(fib3(12));
    }
}
