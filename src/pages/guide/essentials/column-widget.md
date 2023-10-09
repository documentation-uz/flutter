# Column widget

Elementlarni ustma-ust bitta ustunga joylashtirmoqchi bo'lsak, `Column` vidjetidan foydalanamiz.

![flutter-column](https://documentation-uz.fra1.cdn.digitaloceanspaces.com/flutter/flutter-column.png)

Birinchi bo'lib, avvalgi kodimizdagi Container vidjetini olib tashlab, `StyledText` vidjetimizni `Column` vidjetining
ichiga olib o'tamiz. Natijada kodimiz quyidagi ko'rinishga keladi.

::: code-group

```dart{17,21} [lib/main.dart]
import 'package:flutter/material.dart';

import 'package:debt_book/styled_text.dart';

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
          child: Column(
            children: [
              StyledText('Yana bir marta salom'),
            ],
          ),
        ),
      ),
    );
  }
}
```

:::

Kodni ishga tushirsak, matn markazda emas, balki yuqorida joylashib qolganini ko'ramiz. Nima uchun bunday bo'ldi?

`Center` elementlarni ekranning o'rtasiga joylashtiradi, ammo `Column` vidjeti standart holatda ekranning butun
balandligini egallaydi.

Matnni qaytadan o'rtaga qaytarish uchun Column vidjeti faqat o'ziga kerakli joyni egallashini belgilashimiz kerak.
Buning uchun `Column` vidjetining `mainAxisSize` atributining qiymatini o'zgartirishimiz kerak.

::: code-group

```dart{4} [lib/main.dart]
...

child: Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    StyledText('Yana bir marta salom'),
  ],
),

...
```

:::

::: warning E'tibor bering

Oldingi foydalanilgan vidjetlarning atributlariga (`home`, `body`, `child`) qiymat sifatida faqat bitta vidjetni berish
mumkin edi. `Column` vidjetining `children` atributiga bir nechta vidjetlarning ro'yxatini berish mumkin va bu vidjetlar
ustma-ust joylashadi.

:::

Ana endi matn pastiga knopka (button) qo'yishni o'rganamiz.

Knopkalarning bir nechta turlari bor. Biz hozirgi misolimizda `TextButton` vidjetidan foydalanamiz.

::: code-group

```dart{7-10} [lib/main.dart]
...

child: Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    StyledText('Yana bir marta salom'),
    TextButton(
      onPressed: () {},
      child: Text('Text button'),
    ),
  ],
),

...
```

:::

`TextButton` 2ta asosiy attributlari:

* `onPressed` - tugma bosilganda qanday amal bajarilishi
* `child` - vidjet

Dasturni ishga tushirsak, haqiqatdan `TextButton` vidjeti matn pastida joylashganini ko'rishimiz mumkin.

<style scoped>
img {
    width: 50%;
    margin-left: 25%;
}
</style>
