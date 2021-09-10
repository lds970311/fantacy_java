// AUTHOR: CSR丶SUSE
// TIME : 2021/9/9  20:27
// FILENAME: CalculateMinimumHP.java
// TOOLS : INTELLIJ IDEA
// STATEMENT: 


package google.leetcode.dynamicplan;

/**
 * 一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。
 * <p>
 * 骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。
 * <p>
 * 有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。
 * <p>
 * 为了尽快到达公主，骑士决定每次只向右或向下移动一步。
 */
public class CalculateMinimumHP {
    public int calculateMinimumHP(int[][] dungeon) {
        if (dungeon == null || dungeon.length == 0 || dungeon[0].length == 0) {
            return 0;
        }
        int rowLen = dungeon.length;
        int colLen = dungeon[0].length;
        // 最低的耗血量为 + 1；就是骑士的救公主的最低血量。
        return dfs(0, 0, rowLen, colLen, dungeon) + 1;
    }

    public int dfs(int rowIndex, int colIndex, int rowSize, int colSize, int[][] dungeon) {
        //
        if (rowIndex >= rowSize || colIndex >= colSize) {
            return Integer.MAX_VALUE;
        }
        // 退出条件
        if (rowIndex == rowSize - 1 && colIndex == colSize - 1) {
            if (dungeon[rowIndex][colIndex] >= 0) {
                // 如果最后一个大于等于0，就返还0。
                return 0;
            } else {
                //如果最后一个小于零，就返回负的值。
                return -dungeon[rowIndex][colIndex];
            }
        }
//  右边格子的最优解，也就是最低的耗血量
        int rightMin = dfs(rowIndex, colIndex + 1, rowSize, colSize, dungeon);
//  下边格子的最优解
        int downMin = dfs(rowIndex + 1, colIndex, rowSize, colSize, dungeon);
        // f(i,j) = min(f(i+1, j), f(i, j+1)) - dungeon[i][j]
        int needMin = Math.min(rightMin, downMin) - dungeon[rowIndex][colIndex];
        int res = 0;
        if (needMin < 0) {
            res = 0;
        } else {
            res = needMin;
        }
        System.out.println(rowIndex + " " + colIndex + " " + res);
        return res;


    }
}
