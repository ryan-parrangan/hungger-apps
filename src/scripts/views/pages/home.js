import '../component/hero-component';
import '../component/resto-list';
import RestaurantsSource from '../../data/restaurantsdb-source';
import { spinnerTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    const renderHtml = `
    ${(document.querySelector('main').innerHTML = spinnerTemplate.show())}
    <hero-component></hero-component>
    <section class="content" id="content">
      <h2 class="content__heading">Explore Restaurant.</h2>
      <div id="restaurants" class="restaurants">
        <resto-list></resto-list>
      </div>
    </section>
    `;
    return renderHtml;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('resto-list');
    const { restaurants } = await RestaurantsSource.RestaurantsList();
    restaurantContainer.value = restaurants;
    spinnerTemplate.remove();
  },
};

export default Home;
