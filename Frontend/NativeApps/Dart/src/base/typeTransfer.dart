main() {
  var a = 123;
  print(a.toString());

  var c = "678.3";
  double num = double.parse(c);
  print(c);

  print(c.isEmpty);
  print(num.isNaN);
  List<int> list = [1, 2, 3, 4];
  String str = "";
  print(str.isEmpty); //true
  double d1 = 0/ 0;
  print(d1.isNaN); //true
}
