// AUTHOR: CSR丶SUSE
// TIME : 2021/9/8  9:46
// FILENAME: YangHui.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.leetcode.array;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

//杨辉三角
public class YangHui {
    public static List<List<Integer>> generate(int numRows) {
        List<List<Integer>> all = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            List<Integer> list = new LinkedList<>();
            for (int j = 0; j <= i; j++) {
                if (i == 0 || j == 0 || j == i) {
                    list.add(1);
                } else {
                    int res = all.get(i - 1).get(j - 1) + all.get(i - 1).get(j);
                    list.add(res);
                }
            }
            all.add(list);
        }
        return all;
    }


    @Test
    public void yanghuiTest() {
        List<List<Integer>> generate = generate(5);
        System.out.println(generate);
    }
}
