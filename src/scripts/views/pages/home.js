/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import RestaurantDataSource from '../../data/restaurantdata-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import small from '../../../public/images/heros/hero-small.jpg';
import large from '../../../public/images/heros/hero-large.jpg';
import ori from '../../../public/images/heros/hero.jpg';

const Home = {
  async render() {
    return `
    <div class="image-banner">
    <div class="banner-content">
    <picture>
      <source media="(min-width:768px)" srcset="${large}" type="image/webp">
      <source media="(min-width:768px)" srcset="${large}" type="image/jpg">
      
      <source media="(max-width:768px)" srcset="${small}" type="image/webp">
      <source media="(max-width:768px)" srcset="${small}" type="image/jpg">
      <img class="lazyload" srcset="${ori}" alt="image banner Restaurant">
    </picture>
    <div tabindex="0" class="banner__text">
    <h2 class="banner__title">
      Selamat datang di Andra Food
    </h2>
    <p class="banner__subtitle">Restoran kami menawarkan lebih dari sekedar makanan enak</p>
    </div>
    </div>
    </div>
        <h2 class="restaurant-title"><span>Explore Restaurants</span></h2>
        <div id="restaurants" class="restaurant-container">
        </div>  
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    try {
      const restaurants = await RestaurantDataSource.listRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        // Memanggil fungsi untuk membatasi jumlah kata dalam deskripsi
        const limitedDescription = limitDescription(restaurant.description, 12);
        restaurant.description = limitedDescription;

        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error rendering restaurant list:', error);
    }
  },
};

// Fungsi untuk membatasi jumlah kata dalam deskripsi
function limitDescription(description, wordLimit) {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return `${words.slice(0, wordLimit).join(' ')}...`;
  }
  return description;
}

export default Home;
