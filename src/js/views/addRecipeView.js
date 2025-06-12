import View from './View.js';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _windowEl = document.querySelector('.add-recipe-window');
  _overlayEl = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerOpenWindow();
    this._addHandlerCloseWindow();
  }

  _addHandlerOpenWindow() {
    this._btnOpen.addEventListener('click', function() {
      this._overlayEl.classList.toggle('hidden');
      this._windowEl.classList.toggle('hidden');
    }.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', function() {
      this._overlayEl.classList.toggle('hidden');
      this._windowEl.classList.toggle('hidden');
    }.bind(this));
    this._overlayEl.addEventListener('click', function() {
      this._overlayEl.classList.toggle('hidden');
      this._windowEl.classList.toggle('hidden');
    }.bind(this));
  };

  addHandlerSubmit(handler) {
    this._parentEl.addEventListener('click', function(e) {
      e.preventDefault();
      const btn = e.target.closest('.upload__btn');
      if (!btn) return;
      const data = [...new FormData(this)];
      handler(Object.fromEntries(data));
    });
  }
}

export default new AddRecipeView();