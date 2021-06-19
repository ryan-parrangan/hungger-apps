import CONFIG from '../../globals/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';

class DetailComponent extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
    this._likeButtonInitiator();
  }

  _templateRating() {
    const rate = [];

    for (let i = 0; i < parseInt(Math.floor(this._data.rating)); i++) {
      rate.push('<i class="fas fa-star"></i>');
    }
    return rate;
  }

  async _likeButtonInitiator() {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      restaurant: this._data,
    });
  }

  _render() {
    this.innerHTML = `
      <div class="likeButtonContainer" id="likeButtonContainer"></div>
      <article>
          <img src="${CONFIG.BASE_IMAGE_URL + this._data.pictureId}" class="detail__thumbnail" alt="${this._data.name}">
              <div class="detail__content">
                <h1 class="detail__title">${this._data.name}</h1>
                <div class="detail-category__container">
                    ${this._data.categories.map((category) => `<span class="detail__category">${category.name}</span>`).join(', ')}
                </div>
                <i class="fas fa-map-marker-alt"></i>
                <span class="detail__location">${this._data.address}, ${this._data.city}</span>
                <p class="detail__descriptlion">${this._data.description}</p> 
              </div>
      </article>
      <aside>
        <div class="detail__menu">
            <div class="menu-title__container">
                <i class="fas fa-pizza-slice"></i>
                <h2 class="menu__title">Food</h2>
            </div>
            <ul class="menu__list">
                ${this._data.menus.foods.map((food) => `<li class="menu__item">${food.name}</li>`).join(' ')}
            <ul>
        </div>
        <div class="detail__menu">
          <div class="menu-title__container">
              <i class="fas fa-coffee"></i>
              <h2 class="menu__title">Drinks</h2>
          </div>
          <ul class="menu__list">
              ${this._data.menus.drinks.map((drink) => `<li class="menu__item">${drink.name}</li>`).join(' ')}
          </ul>
        </div>
        <div class="menu__rating">
          <span>Rating ${this._data.rating}</span>    
          ${this._templateRating().map((item) => item).join(' ')}
        </div> 
      </aside>
      <article>
        <div class="review__content">
          <h1 class="review__heading">Consumer Review</h1>
          ${this._data.customerReviews.map((review) => `
            <h5 class="review__name">${review.name}</h5>
            <p class="review__desc">${review.review}</p>
            <small class="review__date"><span><i class="far fa-clock"></i></span> ${review.date}</small>`).join(' ')}
        </div>
      </article>`;
  }
}

customElements.define('detail-component', DetailComponent);
