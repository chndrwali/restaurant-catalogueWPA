import RestaurantDataSource from '../../data/restaurantdata-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });

    this._renderCustomerReviews(restaurant.customerReviews);

    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nameInput = document.querySelector('#name');
      const reviewInput = document.querySelector('#review');

      const review = {
        id: restaurant.id,
        name: reviewForm.name.value,
        review: reviewForm.review.value,
      };

      try {
        const updateCustomerReviews = await RestaurantDataSource.addReview(review);
        if (updateCustomerReviews) {
          this._renderCustomerReviews(updateCustomerReviews);
          nameInput.value = '';
          reviewInput.value = '';

          const offlineMessage = document.querySelector('#offlineMessage');
          if (offlineMessage) {
            // eslint-disable-next-line no-alert
            alert('Your review will be sent when you are online');
          }
          reviewForm.reset();
        }
      } catch (error) {
        console.log(error);
      }
    });
  },

  _renderCustomerReviews(customerReviews) {
    const reviewContainer = document.querySelector('.restaurant-detail__content__review');
    reviewContainer.innerHTML = '';
    customerReviews.forEach((review) => {
      reviewContainer.innerHTML += `
      <div class="restaurant-detail__content__review__item">
      <p class="restaurant-detail__content__review__item__name">
        ${review.name} - <span class="text-date">${review.date}</span> <br>
        "${review.review}"
      </p>
    </div>
      `;
    });
  },
};

export default Detail;
