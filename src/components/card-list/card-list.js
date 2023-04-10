import { DivComponent } from '../../common/div-component';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    /* Если идет загрузка карточек */
    if(this.parentState.loading) {
      this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`;
      return this.el
    }

    this.el.classList.add('card-list');
    this.el.innerHTML = `
      <h1>Найтено книг - ${this.parentState.list.length}</h1>
    `

    return this.el

  }
} 