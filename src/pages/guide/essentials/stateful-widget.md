# StatefulWidget

Bu darsda biz tugma bosilganda matn yozuvi o'zgaradigan dastur tuzamiz. Ammo bu amalni StatelessWidget ichida amalga
oshira olmaymiz. Sababi oldingi darslarda aytganimdek, `StatelessWidget` o'zgaruvchan holatga ega bo'lmagan vidjetni
ifodalovchi sinfdir. Bizning holatda matn esa tugmani bosganda matn yozuvi o'zgarishi kerak.

Buning uchun biz `StatefulWidget` asosida o'z vidjetimizni quramiz.

Eng avvalo `lib/` papkasining ichida yangi `change_text.dart` nomli fayl yaratamiz va faylga kod yozishni boshlaymiz.

Har doimgidek birinchi bo'lib, asosiy faylni chaqirib olamiz.

::: code-group

```dart [lib/change_text.dart]
import 'package:flutter/material.dart';
```

:::

Ana endi yangi vidjetimizni yaratamiz va uni `ChangeText` deb nomlab, key atributini ham belgilab qo'yamiz:

::: code-group

```dart{3-5} [lib/change_text.dart]
import 'package:flutter/material.dart';

class ChangeText extends StatefulWidget {
    ChangeText({super.key});
}
```

:::

`StatefulWidget` orqali yaratilgan vidjetda biz `createState()` metodini `@override` qilishimiz kerak bo'ladi va bu
metod
`State<ChangeText>` turidagi ma'lumotni qaytaradi.

::: code-group

```dart{6-9} [lib/change_text.dart]
import 'package:flutter/material.dart';

class ChangeText extends StatefulWidget {
  ChangeText({super.key});

  @override
  State<ChangeText> createState() {
    return ...
  }
}
```

:::

`createState()` metodi `ChangeText` vidjeti uchun yaratilgan `State` klassni qaytaradi. `ChangeText` vidjeti
uchun `State` klass quyidagicha yaratiladi:

::: code-group

```dart{3-5} [lib/change_text.dart]
...

class _ChangeTextState extends State<ChangeText> {

}
```

:::

`_ChangeTextState` klassi ichida esa `build()` metodini `@override` qilish talab etiladi.

::: code-group

```dart{4-7} [lib/change_text.dart]
...

class _ChangeTextState extends State<ChangeText> {
    @override
    Widget build(context) {
        return ...
    }
}
```

:::

`build()` metodida ilovamizdagi matn yozuvi o'zgaradigan qismi `return` orqali qaytariladi.

`lib/main.dart` faylidagi `Column` vidjeti qismini `build()` metodida qaytaramiz.

::: code-group

```dart{6-15} [lib/change_text.dart]
...

class _ChangeTextState extends State<ChangeText> {
    @override
    Widget build(context) {
        return Column(
            mainAxisSize: MainAxisSize.min,
            children: [
                StyledText('Yana bir marta salom'),
                TextButton(
                    onPressed: () {},
                    child: Text('Text button'),
                ),
            ],
        ),
    }
}
```

:::

Albatta StyledText vidjetini `lib/change_text.dart` faylida chaqirib qo'yish esdan chiqmasligi kerak.

::: code-group

```dart{2} [lib/change_text.dart]
import 'package:flutter/material.dart';
import 'package:debt_book/styled_text.dart';

...
```

:::

Undan keyin `lib/main.dart` faylida `Column` vidgeti o'rniga `ChangeText` vidjetini yozamiz.

::: code-group

```dart{2,16} [lib/main.dart]
import 'package:flutter/material.dart';
import 'package:debt_book/change_text.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  @override
  Widget build(context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: ChangeText(),
        ),
      ),
    );
  }
}
```

:::

Ana endi tugmani bosganimizda matn yozuvi o'zgaradigan kodni yozamiz. Buning uchun matnni o'zgaruvchiga olib o'tamiz va
o'zgaruvchining qiymatini o'zgartirish uchun yangi funksiya ochamiz.

::: code-group

```dart{4,6,13,15} [lib/change_text.dart]
...

class _ChangeTextState extends State<ChangeText> {
  var text = 'Yana bir marta salom';

  void change() {}

  @override
  Widget build(context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        StyledText(text),
        TextButton(
          onPressed: change,
          child: Text('Text button'),
        ),
      ],
    );
  }
}
```

:::

Undan keyin `change()` funksiyasiga `text` o'zgaruvchisining qiymatini o'zgartiradigan amal yozamiz. Bu
kodni `setState()` funksiyasining ichiga yozishimiz kerak.

::: code-group

```dart{7-9} [lib/change_text.dart]
...

class _ChangeTextState extends State<ChangeText> {
    var text = 'Yana bir marta salom';

    void change() {
        setState(() {
            text = "Matn o'zgardi";
        });
    }
  
...
```

:::

Ilovani ishga tushirib, tugmani bosadigan bo'lsak, matn yozuvi o'zgarishini ko'rishimiz mumkin.
