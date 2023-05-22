const assert = require('assert');

Feature('Unliking Restaurants');

let firstRestaurantTitle;

Before(async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto-item__content h3 a');
  const firstRestaurant = locate('.resto-item__content h3 a').first();
  firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('[aria-label="like this restaurant"]');

  I.click('[aria-label="like this restaurant"');

  I.amOnPage('/#/favorite');
});

Scenario('Showing liking restaurant', async ({ I }) => {
  I.seeElement('.resto-item__content h3 a');
  const LikingRestaurantTitle = await I.grabTextFrom('.resto-item__content h3 a');

  assert.strictEqual(firstRestaurantTitle, LikingRestaurantTitle);
});

Scenario('Unlikeing a restaurant', ({ I }) => {
  I.seeElement('.resto-item__content h3 a');

  I.click(locate('.resto-item__content h3 a').first());

  I.seeElement('[aria-label="unlike this restaurant"]');

  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.resto-item__content h3 a');
});
