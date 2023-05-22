import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h2>Favorite Restaurant</h2>
        <div class="resto-list"></div>
      `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.resto-list');
    resto.forEach((data) => {
      restoContainer.innerHTML += createRestoItemTemplate(data);
    });
  },
};

export default Favorite;
