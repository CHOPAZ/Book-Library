import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div class="logo">
        <img src="/static/logo.svg" alt="Logo" />
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="/static/search.svg" alt="Search" />
          <p>Поиск кнги</p>
          </a>
          <a class="menu__item" href="#favorites">
          <img src="/static/favorite.svg" alt="Favorites" />
          <p>Избранное</p>
          <div class="menu__counter">
          ${this.appState.favorites.length}
          </div>
        </a>

    `;
    return this.el;
  }
}
