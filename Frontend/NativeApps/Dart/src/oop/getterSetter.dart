/*
class Rect {
  //声明私有属性
  int _height;
  int _width;

  Rect(this._height, this._width);

  //提供getter/setter
  int get width => _width;

  set width(int value) {
    this._width = value;
  }

  int get height => _height;

  set height(int value) {
    this._height = value;
  }

  //提供 获取面积的方法
  int get area => _width * _height;
}

void main() {
  Rect rect = new Rect(10, 20);
  print(rect.width); //20
  print(rect.height); //10
  print(rect.area); //200

  rect.width = 12;
  print(rect.area); //120
}
*/
class Rect {
  int height;
  int width;

  //构造函数体运行之前初始化实例变量
  Rect()
      : height = 2,
        width = 10 {
    print("${this.height}---${this.width}");
  }

  getArea() {
    return this.height * this.width;
  }
}

void main() {
  Rect r = new Rect();
  print(r.getArea());
  print(r is Rect); //true
}
