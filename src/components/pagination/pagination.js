import { DivComponent } from '../../common/div-component';
import './pagination.css';

export class Pagination extends DivComponent {
  constructor(offsetState) {
    super();
    this.offsetState = offsetState.offset;
  }

  render() {
    this.el.classList.add('pagination');
    this.el.innerHTML = `
        <a href="#" class="pagination__item">
          <img src="/static/arrow-left.svg" alt="arrow-left" />
          <p>Предыдущая страница</p>
        </a>
        <a href="#" class="pagination__item">
        <p>Следующая страница</p>
        <img src="/static/arrow-rigth.svg" alt="arrow-right" />
        </a>
    `;
    console.log(this.offsetState);
    return this.el;
  }
}
