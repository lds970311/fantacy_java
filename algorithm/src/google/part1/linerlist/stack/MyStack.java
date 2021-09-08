// AUTHOR: CSR丶SUSE
// TIME : 2021/8/31  18:24
// FILENAME: MyStack.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.part1.linerlist.stack;


import google.part1.linerlist.linkedlist.MyLinkedList;
import org.junit.jupiter.api.Test;

public class MyStack<T> {
    private MyLinkedList<T> list;

    public MyStack() {
        this.list = new MyLinkedList<T>();
    }

    public void push(T element) {
        list.add(0, element);
    }

    public T pop() {
        return list.removeElement(0);
    }

    public T peek() {
        return list.get(0);
    }

    public boolean isEmpty() {
        return this.list.isEmpty();
    }

    @Test
    public void stackTest() {
        MyStack<Integer> myStack = new MyStack<>();
        for (int i = 3; i < 11; i++) {
            myStack.push(i);
        }
        while (!myStack.isEmpty()) {
            System.out.println(myStack.pop());
        }
    }

    public boolean isValid(String s) {
        while (s.contains("{}") || s.contains("[]") || s.contains("()")) {
            s.replace("{}", "");
            s.replace("[]", "");
            s.replace("()", "");
        }
        return s.equals("");
    }
}


