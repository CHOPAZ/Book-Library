(function () {
  'use strict';

  class AbstractView {
    constructor() {
      this.app = document.getElementById('root');
    }
    
    setTitle(title) {
      document.title = title;
    }
    
    render() {
      return
    }
    /* Уничтожение view (для отмены подписок) */
    destroy() {
      return
    }
  }

  /* Главная страница */

  class MainView extends AbstractView {
    constructor() {
      super();
      this.setTitle('Поиск книг');
    }

    render() {
      const main = document.createElement('div');
      main.innerHTML = 'Тест';
      this.app.innerHTML = '';
      this.app.append(main);
    }
  }

  /* Routing */
  class App {
    routes = [
      {
        path: '',
        view: MainView,
      },
    ];
    constructor() {
      window.addEventListener('hashchange', this.route.bind(this)); //обработка смены хэш
      this.route();
    }

    route() {
      if( this.currentView) {
        this.currentView.destroy();
      }
      const view = this.routes.find((r) => r.path === location.hash).view; //получение страницы
      this.currentView = new view();
      this.currentView.render();
    }
  }

  new App();

})();
