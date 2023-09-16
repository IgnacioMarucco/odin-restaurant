// CSS
import './header.css';

import { loadHome } from "../pages/home";
import { loadMenu } from "../pages/menu";
import { loadContact } from "../pages/contact";

function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const linkHome = document.createElement('a');
  linkHome.classList.add('btn');
  linkHome.textContent = 'Home';
  const linkMenu = document.createElement('a');
  linkMenu.classList.add('btn');
  linkMenu.textContent = 'Menu';
  const linkCOntact = document.createElement('a');
  linkCOntact.classList.add('btn');
  linkCOntact.textContent = 'Contact';
  // Event Listeners
  linkHome.addEventListener('click', loadHome);
  linkMenu.addEventListener('click', loadMenu);
  linkCOntact.addEventListener('click', loadContact);

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(linkHome);
  ul.appendChild(linkMenu);
  ul.appendChild(linkCOntact);

  return header;
}

export { header };