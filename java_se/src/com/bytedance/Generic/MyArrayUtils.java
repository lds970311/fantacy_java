// AUTHOR: CSR丶SUSE
// TIME : 2021-09-26  18:28
// FILENAME: MyArrayUtils.java
// TOOLS : INTELLIJ IDEA

/**
 * （1）可以在任意类型的对象数组中，查找某个元素的下标，按照顺序查找，如果有重复的，就返回第一个找到的，如果没有返回-1
 * <p>
 * （2）可以在任意类型的对象数组中，查找最大值，要求元素必须实现Comparable接口
 * <p>
 * （3）可以在任意类型的对象数组中，查找最大值，按照指定定制比较器来比较元素大小
 * <p>
 * （4）可以给任意对象数组进行从小到大排序，要求数组元素类型必须实现Comparable接口
 * <p>
 * （5）可以给任意对象数组进行从小到大排序，只要你指定定制比较器对象，不要求数组元素实现Comparable接口
 * <p>
 * （6）可以将任意对象数组的元素拼接为一个字符串返回
 */


package com.bytedance.Generic;

import org.junit.jupiter.api.Test;

import java.util.Comparator;

public class MyArrayUtils {
    public static <T> int find(T[] arr, T value) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(value)) {
                return i;
            }
        }
        return -1;
    }

    //可以在任意类型的对象数组中，查找最大值，要求元素必须实现Comparable接口
    public static <T extends Comparable<? super T>> T getMax(T[] arr) {
        T max = arr[0];
        for (T t : arr) {
            if (max.compareTo(t) < 0) {
                max = t;
            }
        }
        return max;
    }

    //可以给任意对象数组进行从小到大排序，要求数组元素类型必须实现Comparable接口
    public static <T extends Comparable<? super T>> void sort(T[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j].compareTo(arr[j + 1]) > 0) {
                    T temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j] = temp;
                }
            }
        }
    }

    //可以给任意对象数组进行从小到大排序，只要你指定定制比较器对象，不要求数组元素实现Comparable接口
    public static <T> void sort(T[] arr, Comparator<? super T> c) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (c.compare(arr[minIndex], arr[j]) > 0) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                T temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }

    //可以将任意对象数组的元素拼接为一个字符串返回
    public static <T> String toString(T[] arr) {
        StringBuilder str = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            if (i == 0) {
                str.append(arr[i]);
            } else {
                str.append(",").append(arr[i]);
            }
        }
        str.append("]");
        return str.toString();
    }

}

class Test1 {
    @Test
    public void arrayUtilTest() {
        Integer[] arr = {3, 1, 6, 4, 8, 12, 9};
        System.out.println(MyArrayUtils.find(arr, 1));
        System.out.println(MyArrayUtils.getMax(arr));
        //MyArrayUtils.sort(arr);
        MyArrayUtils.sort(arr, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1 - o2;
            }
        });
        System.out.println(MyArrayUtils.toString(arr));
    }
}
