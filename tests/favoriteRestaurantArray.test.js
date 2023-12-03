/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
