import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import { Pagination } from '../pagination/pagination';

import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    /* Если идет загрузка карточек */
    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`;
      return this.el;
    }
    const cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid');
    this.el.append(cardGrid);
    for (const card of this.parentState.list) {
      cardGrid.append(new Card(this.appState, card).render());
    }
    this.el.append(new Pagination(this.parentState).render());

    return this.el;
  }
}
