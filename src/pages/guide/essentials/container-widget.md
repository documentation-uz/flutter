# Container widget

Oldingi darsda tuzgan dasturimizda `Center` vidjeti butun ekran bo'yicha ichidagi elementni markazga joylashtirmoqda.
Ammo bizga odatda ekranning ma'lum bir qismi bilan ishlash kerak bo'ladi. Buning uchun biz `Container` vidjetidan
foydalanamiz.

`Container` vidjeti flutter proyektimizda bloklarni qurish uchun foydalaniladi.

![flutter-container](https://documentation-uz.fra1.cdn.digitaloceanspaces.com/flutter/flutter-container.png)

Oldingi kodimizdagi `Center` vidjetimizni `Container` vidjetining ichiga olib o'tamiz.

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

`Container` vidjetining bir nechta atributlari mavjud:

* `width` - blokning eni
* `height` - blokning balandligi
* `color` - orqa fon rangi

va boshqalar.

Shu atributlar orqali `Container` vidjetimizga o'zgartirish kiritamiz.

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

<style scoped>
img {
    width: 50%;
    margin-left: 25%;
}
</style>
