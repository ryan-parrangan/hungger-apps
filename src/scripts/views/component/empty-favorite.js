class EmptyFavorite extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
            <div class="empty-favorite-tag">
                <p>You don't have any Favorite Restaurant</p>
            </div>
        `;
  }
}

customElements.define('empty-favorite', EmptyFavorite);
