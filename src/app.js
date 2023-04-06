/* Routing */

import { MainView } from './pages/main/main.js';
class App {
  routes = [
    {
      path: '',
      view: MainView,
    },
  ];
  /* Глобальный стейт */
  appState = {
    favorites: [],
  };
  constructor() {
    window.addEventListener('hashchange', this.route.bind(this)); //обработка смены хэш
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path == location.hash).view; //получение страницы
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
