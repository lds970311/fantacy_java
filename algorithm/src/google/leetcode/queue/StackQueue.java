// AUTHOR: CSR丶SUSE
// TIME : 2021/9/1  11:58
// FILENAME: StackQueue.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.leetcode.queue;

import java.util.Stack;

//用栈实现队列
public class StackQueue {
    private Stack<Integer> inStack;
    private Stack<Integer> outStack;


    public StackQueue() {
        this.inStack = new Stack<>();
        this.outStack = new Stack<>();
    }

    /**
     * Push element x to the back of queue.
     */
    public void push(int x) {
        this.inStack.push(x);
    }

    /**
     * Removes the element from in front of queue and returns that element.
     */
    public int pop() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }
        return outStack.pop();
    }

    /**
     * Get the front element.
     */
    public int peek() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }
        return outStack.peek();
    }

    /**
     * Returns whether the queue is empty.
     */
    public boolean empty() {
        return inStack.isEmpty() && outStack.isEmpty();
    }
}
