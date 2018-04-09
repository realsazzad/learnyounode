Напишіть програму, котра **асинхронно** прочитає файл та виведе кількість рядків, що містяться у файлі, в консоль (stdout), точно так, як би це зробила команда `cat file | wc -l`.

Повний шлях до файлу буде переданий в якості першого аргументу командного рядка.

----------------------------------------------------------------------
# ІНФОРМАЦІЯ

Розв’язок цієї задачі *практично* такий же, як і попередньої, тільки тепер Ви маєте зробити це  **в стилі Node.js**: асинхронно.

Замість `fs.readFileSync()`. Вам слід використовувати `fs.readFile()`, і замість того, щоб просто повернути результат цього методу, Ви повинні зібрати вивід з функції зворотнього виклику (callback), котру Ви передасте другим аргументом. Для отримання детальнішої інформації про функції зворотнього виклику, відвідайте: https://github.com/maxogden/art-of-node#callbacks.

Зверніть увагу, що характерні для Node.js функції зворотнього виклику мають наступну сигнатуру:

```js
function callback (err, data) { /* ... */ }
```
тож Ви можете дізнатись про наявність помилки з допомогою перевірки першого аргументу на істинність. Якщо помилки немає, то Ви маєте отримати об’єкт `Buffer` в якості другого аргументу. Як і з `readFileSync()`, ви можете вказати другим аргументом 'utf8', а також передати функцію зворотнього виклику в третій аргумент, та отримати там результат `String` замість `Buffer`.

Документацію до модуля `fs` ви зможете знайти, набравши в браузері:
  {rootdir:/node_apidoc/fs.html}