package google.part1.linerlist.dynamicarray;

// Author : CSR丶SUSE
// Time ： 2021/8/29  0:34
// TOOLS : INTELLIJ IDEA
// FILENAME : DynamicArray.java
// STATEMENT: 简易ArrayList实现


import org.junit.jupiter.api.Test;

import java.util.Arrays;

@SuppressWarnings("unchecked")
public class DynamicArray<T> implements DynamicListInterface<T> {
    private static final int initialCap = 8;
    private T[] data;
    private int size = 0;


    public DynamicArray() {
        this.data = (T[]) new Object[initialCap];
    }

    public DynamicArray(int n) {
        if (n > 0) {
            this.data = (T[]) new Object[n];
        } else {
            this.data = (T[]) new Object[initialCap];
        }
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
        for (T item : this.data) {
            if (item == element) {
                return true;
            }
        }
        return false;
    }

    private void ensureCapacity() {
        if (this.size == this.data.length) {
            int newCap = this.size << 1;
            this.data = Arrays.copyOf(this.data, newCap);
        }
        if (this.size < this.data.length / 2 && this.data.length > 8) {
            int newCap = this.data.length >> 1;
            this.data = Arrays.copyOf(this.data, newCap);
        }
    }

    @Override
    public void add(T element) {
        this.ensureCapacity();
        this.data[this.size()] = element;
        this.size++;
    }

    @Override
    public void add(int index, T element) {
        if (index < 0 || index > size()) {
            throw new IndexOutOfBoundsException("position error!");
        }
        this.ensureCapacity();
        for (int i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = element;
        this.size++;
    }

    @Override
    public T get(int index) {
        if (index >= 0 && index < this.size()) {
            return this.data[index];
        }
        return null;
    }

    @Override
    public void set(int index, T element) {
        if (index >= 0 && index < this.size()) {
            this.data[index] = element;
        } else {
            throw new RuntimeException("index illegal!");
        }
    }

    @Override
    public void remove(int index) {
        if (index >= 0 && index < this.size()) {
            for (int i = index + 1; i < this.size(); i++) {
                this.data[i - 1] = this.data[i];
            }

            this.size--;
            this.data[size] = null;
            this.ensureCapacity();
        } else {
            throw new RuntimeException("index illegal!");
        }

    }

    @Override
    public void remove(T element) {
        int index = -1;
        for (int i = 0; i < this.size(); i++) {
            if (element.equals(this.data[i])) {
                index = i;
            }
        }
        if (index != -1) {
            //找到该元素了
            this.remove(index);
            this.size--;
            this.ensureCapacity();
        } else {
            //没有该元素
            throw new RuntimeException("element not found!");
        }
    }

    @Override
    public int indexOf(T element) {
        if (element == null) {
            for (int i = 0; i < this.size(); i++) {
                if (this.data[i] == null) {
                    return i;
                }
            }
        } else {
            for (int i = 0; i < this.size(); i++) {
                if (element.equals(this.data[i])) {
                    return i;
                }
            }
        }
        return -1;
    }

    @Override
    public void clear() {
        for (int i = 0; i < this.size(); i++) {
            this.data[i] = null;
        }
        this.size = 0;
    }

    @Override
    public String toString() {
        return "DynamicArray{" +
                "data=" + Arrays.toString(data) +
                '}';
    }

    @Override
    public void print() {
        System.out.print("[");
        for (int i = 0; i < this.size; i++) {
            System.out.print(this.get(i) + ", ");
        }
        System.out.println("]");
    }
}

class TestD {
    @Test
    public void test() {
        DynamicArray<Integer> integerDynamicArray = new DynamicArray<>();
        for (int i = 0; i < 10; i++) {
            integerDynamicArray.add((i + 2) * 3);
        }
        integerDynamicArray.add(2, 99);
        System.out.println("size:" + integerDynamicArray.size());

        System.out.println(integerDynamicArray.isEmpty());

        integerDynamicArray.print();
        System.out.println(integerDynamicArray);
        integerDynamicArray.remove(1);
        integerDynamicArray.remove(2);


        System.out.println("size:" + integerDynamicArray.size());

        integerDynamicArray.clear();
        System.out.println("size:" + integerDynamicArray.size());
        System.out.println(integerDynamicArray.isEmpty());
    }

}
