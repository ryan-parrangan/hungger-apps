import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurantsdb-source';
import '../component/detail-component';
import { spinnerTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    const renderHtml = `
    ${(document.querySelector('main').innerHTML = spinnerTemplate.show())}
      <section id="content" id="id">
        <div class="detail-container">
          <detail-component></detail-component>
        </div>
      </section>`;

    return renderHtml;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantsSource.DetailRestaurants(url.id);
    const container = document.querySelector('detail-component');
    container.value = restaurantById.restaurant;
    spinnerTemplate.remove();
  },
};

export default Detail;
