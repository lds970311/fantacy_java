// AUTHOR: CSR丶SUSE
// TIME : 2021/8/31  13:14
// FILENAME: DoubleCircleLinkedList.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.part1.linerlist.linkedlist;

import com.google.part1.linerlist.dynamicarray.DynamicListInterface;
import org.junit.jupiter.api.Test;

public class DoubleCircleLinkedList<T> implements DynamicListInterface<T> {
    private int size;
    private Node<T> first;
    private Node<T> last;

    @Override
    public int size() {
        return this.size;
    }

    @Override
    public boolean isEmpty() {
        return this.size == 0;
    }

    @Override
    public boolean contains(T element) {
        return false;
    }

    @Override
    public void add(T element) {
        this.add(this.size, element);
    }

    @Override
    public void add(int index, T element) {
        this.outOfRangeCheck(index);
        //获取最后一个节点
        if (index == this.size) {
            Node<T> oldLast = this.last;
            if (oldLast == null) {
                //链表中没有元素
                Node<T> newNode = new Node<>(element);
                this.first = newNode;
                this.last = newNode;
                newNode.setNext(newNode);
                newNode.setPrev(newNode);
            } else {
                //链表中有多个元素
                Node<T> newNode = new Node<>(element, oldLast, this.first);
                oldLast.next = newNode;
                this.last = newNode;
            }
        } else {
            //在中间插入节点
            Node<T> next = this.getNode(index);
            Node<T> prev = next.prev;
            Node<T> newNode = new Node<>(element, prev, next);
            prev.setNext(newNode);
            next.setPrev(newNode);
            if (prev == next) {
                //原来只有一个节点
                this.first = newNode;
            }
        }
        this.size++;
    }

    @Override
    public T get(int index) {
        return this.getNode(index).getElement();
    }

    @Override
    public void set(int index, T element) {
        outOfRangeCheck(index);
        Node<T> temp = this.first;
        for (int i = 0; i < this.size(); i++) {
            if (i == index) {
                //修改
                temp.setElement(element);
            }
            temp = temp.getNext();
        }
    }

    @Override
    public void remove(int index) throws Exception {
        outOfRangeCheck(index);
        if (index == 0) {
            //删除第一个节点
            if (this.first == this.last) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }
        } else {
            Node<T> deleteNode = this.getNode(index);
            deleteNode.prev.next = deleteNode.next;
            deleteNode.next.prev = deleteNode.prev;
            if (deleteNode == this.last) {
                this.last = deleteNode.prev;
            }
        }
        this.size--;
    }

    @Override
    public void remove(T element) {
        try {
            this.remove(indexOf(element));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void clear() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    private Node<T> getNode(int index) {
        outOfRangeCheck(index);
        Node<T> temp = this.first;
        for (int i = 0; i < this.size(); i++) {
            if (index == i) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    @Override
    public int indexOf(T element) {
        Node<T> temp = this.first;
        if (element == null) {
            for (int i = 0; i < this.size(); i++) {
                if (temp.getElement() == null) {
                    return i;
                }
                temp = temp.next;
            }
        } else {
            for (int i = 0; i < this.size(); i++) {
                if (element.equals(temp.getElement())) {
                    return i;
                }
                temp = temp.next;
            }
        }
        return -1;
    }

    @Override
    public void print() {
        System.out.print("[");
        for (int i = 0; i < this.size(); i++) {
            System.out.print(" " + this.get(i) + ",");
        }
        System.out.println("]");
    }

    private void outOfRangeCheck(int index) {
        if (index < 0 || index > this.size) {
            throw new IndexOutOfBoundsException("range error!");
        }
    }

    private static class Node<T> {
        T element;
        Node<T> prev;
        Node<T> next;

        public Node(T element) {
            this.element = element;
        }

        public Node(T element, Node<T> prev, Node<T> next) {
            this.element = element;
            this.prev = prev;
            this.next = next;
        }

        public T getElement() {
            return element;
        }

        public void setElement(T element) {
            this.element = element;
        }

        public Node<T> getPrev() {
            return prev;
        }

        public void setPrev(Node<T> prev) {
            this.prev = prev;
        }

        public Node<T> getNext() {
            return next;
        }

        public void setNext(Node<T> next) {
            this.next = next;
        }
    }
}


class TestD {
    @Test
    public void myTask() {
        DoubleCircleLinkedList<Integer> doubleCircleLinkedList = new DoubleCircleLinkedList<>();
        for (int i = 5; i < 12; i++) {
            doubleCircleLinkedList.add(i);
        }
        //doubleCircleLinkedList.add(0, 11);
        System.out.println(doubleCircleLinkedList.indexOf(11));

        try {
            doubleCircleLinkedList.remove(5);
            doubleCircleLinkedList.set(4, 999);
        } catch (Exception e) {
            e.printStackTrace();
        }

        doubleCircleLinkedList.print();
    }
}