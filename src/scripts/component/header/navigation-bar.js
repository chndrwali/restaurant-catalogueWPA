import Logo from '../../../public/images/logo/A-Logo.png';

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // Fungsi untuk merender konten navbar
  render() {
    this.innerHTML = `
    <nav>
        <div class="menu-mobile">
          <div>
            <img src="${Logo}" alt="Andra Food Logo" class="logo-image">
            <a href="/" class="logo-font"> Andra Food </a>
          </div>

          <div class="menu-container">
            <button
              class="menu"
              aria-label="button menu dropdown on mobile"
              type="button"
            >
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>

        <ul class="nav-list hidden">
          <li class="nav-item"><a href="#/home">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/andra-syuryahman-687aa4173/"
              target="_blank"
              rel="noopener noreferrer"
              >About</a
            >
          </li>
        </ul>
      </nav>`;
  }
}

customElements.define('navigation-bar', NavigationBar);
