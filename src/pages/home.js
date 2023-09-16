// CSS
import './home.css';
import HeroImage from '../assets/images/hero.jpg';

function createHome() {
  const hero = document.createElement('div');
  hero.classList.add('hero');
  const heroText = document.createElement('div');

  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Welcome to LA MESA DE LUPITA';
  heroTitle.classList.add('headers');
  const heroDescription = document.createElement('p');
  heroDescription.textContent = 'Open for over 15 years, our restaurant near has built a strong reputation on big taste and bold flavors, earning it raves from locals and travelers alike.';
  const heroImg = new Image();
  heroImg.src = HeroImage;

  hero.appendChild(heroText);
  heroText.appendChild(heroTitle);
  heroText.appendChild(heroDescription);
  hero.appendChild(heroImg);

  return hero;
}

function loadHome() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createHome());
}

export { loadHome };