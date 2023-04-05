/* Главная страница */
import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
export class MainView extends AbstractView {
  state = {
    list: [], //
    loading: false, // состояние загрузки
    searchQuery: undefined, // запрос
    offset: 0, // пагинация
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.setTitle('Поиск книг');
  }
  /* Метод после обновления appState*/
  appStateHook(path) {
    if(path === 'favorites') {
      console.log(path);
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
    this.app.innerHTML = '';
    this.app.append(main);
    this.appState.favorites.push('3')
  }
}
