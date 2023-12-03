Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async (I) => {
  I.amOnPage('/');

  I.seeElement('.see-detail-link a');
  I.wait(2);
  I.click(locate('.see-detail-link a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
};
Scenario('liking one restaurant', async ({ I }) => {
  I.wait(2);
  await likingRestaurant(I);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.wait(2);
  await likingRestaurant(I);

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
  I.click(locate('.see-detail-link a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Your Favorited Restaurant', '.restaurant-title');
});
