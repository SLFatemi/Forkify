import View from './View.js';

import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    if (Object.keys(this._data.groupedResults).length === 1) return '';
    if (this._data.page === Object.keys(this._data.groupedResults).length) {
      return `
      <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
      </button>
      `;
    }
    if (this._data.page === 1) {
      return `
      <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    } else {
      return `
      <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
      </button>
      <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }
  }

  addHandlerPagination(handler) {
    this._parentEl.addEventListener('click', function(e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}


export default new PaginationView();

