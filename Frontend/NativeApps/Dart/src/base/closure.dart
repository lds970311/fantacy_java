fn() {
  var a = 123; /*不会污染全局   常驻内存*/
  return () {
    a++;
    print(a);
  };
}

main() {
  Function b = fn();
  b(); //124

  b(); //125

  b(); //127
}
