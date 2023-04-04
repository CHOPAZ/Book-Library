export class AbstractView {
  constructor() {
    this.app = document.getElementById('root')
  }
  
  setTitle(title) {
    document.title = title
  }
  
  render() {
    return
  }
  /* Уничтожение view (для отмены подписок) */
  destroy() {
    return
  }
}