import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////
async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Rendering the spinner
    recipeView.renderSpinner();

    // Loading the recipe
    await model.loadRecipe(id);

    // Rendering the recipe
    recipeView.render(model.state.recipe);

  } catch (e) {
    alert(e);
  }
  return null;
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
}

init();