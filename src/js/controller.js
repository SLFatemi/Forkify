import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function(s) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

