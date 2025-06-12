import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookMarksView from './views/bookMarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
import '../sass/main.scss';
import { MODAL_CLOSE } from './config.js';


///////////////////////////////////////
async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Update result view to mark the selected search results
    resultsView.update(model.getSearchResultPage(model.state.search.page));

    // Rendering the spinner
    recipeView.renderSpinner();

    // Loading the recipe
    await model.loadRecipe(id);

    // Rendering the recipe
    recipeView.render(model.state.recipe);

    // Updating the bookMarks to highlight the selected one
    bookMarksView.update(model.state.bookMarks);
  } catch (e) {
    console.error(e);
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

function controlServings(func) {
  // Update the recipe serving (state)
  model.updateServing(model.state.recipe.servings + func);

  // Update the recipeView
  recipeView.update(model.state.recipe);
}

function controlAddBookMark() {
  if (model.state.recipe.isBookMarked) {
    model.removeBookMark(model.state.recipe.id);
    recipeView.update(model.state.recipe);
  } else {
    model.addBookMark(model.state.recipe);
    recipeView.update(model.state.recipe);
  }
  //  Render the bookmarks
  bookMarksView.render(model.state.bookMarks);
}

function controlBookMarks() {
  bookMarksView.render(model.state.bookMarks);
}


async function controlAddRecipe(newRecipe) {
  try {
    // Show Spinner
    addRecipeView.renderSpinner();

    // Upload New Recipe
    await model.uploadRecipe(newRecipe);

    // ُShow message
    addRecipeView.renderMessage();

    // Render the recipe
    recipeView.render(model.state.recipe);
    bookMarksView.render(model.state.bookMarks);

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close window
    setTimeout(function() {
      addRecipeView.closeWindow();
    }, MODAL_CLOSE * 1000);

  } catch (e) {
    addRecipeView.renderError(e.message);
  }
}

function init() {
  bookMarksView.addHandlerRender(controlBookMarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServing(controlServings);
  recipeView.addHandlerBookMark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPagination);
  addRecipeView.addHandlerSubmit(controlAddRecipe);
}

init();