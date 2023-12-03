/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
   <div class="restaurant-detail">
       <div class="restaurant-breadcrumb">
           <a href="#/home" class="breadcrumb-link">
               <i class="fa fa-arrow-left"></i>
           </a>
           <span> > </span>
           <span class="breadcrumb-text">${restaurant.name}</span>
       </div>
       <div class="restaurant-header">
           <img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-detail__header__poster lazyload">
       </div>
       <div class="restaurant-info">
           <h2><span>${restaurant.name}</span></h2>
           <p><span class="rating-icon">Rating: ${restaurant.rating}</span></p>
           <p><span class="address-icon">Alamat: </span>${restaurant.address}, ${restaurant.city}</p>
           <p><span class="categories-icon">Kota: </span>${restaurant.categories.map((category) => category.name).join(', ')}</p>
       </div>
       <div class="restaurant-information">
           <h2><span>Informasi</span></h2>
           <div class="menu-section">
               <h3><span>Menu</span></h3>
               <p><span class="menu-label">Makanan: </span>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
               <p><span class="menu-label">Minuman: </span>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
           </div>
           <div class="description-section">
               <h3><span>Deskripsi</span></h3>
               <p class="restaurant-description">${restaurant.description}</p>
           </div>
           <div class="reviews-section">
               <h3><span>Ulasan Customer</span></h3>
               <div class="customer-reviews restaurant-detail__content__review">
                  
               </div>
           </div>
           <div id="formReview" class="review-form-section">
               <h3 class="review-form-header"><span>Tulis Ulasan</span></h3>
               <form id="reviewForm" class="review-form">
               <div class="reviews-form-field">
               <label class="reviews-form-label" for="name">Nama Kamu</label>
               <input class="reviews-form-input" type="text" id="name" name="name" placeholder="Your name..." required>
           </div>
           <div class="reviews-form-field">
               <label class="reviews-form-label" for="review">Beri Pengalaman Kamu</label>
               <input class="reviews-form-input" type="text" id="review" name="review" placeholder="Your Review" required>
           </div>
           <button class="reviews-form-submit" type="submit">Kirim Ulasan</button>
           <div id="offlineMessage"></div>
               </form>
           </div>
       </div>
   </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
   <div class="restaurant-card">
       <div class="restaurant-info">
           <img class="restaurant-image lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
           <div class="restaurant-city">${restaurant.city}</div>
       </div>
       <div class="restaurant-add">
           <h3 class="restaurant-name">${restaurant.name}</h3>
           <div class="restaurant-rating">
               Rating : ${restaurant.rating}</span>
           </div>
           <p class="restaurant-description">${restaurant.description}</p>
           <div class="see-detail-link">
               <a href="${`/#/detail/${restaurant.id}`}">See Detail</a>
           </div>
       </div>
   </div>
`;

const createReviewTemplate = (review) => `
<div class="reviews-section">
    <h3><span>Ulasan Customer</span></h3>
    <div class="customer-reviews">
        <p>
        <span class="name"> 🧔🏻${review.name} </span> &bull;
        <span class="date">${review.date}</span>
        </p>
        <p> 💬 ${review.review}</p>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fas fa-thumbs-down" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createReviewTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
