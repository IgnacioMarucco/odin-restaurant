function createHome() {
  const hero = document.createElement('div');
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Welcome to LA MESA DE LUPITA';
  heroTitle.classList.add('headers');
  const heroText = document.createElement('p');
  heroText.textContent = 'Open for over 15 years, our restaurant near has built a strong reputation on big taste and bold flavors, earning it raves from locals and travelers alike.';

  hero.appendChild(heroTitle);
  hero.appendChild(heroText);

  return hero;
}

function loadHome() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createHome());
}

export { loadHome };