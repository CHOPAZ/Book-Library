import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    const existedFavorites = this.appState.favorites.find(b => b.key == this.cardState.key)
 
    this.el.innerHTML = `
      <div class="card__img">
        ${this.cardState.cover_edition_key ? `<img src ="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка"/>` : 'Не задано'}
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
        </div>
        <div class="card__name">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.author_name ? this.cardState.author_name : 'Не задано'}
        </div>
        <div class="card__footer">
          <button class="button__add ${existedFavorites ? 'button__add_active' : ''}">
              ${existedFavorites
                  ? '<img src="/static/favorite.svg" alt="favorites"/>'
                  : '<img src="/static/favorite-white.svg" alt="favorites-w"/>'}
          </button>
        </div>
      </div>
    `

    return this.el

  }
}