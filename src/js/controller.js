import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

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
    if (!query) throw new Error();

    // Get the results
    await model.loadSearchResults(query);

    // Rendering the search results
    resultsView.render(model.getSearchResultPage());

    // Render pagination
    paginationView.render(model.state.search);

  } catch (e) {
    resultsView.renderError();
  }
  return null;
}

function controlPagination(page) {
  // Rendering the NEW search results
  resultsView.render(model.getSearchResultPage(page));
  // Render NEW pagination
  paginationView.render(model.state.search);
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPagination);
}

init();