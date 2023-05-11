import { DivComponent } from '../../common/div-component';
import './pagination.css';

export class Pagination extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  /* изменение offset ++ */
  upPagination() {
    this.state.offset += 1;
  }

  /* изменение offset -- */
  downPagination() {
    if (this.state.offset === 0) {
      return;
    }
    this.state.offset -= 1;
  }

  render() {
    this.el.classList.add('pagination');
    this.el.innerHTML = `
        <button class="pagination__item pagination-back">
          <img src="/static/arrow-left.svg" alt="arrow-left" />
          <div>Предыдущая страница</div>
        </button>
        <button class="pagination__item pagination-next">
          <div>Следующая страница</div>
          <img src="/static/arrow-rigth.svg" alt="arrow-right" />
        </button>
    `;
    /* вызов downPagination при нажатии на кнопку Предыдущая страница */
    this.el
      .querySelector('.pagination-back')
      .addEventListener('click', this.downPagination.bind(this));

    /* вызов upPagination при нажатии на кнопку Следующая страница */
    this.el
      .querySelector('.pagination-next')
      .addEventListener('click', this.upPagination.bind(this));

    return this.el;
  }
}
