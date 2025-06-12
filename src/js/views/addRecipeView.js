import View from './View.js';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _windowEl = document.querySelector('.add-recipe-window');
  _overlayEl = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _successMessage = 'Your recipe was added successfully';

  constructor() {
    super();
    this.addHandlerOpenWindow();
    this.addHandlerCloseWindow();
  }

  closeWindow() {
    this._overlayEl.classList.add('hidden');
    this._windowEl.classList.add('hidden');
  }

  openWindow() {
    this._parentEl.innerHTML = `
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input value="" required name="title" type="text" />
      <label>URL</label>
      <input value="" required name="sourceUrl" type="text" />
      <label>Image URL</label>
      <input value="" required name="image" type="text" />
      <label>Publisher</label>
      <input value="" required name="publisher" type="text" />
      <label>Prep time</label>
      <input value="" required name="cookingTime" type="number" />
      <label>Servings</label>
      <input value="" required name="servings" type="number" />
    </div>

    <div class="upload__column">
      <h3 class="upload__heading">Ingredients</h3>
      <label>Ingredient 1</label>
      <input
        value=""
        type="text"
        required
        name="ingredient-1"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 2</label>
      <input
        value=""
        type="text"
        name="ingredient-2"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 3</label>
      <input
        value=""
        type="text"
        name="ingredient-3"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 4</label>
      <input
        type="text"
        name="ingredient-4"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 5</label>
      <input
        type="text"
        name="ingredient-5"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 6</label>
      <input
        type="text"
        name="ingredient-6"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
    </div>

    <button class="btn upload__btn">
      <svg>
        <use href="src/img/icons.svg#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
    `;
    this._overlayEl.classList.remove('hidden');
    this._windowEl.classList.remove('hidden');
  }

  addHandlerOpenWindow() {
    this._btnOpen.addEventListener('click', function() {
      this.openWindow();
    }.bind(this));
  }

  addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', function() {
      this.closeWindow();
    }.bind(this));
    this._overlayEl.addEventListener('click', function() {
      this.closeWindow();
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