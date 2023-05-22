import UrlParser from '../../routes/url-parser';
import RestoDataSource from '../../data/restodata-source';
import { createDetailRestoTemplate, createReviewTemplate, createReviewFormTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div class="detail" tabindex="0" role="resto detail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestoDataSource.getDetailResto(url.id);
    const restoDetail = document.querySelector('.detail');
    restoDetail.innerHTML = createDetailRestoTemplate(detail);
    restoDetail.innerHTML += `
      <div class="review" aria-label="resto reviews" role="review">
      </div>
    `;

    const restoReview = document.querySelector('.review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createReviewTemplate(review);
    });
    restoReview.innerHTML += createReviewFormTemplate();

    const reviewForm = document.getElementById('form-review');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reviewerName = document.getElementById('inputName').value;
      const reviewText = document.getElementById('inputReview').value;
      const reviewData = {
        id: url.id,
        name: reviewerName,
        review: reviewText,
      };

      await RestoDataSource.addReview(reviewData);

      await this.afterRender();
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
      likeResto: FavoriteRestoIdb,
    });
  },
};

export default Detail;
