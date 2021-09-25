package com.google.part1.tree;

public interface IBinarySearchTree<T> {
    int size();

    boolean isEmpty();

    void clear();

    void add(T element);

    void remove(T element);

    boolean contains(T element);
}
