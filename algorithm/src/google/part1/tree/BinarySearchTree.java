// AUTHOR: CSR丶SUSE
// TIME : 2021/9/1  18:46
// FILENAME: BinarySearchTree.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.part1.tree;


import java.util.Comparator;

public class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private int size;
    private TreeNode<T> root;
    private Comparator<T> comparator;

    public BinarySearchTree() {
        this.size = 0;
    }

    @Override
    public int size() {
        return 0;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }

    @Override
    public void clear() {

    }

    @Override
    public void add(T element) {

    }

    @Override
    public void remove(T element) {

    }

    @Override
    public boolean contains(T element) {
        return false;
    }

    private static class TreeNode<T> {
        T element;
        TreeNode<T> left;
        TreeNode<T> right;
        TreeNode<T> parent; //父节点

        public TreeNode(T element, TreeNode<T> parent) {
            this.element = element;
            this.parent = parent;
        }

        public T getElement() {
            return element;
        }

        public void setElement(T element) {
            this.element = element;
        }

        public TreeNode<T> getLeft() {
            return left;
        }

        public void setLeft(TreeNode<T> left) {
            this.left = left;
        }

        public TreeNode<T> getRight() {
            return right;
        }

        public void setRight(TreeNode<T> right) {
            this.right = right;
        }

        public TreeNode<T> getParent() {
            return parent;
        }

        public void setParent(TreeNode<T> parent) {
            this.parent = parent;
        }
    }
}
