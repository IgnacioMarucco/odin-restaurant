import { loadHome } from "../pages/home";
import { loadMenu } from "../pages/menu";
import { loadContact } from "../pages/contact";

function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const btnHome = document.createElement('button');
  btnHome.classList.add('btn');
  btnHome.textContent = 'Home';
  const btnMenu = document.createElement('button');
  btnMenu.classList.add('btn');
  btnMenu.textContent = 'Menu';
  const btnContact = document.createElement('button');
  btnContact.classList.add('btn');
  btnContact.textContent = 'Contact';
  // Event Listeners
  btnHome.addEventListener('click', loadHome);
  btnMenu.addEventListener('click', loadMenu);
  btnContact.addEventListener('click', loadContact);

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(btnHome);
  ul.appendChild(btnMenu);
  ul.appendChild(btnContact);

  return header;
}

export { header };