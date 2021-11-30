main() {
  List myList = ['香蕉', '苹果', '西瓜'];
  myList.forEach((value) {
    print("$value");
  });

  List myList2 = [1, 3, 4];
  var newList = myList2.map((value) {
    return value * 2;
  });
  print(newList.toList()); //[2, 6, 8]

  List myList3 = [1, 3, 4, 5, 7, 8, 9];
  var newList2 = myList3.where((value) {
    return value > 5;
  });
  print(newList2.toList()); //[7, 8, 9]

  List myList4 = [1, 3, 4, 5, 7, 8, 9];
  var f = myList4.any((value) {
    //只要集合里面有满足条件的就返回true
    return value > 5;
  });
  print(f); //true

  List myList5 = [1, 3, 4, 5, 7, 8, 9];
  var f1 = myList5.every((value) {
    //每一个都满足条件返回true  否则返回false

    return value > 5;
  });
  print(f1); //false

  // set
  var s = new Set();
  s.addAll([1, 222, 333]);
  s.forEach((value) => print(value));

  //map
  Map person = {"name": "张三", "age": 20};
  person.forEach((key, value) {
    print("$key---$value");
  });
}
