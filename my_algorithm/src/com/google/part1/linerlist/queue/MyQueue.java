// AUTHOR: CSR丶SUSE
// TIME : 2021/9/1  10:57
// FILENAME: MyQueue.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.part1.linerlist.queue;


import com.google.part1.linerlist.linkedlist.DoubleLinkedList;
import org.junit.jupiter.api.Test;

/**
 * 队列
 */
public class MyQueue<E> implements IQueue<E> {
    private DoubleLinkedList<E> list;

    public MyQueue() {
        this.list = new DoubleLinkedList<>();
    }

    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }


    /**
     * 元素加入队列
     *
     * @param element 元素
     */
    public void enqueue(E element) {
        list.add(element);
    }

    /**
     * 删除头部元素
     *
     * @return 删除的元素
     */
    public E dequeue() {
        return list.delete(0);
    }

    public E front() {
        return list.get(0);
    }

    public void clear() {
        this.list.clear();
    }

    public void printList() {
        list.print();
    }

    @Test
    public void queueTest() {
        MyQueue<Integer> myQueue = new MyQueue<>();
        for (int i = 5; i < 12; i++) {
            myQueue.enqueue(i);
        }

        System.out.println(myQueue.front());

//        myQueue.printList();

        while (!myQueue.isEmpty()) {
            System.out.print(myQueue.dequeue() + " ");
        }
    }
}
