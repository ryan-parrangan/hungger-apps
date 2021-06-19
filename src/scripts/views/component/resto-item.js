import CONFIG from '../../globals/config';

class Restoitem extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
        <article>
            <div class="restaurant-item">
                <div class="restaurant-item__header">
                    <img class="restaurant-item__thumbnail" alt="${this._data.name}" 
                        src="${CONFIG.BASE_IMAGE_URL + this._data.pictureId}">
                    <div class="restaurant-item__header__rating">
                        <p>⭐️<span class="restaurant-item__header__rating__score">${this._data.rating}</span></p>
                    </div>
                </div>
                <div class="restaurant-item__content">
                    <h3><a href="${`/#/detail/${this._data.id}`}">${this._data.name}</a></h3>
                    <h4><i class="fas fa-map-marker-alt home__marker"></i> ${this._data.city}</h4>
                    <p>${this._data.description}</p>
                </div>
            </div>
        </article>`;
  }
}

customElements.define('resto-item', Restoitem);
