# Портфолио nasti.mov

Сайт: https://nastimov-art.github.io
Статичный: index.html + styles.css + main.js, шрифт в fonts/, картинки в images/. Сборка не нужна.

## Обновить сайт
Поменять файлы и выполнить в этой папке:
    git add -A && git commit -m "Обновление" && git push
Через минуту изменения на сайте.

## Где что менять
- Тексты, контакты: index.html
- Проекты: index.html, один <article class="project"> = один проект, картинки внутри <div class="gallery">.
  Карточка: <a class="card" href="images/x.jpg"><img src="images/x.jpg" alt="…"></a>
  card--wide (две колонки), card--fit (макет целиком на белом), card--print (полиграфия на сером), m-wide (на телефоне во всю ширину).
  В каждом ряду из 3 колонок нужна хотя бы одна обычная карточка.
- Новая картинка: jpg до ~1800px по длинной стороне в images/.
- Цвета, шрифты, скругления, тени: переменные в начале styles.css
