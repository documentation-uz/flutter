# First simple application

Flutterda proyekt yaratib, editorda ochganimizda turli papkalar va fayllarni ko'rishimiz mumkin.
Darslar davomida barcha papka va fayllar bilan birma-bir tanishib chiqamiz. Hozirgi darsda biz `lib/` papkasi bilan
tanishamiz.

`lib/` papkasining ichida `main.dart` fayl mavjud. Bu fayl flutter proyektimizda eng asosiy fayl hisoblanadi.

Avvali `lib/main.dart` faylidagi kodni tozalab tashlaymiz.

## Kerakli fayllarni chaqirib olish

Flutterning imkoniyatlaridan foydalanish uchun ilovamizga kerakli bo'lgan fayllarni chaqirib olish talab qilinadi.
Misol uchun `material.dart` faylini faylimizda chaqirib olamiz.

::: code-group

```dart [lib/main.dart]
import 'package:flutter/material.dart';
```

:::

Bu faylda flutter proyektimizda foydalaniladigan eng asosiy funksiyalar va klasslar jamlanmasi mavjud.

## runApp() funksiyasi

Flutter proyektini ishga tushirish uchun biz `runApp()` funksiyasidan foydalanamiz. `runApp()` funksiyasini `main()`
funksiyasi ichiga yozamiz.

::: code-group

```dart{4} [lib/main.dart]
import 'package:flutter/material.dart';

void main() {
  runApp(...);
}
```

:::

`runApp()` funksiyasi bitta argumentni qabul qiladi va bu argument flutter proyetkimizning asosiy vidjetidir.

## Vidjet nima?

Vidjet ilovamizning ma'lum bir bloki, boshqacha aytganda ma'lum bir qismiga aytiladi. Darslarda biz flutter vidjetlari
bilan tanishamiz, hamda o'z vidjetlarimizni ham yozamiz.

## Dastlabki vidjetimiz

`runApp()` funksiyaga argument sifatida vidjet berish uchun dastlabki vidjetimizning kodini yozamiz.

Vidjetlar 2turga bo'linadi va sinflar orqali yoziladi.

* `StatelessWidget` - o'zgaruvchan holatga ega bo'lmagan vidjetni ifodalovchi sinfdir.
* `StatefulWidget` - o'zgaruvchan holatga ega bo'lgan vidjetni ifodalovchi sinfdir.

Dastlabki vidjetimizni `StatelessWidget` asosida yaratamiz. Buning uchun avvaliga class ochamiz va `StatelessWidget`dan
nasl olamiz.

::: code-group

```dart [lib/main.dart]
...

class MyApp extends StatelessWidget {
    ...
}
```

:::

Vidjetimiz `MyApp` deb nomlandi.

Flutterda bitta vidjetdan bir nechta marta foydalanish mumkin. Bir xil vidjetlarni bir-biridan ajratib olishimiz uchun
ularning `key` argumentiga qiymat berishimiz kerak.

::: code-group

```dart{4} [lib/main.dart]
...

class MyApp extends StatelessWidget {
    MyApp({super.key});
    ...
}
```

:::

Ana endi `StatelessWidget`ining `build()` metodini `@override` qilishimiz talab
etiladi.

::: code-group

```dart{6-9} [lib/main.dart]
...

class MyApp extends StatelessWidget {
    MyApp({super.key});

    @override
    Widget build(context) {
        return ...
    }
}
```

:::

`build()` metodining ichiga foydalanuvchiga ko'rinadigan `UI`ning kodini yozamiz.

`build()` metodi `Widget` turidagi ma'lumotni qaytaradi va argument sifatida `context`ni oladi.

## MaterialApp vidjeti

`MaterialApp` vidjeti flutterda eng asosiy vidjetlardan biri hisoblanadi. Bu vidjet bizga ilovamizda umumiy sozlashlarni
amalga oshirishga yordam beradi. Masalan, ilovaning umumiy mavzusini (theme) tanlash, ilova tilini belgilash va boshqa
ko'plab umumiy sozlashlarni bajarish mumkin.

::: code-group

```dart{6} [lib/main.dart]
...

class MyApp extends StatelessWidget {
    @override
    Widget build(context) {
        return MaterialApp(...)
    }
}
```

:::

## Text vidjeti

Ana endi ekranga biror-bir matnni chiqarish uchun flutterdagi `Text` vidjetidan foydalanamiz. Uni kodda quyidagicha
yozamiz:

::: code-group

```dart{7} [lib/main.dart]
...

class MyApp extends StatelessWidget {
    @override
    Widget build(context) {
        return MaterialApp(
          home: Text('Salom Flutter'),
        );
    }
}
```

:::

`MaterialApp` vidjetining `home` atributiga `Text` vidjetini beramiz. `Text` vidjetining ichiga esa ilovamiz oynasida
qanday matn ko'rinishi kerakligini kiritamiz.

Dastlabki vidjetimiz tayyor! Dasturni ishga tishirganimizda `MyApp` vidjeti ishlashi uchun yuqoridagi `runApp()`
funksiyaga vidjetimizni argument sifatida berishimiz kerak.

::: code-group

```dart{4} [lib/main.dart]
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp);
}

class MyApp extends StatelessWidget {
    ...
```

:::

Shunday qilib kodimiz quyidagi ko'rinishda keldi va ilova ishga tushganda ekranga `Salom Flutter` yozuvi chiqadi:

::: code-group

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(context) {
    return MaterialApp(
      home: Text('Salom Flutter'),
    );
  }
}

```

:::
