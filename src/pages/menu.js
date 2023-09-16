// CSS
import './menu.css';

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      "Greek Salad",
      "Sliced cucumbers, tomatoes, green bell pepper, red onion, olives and feta cheese.",
      "$30")
  );
  menu.appendChild(
    createMenuItem(
      "Yellow Split Pea Soup",
      "Yellow split peas, Yukon gold potato, Corn kernels, Cashew cream, Smoked paprika, Apple cider vinegar, Onion, garlic, and celery.",
      "$50")
  );
  menu.appendChild(
    createMenuItem(
      "Grilled Pork Tenderloin",
      "Pork tenderloin, Pinch crushed red pepper flakes, honey, orange marmalade and soy sauce.",
      "$60")
  );
  menu.appendChild(
    createMenuItem(
      "Grilled Marinated Flank Steak",
      "Flank steak, soy sauce, red wine vinegar, olive oil and honey.",
      "$70")
  );

  return menu;
}

function createMenuItem(name, ingredients, price) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('card');
  const menuTitle = document.createElement('h3');
  menuTitle.classList.add('card--title');
  menuTitle.textContent = name;
  const menuBody = document.createElement('p');
  menuBody.classList.add('card--body');
  menuBody.textContent = ingredients;
  const menuPrice = document.createElement('p');
  menuPrice.classList.add('card--footer');
  menuPrice.textContent = price;

  menuItem.appendChild(menuTitle);
  menuItem.appendChild(menuBody);
  menuItem.appendChild(menuPrice);

  return menuItem;
}

function loadMenu() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createMenu());
}

export { loadMenu };