import API_ENDPOINT from '../globals/api-endpoint';

class RestoDataSource {
  static async getListResto() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTO);
      const responseJson = await response.json();

      return responseJson;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch restaurant data');
    }
  }

  static async getDetailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
      const responseJson = await response.json();

      return responseJson.restaurant;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch restaurant detail');
    }
  }

  static async addReview(review) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      };

      const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
      const responseJson = await response.json();

      return responseJson;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to add review');
    }
  }
}

export default RestoDataSource;
