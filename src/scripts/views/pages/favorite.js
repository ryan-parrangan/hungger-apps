import '../component/resto-list';
import '../component/empty-favorite';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { spinnerTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const renderHtml = `
      ${(document.querySelector('main').innerHTML = spinnerTemplate.show())}
      <section class="content" id="content">
        <h2 class="content-favorite__heading">Your Favorite Restaurant.</h2>
        <div id="restaurants" class="restaurants">
          <resto-list></resto-list>
        </div>
      </section>
      `;
    return renderHtml;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('resto-list');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    if (restaurants.length > 0) {
      restaurantContainer.value = restaurants;
    } else {
      document.querySelector('#restaurants').innerHTML = '<empty-favorite></empty-favorite>';
    }
    spinnerTemplate.remove();
  },
};

export default Favorite;
