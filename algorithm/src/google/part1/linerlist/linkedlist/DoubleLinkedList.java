// AUTHOR: CSR丶SUSE
// TIME : 2021/8/30  17:03
// FILENAME: DoubleLinkedList.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.part1.linerlist.linkedlist;


import google.part1.linerlist.dynamicarray.DynamicListInterface;
import org.junit.jupiter.api.Test;

/**
 * 双向链表
 */
public class DoubleLinkedList<T> implements DynamicListInterface<T> {
    private int size;
    private Node<T> first;
    private Node<T> last;


    public DoubleLinkedList() {
        this.size = 0;
    }

    public static void main(String[] args) {

    }

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
        for (Node<T> temp = this.first; temp != null; temp = temp.getNext()) {
            if (temp.getElement().equals(element)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void add(T element) {
        this.add(this.size, element);
    }

    @Override
    public void add(int index, T element) {
        try {
            indexRangeCheck(index);
            if (index == 0) {
                //在头部添加
                Node<T> node = new Node<>(element, this.first, null);
                if (this.first == null) {
                    this.first = node;
                    last = first;
                } else {
                    this.first.setPrev(node);
                    this.first = node;
                }
            } else if (index > 0 && index < this.size) {
                //中间插入
                Node<T> next = getNode(index);
                Node<T> prev = next.prev;
                Node<T> newNode = new Node<>(element, next, prev);

                prev.setNext(newNode);
                next.setPrev(newNode);
            } else {
                //index == size
                Node<T> newNode = new Node<>(element, null, this.last);
                if (this.last == null) {
                    this.last = newNode;
                    this.first = newNode;
                } else {
                    this.last.setNext(newNode);
                    this.last = newNode;
                }
            }
            this.size++;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public T get(int index) {
        return this.getNode(index).getElement();
    }

    @Override
    public void set(int index, T element) {

    }

    @Override
    public void remove(int index) throws Exception {
        indexRangeCheck(index);

        Node<T> deleteNode = getNode(index);
        Node<T> prev = deleteNode.getPrev();
        Node<T> next = deleteNode.getNext();

        if (prev == null) {
            //index == 0;
            this.first = next;
        } else {
            prev.setNext(next);
        }
        if (next == null) {
            // size == index -1;
            this.last = prev;
        } else {
            next.setPrev(prev);
        }
        this.size--;
    }

    public T delete(int index) {
        try {
            indexRangeCheck(index);
            Node<T> deleteNode = getNode(index);
            Node<T> prev = deleteNode.getPrev();
            Node<T> next = deleteNode.getNext();

            if (prev == null) {
                //index == 0;
                this.first = next;
            } else {
                prev.setNext(next);
            }
            if (next == null) {
                // size == index -1;
                this.last = prev;
            } else {
                next.setPrev(prev);
            }
            this.size--;
            return deleteNode.getElement();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
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

    @Override
    public int indexOf(T element) {
        if (element == null) {
            return -1;
        }
        int i = 0;
        for (Node<T> temp = this.first; temp != null; temp = temp.getNext()) {
            if (element.equals(temp.getElement())) {
                return i;
            }
            i++;
        }
        return -1;
    }

    public Node<T> getNode(int index) {
        try {
            indexRangeCheck(index);
            if (index < (this.size >> 1)) {
                Node<T> temp = this.first;
                for (int i = 0; i < index; i++) {
                    temp = temp.getNext();
                }
                return temp;
            } else {
                //查找的位置在右侧
                Node<T> temp = this.last;
                for (int i = this.size - 1; i > index; i--) {
                    temp = temp.getPrev();
                }
                return temp;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private void indexRangeCheck(int index) throws Exception {
        if (index < 0 || index > this.size()) {
            throw new IndexOutOfBoundsException("index out of range!");
        }
    }

    @Override
    public void print() {
        Node<T> temp = this.first;
        System.out.print("[");
        while (temp != null) {
            System.out.print(temp.getElement() + ",");
            temp = temp.next;
        }
        System.out.println("]");
    }

    static class Node<T> {
        T element;
        Node<T> next;
        Node<T> prev;

        public Node(T element) {
            this.element = element;
        }

        public Node(T element, Node<T> next, Node<T> prev) {
            this.element = element;
            this.next = next;
            this.prev = prev;
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

        public Node<T> getPrev() {
            return prev;
        }

        public void setPrev(Node<T> prev) {
            this.prev = prev;
        }
    }
}

class TestA {
    @Test
    public void task() {
        DoubleLinkedList<Integer> doubleLinkedList = new DoubleLinkedList<>();
        for (int i = 5; i < 11; i++) {
            doubleLinkedList.add(i);
        }

        doubleLinkedList.remove(Integer.valueOf(9));
        doubleLinkedList.print();

        System.out.println(doubleLinkedList.contains(17));
    }
}
