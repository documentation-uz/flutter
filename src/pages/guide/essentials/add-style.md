# Add style

Bu darsda matnga turli xil stillar berishni o'rganamiz. Buning uchun biz flutterdagi `TextStyle` klassidan foydalanamiz.

TextStyle klassining ham turli atributlari mavjud:
* `color` - matnning rangi
* `fontSize` - matnning o'lchami
* `fontWeight` - matnning qalinligi
* `fontStyle` - matnning stili

::: code-group

```dart{6-11} [lib/main.dart]
...

child: Center(
    child: Text(
      'Salom Flutter',
      style: TextStyle(
        color: Colors.red,
        fontSize: 24,
        fontWeight: FontWeight.bold,
        fontStyle: FontStyle.italic,
      ),
    ),
  ),

...
```

:::

Dasturni ishga tushirsangiz, matnning stili o'zgarganini ko'rishingiz mumkin.
