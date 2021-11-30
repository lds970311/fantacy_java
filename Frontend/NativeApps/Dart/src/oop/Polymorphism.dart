abstract class USB {
  String deviceName;

  void transferData();
}

//手机类, 实现传输数据功能
class Phone implements USB {
  @override
  String deviceName;

  Phone(this.deviceName);

  @override
  void transferData() {
    print('${this.deviceName} is transfer');
  }
}

//相机类,实现传输数据功能
class Camera implements USB {
  @override
  String deviceName;

  Camera.name(this.deviceName);

  @override
  void transferData() {
    print('${this.deviceName} is transfer');
  }
}

class Computer {
  //电脑, 能给具备传输数据的设备进行数据传输
  void transfer(USB device) {
    device.transferData();
  }
}

void main() {
  Phone phone = new Phone("iphone");
  Camera camera = new Camera.name("sony");
  Computer computer = new Computer();

  computer.transfer(phone); //iphone is transfer
  computer.transfer(camera); //sony is transfer
}
