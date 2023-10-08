# Add attribute

O'tgan darsda o'zimizning `StyledText` vidgetimizni yasagan edik. Bu vidget ekranga `Salom Flutter` matnini chiqarish
vazifasini bajaradi. Ammo bu vidgetni turli joylarda chaqirib ishlatilganda doim bir xil matn chiqishi noto'g'ri
bo'ladi. Shuning uchun vidgetga atribut qo'shish orqali har safar chaqirilganda qanday matn chiqishini boshqarishimiz
mumkin.

Buning uchun `lib/styled_text.dart` faylida quyidagicha o'zgarish kiritamiz:

::: code-group

```dart{4,6,11} [lib/styled_text.dart]
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  StyledText(this.title, {super.key});

  final String title;

  @override
  Widget build(context) {
    return Text(
      title,
      style: TextStyle(
        color: Colors.red,
        fontSize: 24,
        fontWeight: FontWeight.bold,
        fontStyle: FontStyle.italic,
      ),
    );
  }
}
```

:::

Ana endi `lib/main.dart` faylimizda ekranga qanday matn chiqishini belgilaymiz.

::: code-group

```dart{4} [lib/main.dart]
...

child: Center(
    child: StyledText('Yana bir marta salom'),
),

...
```

:::

Dasturni ishga tushirsak, matn o'zgarganini ko'rishimiz mumkin. Ana endi `StyledText` vidgetimizni proyektimizning biror
bir qismida chaqirganimizda qanday matn ko'rinishini belgilashimiz mumkin. 
