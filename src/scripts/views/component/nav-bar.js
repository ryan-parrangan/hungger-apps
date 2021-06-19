class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="app-bar bgcolor">
            <div class="app-bar__menu">
                <button id="hamburgerButton">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="app-bar__brand">
                <h1>Hunger Apps</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://github.com/ryan-parrangan" target="_blank" rel="noreferrer">About</a></li> 
                </ul>
            </nav>
        </div>`;
  }
}

customElements.define('nav-bar', NavBar);
