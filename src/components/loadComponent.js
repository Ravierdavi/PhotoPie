import headerHtml from './header.html';
import footerHtml from './footer.html';

async function loadComponent(selector, file) {
  const container = document.querySelector(selector);
  if (container) {
    const response = await fetch(file);
    const content = await response.text();
    container.innerHTML = content;
  }
}

loadComponent("#header", headerHtml);
loadComponent("#footer", footerHtml);
