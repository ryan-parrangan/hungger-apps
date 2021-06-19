class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Welcome To Hunger Apps</h1>
                <p class="hero__tagline">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>`;
  }
}

customElements.define('hero-component', HeroComponent);
