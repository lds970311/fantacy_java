class Person {
  String name;

  int age;

  //默认构造函数
  /* Person(String name, int age) {
    this.name = name;
    this.age = age;
  }*/

  //默认构造函数的简写
  Person(this.name, this.age);

  void getInfo() {
    // print("$name----$age");
    print("${this.name}----${this.age}");
  }

  void setInfo(int age) {
    this.age = age;
  }
}

void main() {
  Person p1 = new Person("张三", 29);
  p1.getInfo();
}
