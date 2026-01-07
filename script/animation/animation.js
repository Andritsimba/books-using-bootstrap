const hero = document.querySelector('.hero-container');
const title = document.querySelector('.hero-title');
const text = document.querySelector('.hero-text');

hero.addEventListener('mouseenter', (e) => {
    const { width, height, left, top } = hero.getBoundingClientRect();

    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    title.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    text.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
});

hero.addEventListener('mouseleave', () => {
    title.style.transform = 'translate(0,0)';
    text.style.transform = 'translate(0,0)';
});