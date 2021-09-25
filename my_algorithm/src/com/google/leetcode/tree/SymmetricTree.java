// AUTHOR: CSR丶SUSE
// TIME : 2021/9/8  9:35
// FILENAME: SymmetricTree.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package com.google.leetcode.tree;


/**
 * 101.给定一个二叉树，检查它是否是镜像对称的。
 * <p>
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 */
public class SymmetricTree {
    private boolean isSameNode(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) {
            return true;
        }
        if (node1 == null || node2 == null) {
            return false;
        }
        return node1.val == node2.val && isSameNode(node1.left, node2.right) && isSameNode(node1.right, node2.left);
    }

    public boolean isSymmetric(TreeNode root) {
        return isSameNode(root, root);
    }
}
