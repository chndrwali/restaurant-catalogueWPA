/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
/* CSS */
import '../styles/main.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/banner.css';
import '../styles/responsive.css';
import '../styles/restaurant.css';
/* close CSS */
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

/* Component */
import './component/header/navigation-bar';
import './component/footer/footer-aja';

const START = 10;
const NUMBER_OF_IMAGES = 100;

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('.menu'),
    drawer: document.querySelector('.nav-list'),
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
