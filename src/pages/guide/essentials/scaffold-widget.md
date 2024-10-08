# Scaffold widget

Flutterda `Scaffold` vidjeti material dizaynga asoslangan foydalanuvchi interfeyslarini yaratish uchun asosiy qurilish
blokidir. Scaffold vidjeti sahifaning umumiy tuzilmasini tuzish uchun yordam beradi.

`Scaffold` vidjeti bir nechta atributlarni o'z ichiga oladi.

* `appBar` - ilovaning top navbari
* `body` - ilovaning tanasi
* `bottomNavigationBar` - ilovaning pastki navigatsiya paneli

va boshqalar.

![Scaffold widget](https://storage.googleapis.com/material-design/publish/material_v_11/assets/0Bx4BSt6jniD7T0hfM01sSmRyTG8/layout_structure_regions_mobile.png)

Avvalgi darsda tuzgan dasturimizdagi `Text` vidjetini `Scaffold` ichiga olib o'tamiz.

::: code-group

```dart{13,15} [lib/main.dart]
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  @override
  Widget build(context) {
    return MaterialApp(
      home: Scaffold(
        body: Text('Salom Flutter'),
      ),
    );
  }
}
```

:::

Dasturni ishga tushirsak, interfeys o'zgarganini ko'rishimiz mumkin.

## Center vidjeti

Elementlarni markazga joylashtirish uchun `Center` vidjetidan foydalanamiz. 

![flutter-center](https://documentation-uz.fra1.cdn.digitaloceanspaces.com/flutter/flutter-center.png)

`Center` vidjeti orqali matnni markazga quyidagicha joylashtiramiz:

::: code-group

```dart{5,7} [lib/main.dart]
...

return MaterialApp(
  home: Scaffold(
    body: Center(
      child: Text('Salom Flutter'),
    ),
  ),
);

...
```

:::

Dasturni qayta ishga tushirsak, `Salom Flutter` yozuvi markazga o'tganini ko'rishimiz mumkin.

<style scoped>
img {
    width: 50%;
    margin-left: 25%;
}
</style>
