package com.google.part1.linerlist.linkedlist;


import com.google.part1.linerlist.dynamicarray.DynamicListInterface;

public class MyLinkedList<T> implements DynamicListInterface<T> {
    private int size = 0;
    private Node<T> first;

    public MyLinkedList() {
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public boolean contains(T element) {
        return false;
    }

    public void add(T element) {
        this.add(this.size, element);
    }

    public void add(int index, T element) {
        if (index != 0) {
            Node<T> node = this.getNode(index - 1);
            Node<T> newNode = new Node<>(element, node.next);
            node.next = newNode;
        } else {
            this.first = new Node<>(element, this.first);
        }
        this.size++;
    }

    public T get(int index) {
        return this.getNode(index).getElement();
    }

    public void set(int index, T element) {
        outOfRangeCheck(index);
        Node<T> node = this.getNode(index);
        node.setElement(element);
    }

    public void remove(int index) {
        if (index == 0) {
            this.first = first.next;
        } else {
            outOfRangeCheck(index);
            Node<T> node = this.getNode(index - 1);
            node.next = node.getNext().getNext();
        }
        this.size--;
    }

    public T removeElement(int index) {
        if (index == 0) {
            Node<T> tempNode = this.first;
            this.first = first.next;
            this.size--;
            return tempNode.getElement();
        } else {
            outOfRangeCheck(index);
            Node<T> node = this.getNode(index - 1);
            Node<T> deleteNode = this.getNode(index);
            node.next = node.getNext().getNext();
            this.size--;
            return deleteNode.getElement();
        }
    }

    public void remove(T element) {
        this.remove(indexOf(element));
    }

    public void clear() {
        this.size = 0;
        this.first = null;
    }

    public int indexOf(T element) {
        Node<T> temp = first;
        int i = 0;
        if (element == null) {
            while (temp.getNext() != null) {
                if (temp.getElement() == null) {
                    return i;
                }
                i++;
                temp.setNext(temp.getNext());
            }
        } else {
            while (temp.getNext() != null) {
                if (element.equals(temp.getElement())) {
                    return i;
                }
                i++;
                temp = temp.getNext();
            }
        }
        return -1;
    }

    private Node<T> getNode(int index) {
        outOfRangeCheck(index);
        Node<T> temp = first;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    private void outOfRangeCheck(int index) {
        if (index < 0 || index > this.size) {
            throw new IndexOutOfBoundsException("range error!");
        }
    }

    public void print() {
        System.out.print("[");
        for (int i = 0; i < this.size(); i++) {
            System.out.print(" " + this.get(i) + ",");
        }
        System.out.println("]");
    }

    public void reverse() {

    }

    static class Node<T> {
        T element;
        Node<T> next;

        public Node(T element) {
            this.element = element;
            this.next = null;
        }

        public Node(T element, Node<T> next) {
            this.element = element;
            this.next = next;
        }

        public T getElement() {
            return element;
        }

        public void setElement(T element) {
            this.element = element;
        }

        public Node<T> getNext() {
            return next;
        }

        public void setNext(Node<T> next) {
            this.next = next;
        }


        public String toString() {
            return "Node{" +
                    "element=" + element +
                    '}';
        }
    }
}

class Test {
    @org.junit.jupiter.api.Test
    public void task() {
        /*  DynamicListInterface<Integer> linkedList = new MyLinkedList<>();*/
        MyLinkedList<Integer> linkedList = new MyLinkedList<>();
        for (int i = 0; i < 10; i++) {
            linkedList.add(i + 1);
        }
        linkedList.set(0, 9);
        linkedList.add(1, 12);
        linkedList.remove(new Integer(12));

        linkedList.print();

        System.out.println("size:" + linkedList.size());
    }
}
