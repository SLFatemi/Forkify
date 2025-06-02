import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////
async function showRecipe() {
  try {
    // Rendering the spinner
    recipeView.renderSpinner();

    // Loading the recipe
    await model.loadRecipe();

    // Rendering the recipe
    recipeView.render(model.state.recipe);

  } catch (e) {
    alert(e);
  }
  return null;
}

(async () => {await showRecipe();})();

