const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-item__content h3 a');
  const firstRestaurant = locate('.resto-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item__content h3 a');
  const likedRestaurantTitle = await I.grabTextFrom('.resto-item__content h3 a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
