function createMenu() {
  const menu = document.createElement('div');
  menu.appendChild(
    createMenuItem(
      "Greek Salad",
      "Sliced cucumbers, tomatoes, green bell pepper, red onion, olives and feta cheese.",
      30)
  );
  menu.appendChild(
    createMenuItem(
      "Yellow Split Pea Soup",
      "Yellow split peas, Yukon gold potato, Corn kernels, Cashew cream, Smoked paprika, Apple cider vinegar, Onion, garlic, and celery.",
      50)
  );
  return menu;
}

function createMenuItem(name, ingredients, price) {
  const menuItem = document.createElement('div');
  const menuTitle = document.createElement('h3');
  menuTitle.textContent = name;
  const menuBody = document.createElement('p');
  menuBody.textContent = ingredients;
  const menuPrice = document.createElement('p');
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