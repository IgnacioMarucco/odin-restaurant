function createContact() {
  const contact = document.createElement('div');
  const contactTitle = document.createElement('h2');
  const contactText = document.createElement('p');

  contactTitle.textContent = 'Make your reservation now!';
  contactText.textContent = '+54 0351 9999-9999 or lamesadelupita@gmail.com';

  contact.appendChild(contactTitle);
  contact.appendChild(contactText);
  return contact;
}

function loadContact() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createContact());
}

export { loadContact };