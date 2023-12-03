import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];

      if (!page) {
        console.error(`Page not found for URL: ${url}`);
        return;
      }

      const newContent = await page.render();

      if (!newContent) {
        console.error(`Content not provided for URL: ${url}`);
        return;
      }

      this._content.innerHTML = newContent;
      await page.afterRender();

      const skipLinkElem = document.querySelector('.skip-link');

      if (skipLinkElem) {
        skipLinkElem.addEventListener('click', (event) => {
          event.preventDefault();
          document.querySelector('#mainContent').focus();
        });
      } else {
        console.warn('Skip link element not found.');
      }
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  }
}

export default App;
