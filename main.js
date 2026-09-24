// Плавное появление блоков при прокрутке.
const blocks = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  blocks.forEach((el) => io.observe(el));

  // Линия под меню, когда страница прокручена.
  const nav = document.querySelector('.nav');
  new IntersectionObserver(([e]) => nav.classList.toggle('is-stuck', !e.isIntersecting))
    .observe(document.querySelector('.sentinel'));
} else {
  blocks.forEach((el) => el.classList.add('is-in'));
}

// Клик по карточке открывает картинку целиком. Без JS ссылка просто откроет файл.
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('img');
document.addEventListener('click', (e) => {
  const card = e.target.closest('a.card');
  if (!card || !lb.showModal) return;
  e.preventDefault();
  lbImg.src = card.href;
  lbImg.alt = card.querySelector('img').alt;
  lb.showModal();
});
lb.addEventListener('click', () => lb.close());

// Карусели: стрелки листают на ширину ленты, на краях гаснут.
document.querySelectorAll('.carousel').forEach((c) => {
  const track = c.querySelector('.carousel__track');
  const nav = c.querySelector('.carousel__nav');
  const [prev, next] = c.querySelectorAll('.carousel__btn');
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    nav.hidden = max <= 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  };
  nav.addEventListener('click', (e) => {
    const b = e.target.closest('.carousel__btn');
    if (b) track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.9, behavior: 'smooth' });
  });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
