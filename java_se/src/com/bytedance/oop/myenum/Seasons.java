package com.bytedance.oop.myenum;

public enum Seasons {
    SPRING("春"),
    AUTUMN("夏"),
    SUMMER("秋"),
    WINTER("冬");
    private final String description;

    private Seasons(String description) {
        this.description = description;
    }

    public String toString() {
        return this.description;
    }
}
