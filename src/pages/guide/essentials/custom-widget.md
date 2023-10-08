# Custom widget

Proyektni qilish davomida fayldagi ma'lumotlar ko'payib borgani sari ularni tushunish ham qiyinlashib boradi. Shunda
uni qismlarga ajratish kerak bo'ladi.

Hozirgi kodimiz bo'yicha ilovaning matn qismini alohida faylga olib o'tishni o'rganamiz.

`lib/` papkasining ichida `styled_text.dart` faylini yaratamiz. O'z vidjetimiz yozishimiz uchun umumiy namuna
quyidagicha bo'ladi.

::: code-group

```dart [lib/styled_text.dart]
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  StyledText({super.key});

  @override
  Widget build(context) {
    return ...
  }
}
```

:::

Bu vidjetimizni `StyledText` deb nomlaymiz va return qismiga `lib/main.dart` ichidagi matn qismining kodini olib
kelamiz. Shunda `lib/styled_text.dart` quyidagicha ko'rinishga keladi:

::: code-group

```dart [lib/styled_text.dart]
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  StyledText({super.key});

  @override
  Widget build(context) {
    return Text(
      'Salom Flutter',
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

Ana endi `lib/main.dart` faylidagi matn qismiga `StyledText` vidjetini chaqirib qo'yamiz. Shunda fayllarimiz quyidagicha ko'rinishga keladi.

::: code-group

```dart{3,21} [lib/main.dart]
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
        body: Container(
          width: double.infinity,
          height: 200,
          color: Colors.amber,
          child: Center(
            child: StyledText(),
          ),
        ),
      ),
    );
  }
}

```

```dart{8-16} [lib/styled_text.dart]
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  StyledText({super.key});

  @override
  Widget build(context) {
    return Text(
      'Salom Flutter',
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
