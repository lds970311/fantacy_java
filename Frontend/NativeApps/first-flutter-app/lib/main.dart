import 'package:flutter/material.dart';

void main() {
  runApp(const HomeContent());
}

class FirstComponent extends StatelessWidget {
  const FirstComponent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text(
        "hello Flutter123",
        textDirection: TextDirection.ltr,
        style: TextStyle(
            fontSize: 30.0, color: Colors.yellow, fontWeight: FontWeight.bold),
      ),
    );
  }
}

class HomeContent extends StatelessWidget {
  const HomeContent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("my Flutter"),
        ),
        body: const FirstComponent(),
      ),
      theme: ThemeData(primarySwatch: Colors.blueGrey),
    );
  }
}
