class Good {
  double _price;
  String _name;
  String _category;

  Good(this._price, this._name, this._category);

  String get category => _category;

  set category(String value) {
    _category = value;
  }

  String get name => _name;

  set name(String value) {
    _name = value;
  }

  double get price => _price;

  set price(double value) {
    _price = value;
  }

  bool operator <(Good g) {
    if (this.price < g.price) {
      return true;
    }
    return false;
  }

  bool operator >(Good g) => this.price > g.price;


  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Good &&
          runtimeType == other.runtimeType &&
          _price == other._price &&
          _name == other._name &&
          _category == other._category;

  @override
  int get hashCode => _price.hashCode ^ _name.hashCode ^ _category.hashCode;

  @override
  String toString() {
    return 'Good{_price: $_price, _name: $_name, _category: $_category}';
  }
}


void main() {
  Good g1 = new Good(21.5, "book", "book");
  Good g2 = new Good(32.5, "pen", "pen");
  print(g1 < g2);
}

