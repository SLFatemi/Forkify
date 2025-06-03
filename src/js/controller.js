import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime.js';


if (module.hot) {
  module.hot.accept();
}

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
    recipeView.renderError();
  }
  return null;
}

async function controlSearchResults() {
  try {
    // Rendering the spinner
    resultsView.renderSpinner();

    // Getting the query
    const query = searchView.getQuery();
    if (!query) return;

    // Rendering the search results
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);


  } catch (e) {}
  return null;
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();