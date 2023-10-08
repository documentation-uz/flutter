# Container widget

Oldingi darsda tuzgan dasturimizda `Center` vidgeti butun ekran bo'yicha ichidagi elementni markazga joylashtirmoqda.
Ammo bizga odatda ekranning ma'lum bir qismi bilan ishlash kerak bo'ladi. Buning uchun biz `Container` vidgetidan
foydalanamiz.

`Container` vidgeti flutter proyektimizda bloklarni qurish uchun foydalaniladi.

Oldingi kodimizdagi `Center` vidgetimizni `Container` vidgetining ichiga olib o'tamiz.

::: code-group

```dart {5,9} [lib/main.dart]
...

return MaterialApp(
  home: Scaffold(
    body: Container(
      child: Center(
        child: Text('Salom Flutter'),
      ),
    ),
  ),
);

...
```

:::

`Container` vidgetining bir nechta atributlari mavjud:

* `width` - blokning eni
* `height` - blokning balandligi
* `color` - orqa fon rangi

va boshqalar.

Shu atributlar orqali `Container` vidgetimizga o'zgartirish kiritamiz.

::: code-group

```dart{6-8} [lib/main.dart]
...

return MaterialApp(
  home: Scaffold(
    body: Container(
      width: double.infinity,
      height: 200,
      color: Colors.amber,
      child: Center(
        child: Text('Salom Flutter'),
      ),
    ),
  ),
);

...
```

:::

Dasturni ishga tushirsak, matn blokning markaziga joylashganini ko'rishimiz mumkin.

Berilgan qiymatlarni tahlil qiladigan bo'lsak:

* `width` uchun `double.infinity` qiymati berilgani ekranning to'liq enini o'z ichiga olishini anglatadi.
* `height` uchun `200` berilgani flutterning `dp` o'lchov birligi bo'yicha `200dp` qiymat berilganini anglatadi.
* `color` uchun `Colors.amber` qiymati berilgan. `Colors` flutterga tegishli klass bo'lib, elementlarga flutterdagi
  standart ranglarni berish uchun foydalaniladi.
