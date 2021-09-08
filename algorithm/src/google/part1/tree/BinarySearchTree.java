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
        this.elementNullCheck(element);
        if (root == null) {
            //添加第一个节点
            this.root = new TreeNode<>(element, null);
            size++;
        } else {
            //找到父节点
            TreeNode<T> parent = root;
            TreeNode<T> node = root;
        }
    }

    @Override
    public void remove(T element) {

    }

    @Override
    public boolean contains(T element) {
        return false;
    }

    /**
     * @return 返回值等于0，代表e1和e2相等；返回值大于0，代表e1大于e2；返回值小于于0，代表e1小于e2
     */
    private int compare(T e1, T e2) {
        if (comparator != null) {
            return comparator.compare(e1, e2);
        }
        return ((Comparable<T>) e1).compareTo(e2);
    }

    private void elementNullCheck(T element) {
        if (element == null) {
            throw new NullPointerException("element can not be null!");
        }
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
