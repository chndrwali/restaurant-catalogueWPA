// Definisikan elemen kustom "footer-aja" yang merupakan elemen HTML khusus untuk footer
class FooterAja extends HTMLElement {
  // Metode ini dipanggil ketika elemen "footer-aja" terhubung ke DOM
  connectedCallback() {
    this.render(); // Panggil fungsi render untuk menampilkan footer
  }

  // Fungsi render digunakan untuk mengisi elemen "footer-aja" dengan konten footer
  render() {
    this.innerHTML = `
<footer>
  <div>
    <p>
      &copy; Submission Front End Web Expert, Candra Wali Sanjaya
    </p>
    <div>
      <a
        href="https://github.com/chndrwali/restaurant-catalogueWPA"
        target="_blank"
        rel="noreferrer"
        title="View On Github"
        aria-label="View On Github"
      >
        View On Github
      </a>
    </div>
  </div>
</footer>
    `;
  }
}

// Mendefinisikan elemen kustom "footer-aja" agar dapat digunakan dalam HTML
customElements.define('footer-aja', FooterAja);
