package com.google.part1.linerlist.dynamicarray;

public interface DynamicListInterface<T> {
    int size();

    boolean isEmpty();

    boolean contains(T element);

    void add(T element);

    void add(int index, T element);

    T get(int index);

    void set(int index, T element);

    void remove(int index) throws Exception;

    void remove(T element);

    void clear();

    int indexOf(T element);

    void print();
}

