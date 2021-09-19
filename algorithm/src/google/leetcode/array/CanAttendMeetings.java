package google.leetcode.array;

// Author : CSR丶SUSE
// Time ： 2021-09-18  20:54
// TOOLS : INTELLIJ IDEA
// FILENAME : CanAttendMeetings.java


/**
 * 252. 会议室
 * 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，请你判断一个人是否能够参加这里面的全部会议。
 */
public class CanAttendMeetings {
    public static boolean canAttendMeetings(int[][] intervals) {
        for (int i = 0; i < intervals.length; i++) {
            for (int j = i + 1; j < intervals.length; j++) {
                if (canMeet(intervals[i], intervals[j])) {
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean canMeet(int[] n1, int[] n2) {
        return ((n1[0] >= n2[0] && n1[0] < n2[1]) || (n2[0] >= n1[0] && n2[0] < n1[1]));
    }
}
