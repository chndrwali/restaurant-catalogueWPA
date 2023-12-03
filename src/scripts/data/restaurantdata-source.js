import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      return null;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      return null;
    }
  }

  static async addReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      });
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      console.error('Error adding review:', error);
      return null;
    }
  }
}

export default RestaurantDataSource;
