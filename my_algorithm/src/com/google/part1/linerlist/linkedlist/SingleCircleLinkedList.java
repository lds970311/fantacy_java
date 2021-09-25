// AUTHOR: CSR丶SUSE
// TIME : 2021/8/30  23:25
// FILENAME: SingleCircleLinkedList.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.part1.linerlist.linkedlist;


import com.google.part1.linerlist.dynamicarray.DynamicListInterface;
import org.junit.jupiter.api.Test;

public class SingleCircleLinkedList<T> implements DynamicListInterface<T> {
    private int size = 0;
    private Node<T> first;

    public SingleCircleLinkedList() {
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public boolean contains(T element) {
        Node<T> temp = this.first;
        if (element == null) {
            for (int i = 0; i < this.size; i++) {
                if (temp.getElement() == null) {
                    return true;
                }
                temp = temp.getNext();
            }
        } else {
            for (int i = 0; i < this.size(); i++) {
                if (element.equals(temp.getElement())) {
                    return true;
                }
                temp = temp.getNext();
            }
        }
        return false;
    }

    public void add(T element) {
        this.add(this.size, element);
    }

    public void add(int index, T element) {
        if (index != 0) {
            Node<T> node = this.getNode(index - 1);
            Node<T> newNode = new Node<T>(element, node.next);
            node.next = newNode;
        } else {
            this.first = new Node<T>(element, this.first);
            //拿到最后一个节点
            Node<T> last = (this.size == 0) ? this.first : this.getNode(size - 1);
            last.setNext(first);
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
            Node<T> last = this.getNode(this.size - 1);
            this.first = first.next;
            //最后一个节点重新指向新的头结点
            last.setNext(first);
        } else {
            outOfRangeCheck(index);
            Node<T> node = this.getNode(index - 1);
            node.next = node.getNext().getNext();
        }
        this.size--;
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

    private static class Node<T> {
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

class TestC {
    @Test
    public void task() {
        SingleCircleLinkedList<Integer> singleCircleLinkedList = new SingleCircleLinkedList<>();
        for (int i = 3; i < 10; i++) {
            singleCircleLinkedList.add(i);
        }
        singleCircleLinkedList.remove(2);
        singleCircleLinkedList.remove(Integer.valueOf(8));
        singleCircleLinkedList.add(2, 11);
        System.out.println(singleCircleLinkedList.contains(null));

        singleCircleLinkedList.print();
    }
}
