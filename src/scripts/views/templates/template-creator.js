import CONFIG from '../../globals/config.js';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" 
           data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
           data-size="auto">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
  </div>
`;

const createDetailRestoTemplate = (resto) => `
<div class="resto_info2" aria-label="${resto.name} detail">
    <h2 class="resto_name">${resto.name}</h2>
    <div class="img-detail">
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="gambar ${resto.name}" crossorigin="anonymous">
    </div>
    <div class="additional-info">
        <p>
            <span id="map-icon">📍</span>
            ${resto.address}, ${resto.city}
            <br>
            <span id="rate-icon" class="resto-item__header__rating__score">⭐️</span>
            ${resto.rating}
        </p>
    </div>
    <h3 id="description-title">Deskripsi</h3>
    <p class="description-detail">${resto.description} minutes</p>
    <div class="menu-resto">
        <h3>Menu</h3>
        <div class="menu-content">
            <ul class="foods">
                <h4>Makanan</h4>
                ${resto.menus.foods.map((food) => `<li> ${food.name}</li>`).join('')}
            </ul>

            <ul class="drink">
                <h4>Minuman</h4>
                ${resto.menus.drinks.map((food) => `<li> ${food.name}</li>`).join('')}
            </ul>
        </div>
    </div>
</div>
`;

const createReviewTemplate = (review) => `
<div class="review">
    <p>
        <span class="name"> 🧔🏻${review.name} </span> &bull;
        <span class="date">${review.date}</span>
    </p>
    <p> 💬 ${review.review}</p>
</div>
`;

const createReviewFormTemplate = () => `<form class="form-review" id="form-review">
    <h3>Add Your Review</h3>
    <div class="form-field">
        <label for="name">Name</label>
        <input id="inputName" type="text" aria-label="name" class="form-control" placeholder="Your Name...">
    </div>
    <div class="form-field">
        <label for="review">Review</label>
        <textarea id="inputReview" class="form-control" aria-label="review" placeholder="Your Review..."></textarea>
        <input type="hidden" id="date" name="tanggal" value="">
    </div>
    <button id="submitReview" type="submit" class="submitReview">Submit</button>
    </form>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestoItemTemplate, createDetailRestoTemplate, createReviewTemplate, createReviewFormTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate };
