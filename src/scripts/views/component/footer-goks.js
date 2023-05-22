class FooterGoks extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Submission Front End Expert ke 2 &#169; 2023, <a>Jaya Apps</a></p>
  </footer>`;
  }
}

customElements.define('footer-goks', FooterGoks);
