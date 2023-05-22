import RestoDataSource from '../../data/restodata-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="resto-list"></div>
        `;
  },

  async afterRender() {
    const list = await RestoDataSource.getListResto();
    const restoContainer = document.querySelector('.resto-list');
    list.restaurants.forEach((menu) => {
      restoContainer.innerHTML += createRestoItemTemplate(menu);
    });
  },
};

export default Home;
