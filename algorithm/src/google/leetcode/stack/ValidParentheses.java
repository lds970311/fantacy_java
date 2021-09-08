// AUTHOR: CSR丶SUSE
// TIME : 2021/8/31  23:10
// FILENAME: ValidParentheses.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.leetcode.stack;

import org.junit.jupiter.api.Test;

import java.util.Stack;

/**
 * 有效的括号;
 * <p>
 * <p>
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */
public class ValidParentheses {
    public static boolean isValid(String s) {
        int len = s.length();
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < len; i++) {
            char c = s.charAt(i);
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                //找到的是右括号
                if (stack.isEmpty()) return false;
                char leftChar = stack.pop();
                if (leftChar == '(' && c != ')') return false;
                if (leftChar == '[' && c != ']') return false;
                if (leftChar == '{' && c != '}') return false;
            }
        }
        if (stack.isEmpty()) {
            return true;
        }
        return false;
    }

    @Test
    public void matchTest() {
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([)]"));
        System.out.println(isValid("{[]}"));
    }
}
