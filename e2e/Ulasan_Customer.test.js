Feature('Ulasan Customer');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Menambah Ulasan Customer', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.see-detail-link a');
  I.wait(2);
  I.click(locate('.see-detail-link a').first());
  I.amOnPage('/#/detail/');
  I.seeElement('.review-form');
  I.fillField('name', 'Candra');
  I.fillField('review', 'Candra');
  I.click('.reviews-form-submit');
  I.see('Candra');
});
