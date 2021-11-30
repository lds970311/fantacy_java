T getValue<T>(T value) {
  return value;
}

void main() {
  var a = getValue<int>(3);
  print(a); //3
}
