class JumbotronBg extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style> 
        .jumbotron {
          display: grid;
          align-items: center;
          height: 400px;
          width: 100%;
          color: white;
          text-align: center;
          background: transparent;
          background-position: center;
          padding: 24px;
          position: relative;
        }
        
        .containers {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-size: large;
        }
        
        .containers h2 {
          font-size: 50px;
          color: #eeeeee;
          margin-bottom: 20px;
        }
        
        .containers p {
          font-size: 30px;
          line-height: 1.5;
          color: #eeeeee;
        }

        picture,
        img {
          width: 100%;
          height: 100%;
        }

        picture {
          position: absolute;
          z-index: -1;
        }

        img {
        object-fit: cover;
      }
      @media (max-width: 768px) {
        .jumbotron {
          height: 250px;
        }
      
        .containers h2 {
          font-size: 40px;
        }
      
        .containers p {
          font-size: 24px;
        }
      }
      
      @media (max-width: 576px) {
        .jumbotron {
          height: 200px;
        }
      
        .containers h2 {
          font-size: 30px;
        }
      
        .containers p {
          font-size: 18px;
        }
      }
         </style>
          <div class="jumbotron">
        <div class="containers">
          <h2>Jaya Apps</h2>
          <p>Sebuah Web Untuk Melihat Restoran Terbaik di INDONESIA</p>
        </div>
        <picture>
        <source media="(max-width: 600px)" srcset="../../../images/heros/hero-image_3-small.jpg">
        <img src="../../../images/heros/hero-image_3-large.jpg" alt="Jumbotron"/>
      </picture>
      </div>`;
  }
}

customElements.define('jumbotron-bg', JumbotronBg);
