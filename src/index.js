// CSS
import './style.css';

import { loadHome } from "./pages/home";
import { header } from "./components/header";
import { footer } from "./components/footer";

function initialize() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  document.body.appendChild(content);
  document.body.insertBefore(header(), content);
  document.body.appendChild(footer())
  loadHome();
}

initialize();
