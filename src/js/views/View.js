import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
    this._data = data;
    const html = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  update(data) {
    this._data = data;
    const newHtml = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newHtml);
    const newElements = [...newDom.querySelectorAll('*')];
    const curElements = [...this._parentEl.querySelectorAll('*')];

    newElements.forEach((newEl, i) => {
      const curEl = curElements.at(i);
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }
      if (!newEl.isEqualNode(curEl)) [...newEl.attributes].forEach(attr => curEl.setAttribute(attr.name, attr.value));
    });
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  renderSpinner() {
    const html = `
    <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
    </div>  
  `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderError(message = this._errorMessage) {
    const html = `    
    <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderMessage(message = this._successMessage) {
    const html = `    
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>
         ${message}
        </p>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

}

