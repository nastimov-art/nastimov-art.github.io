# Портфолио nasti.mov

Сайт: https://nastimov-art.github.io
Статичный: index.html + styles.css + main.js, шрифт в fonts/, картинки в images/. Сборка не нужна.

## Обновить сайт
Поменять файлы и выполнить в этой папке:
    git add -A && git commit -m "Обновление" && git push
Через минуту изменения на сайте.

## Где что менять
- Тексты, контакты: index.html
- Работы: index.html, раздел «РАБОТЫ». Одно направление = <article class="cat">, внутри лента <figure class="slide">.
  Слайд: <figure class="slide"><a class="card" href="images/x.jpg"><img src="images/x.jpg" alt="…"></a><figcaption>Подпись</figcaption></figure>
  slide--wide (горизонтальный, в две ширины), card--fit (макет на белом), card--print (полиграфия на сером).
- Новая картинка: jpg до ~1800px по длинной стороне в images/.
- Цвета, шрифты, скругления, тени: переменные в начале styles.css
