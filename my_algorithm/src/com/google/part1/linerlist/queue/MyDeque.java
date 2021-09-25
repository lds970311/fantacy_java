// AUTHOR: CSR丶SUSE
// TIME : 2021/9/1  12:25
// FILENAME: MyDeque.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.part1.linerlist.queue;


import com.google.part1.linerlist.linkedlist.DoubleLinkedList;
import org.junit.jupiter.api.Test;

public class MyDeque<E> implements IDeque<E> {
    private DoubleLinkedList<E> list;

    public MyDeque() {
        this.list = new DoubleLinkedList<>();
    }

    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    @Override
    public void enqueue(E element) {
        list.add(element);
    }

    @Override
    public E dequeue() {
        return list.delete(0);
    }

    public void clear() {
        list.clear();
    }


    public void enQueueFront(E element) {
        list.add(0, element);
    }

    public E deQueueRear() {
        return list.delete(list.size() - 1);
    }

    public E front() {
        return list.get(0);
    }

    public E rear() {
        return list.get(list.size() - 1);
    }

    @Test
    public void dequeTest() {
        MyDeque<Integer> myQueue = new MyDeque<>();
        for (int i = 10; i < 14; i++) {
            myQueue.enqueue(i);
        }

        for (int i = 0; i < 5; i++) {
            myQueue.enQueueFront(i);
        }

        while (!myQueue.isEmpty()) {
//            System.out.println(myQueue.dequeue() + " ");
            System.out.println(myQueue.deQueueRear());
        }
    }
}
