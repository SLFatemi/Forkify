import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';
import { indexOf } from 'core-js/internals/array-includes.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    groupedResults: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1
  },
  bookMarks: []
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    if (state.bookMarks.map(recipe => recipe.id).includes(state.recipe.id)) state.recipe.isBookMarked = true;
  } catch (e) {throw e;}
  return null;
}

export async function loadSearchResults(query) {
  try {
    const data = await getJSON(`${API_URL}/?search=${query}`);
    state.search.query = query;
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url
      };
    });
  } catch (e) {throw e;}
  return null;
}

export function getSearchResultPage(page = 1) {
  state.search.page = page;
  const groupedByResults = Object.groupBy(state.search.results, (_, index) => {
    return Math.floor(index / state.search.resultsPerPage);
  });
  state.search.groupedResults = groupedByResults;
  return groupedByResults[page - 1];
}

export function updateServing(newServing) {
  if (newServing <= 0) return;
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity / state.recipe.servings) * newServing;
  });
  state.recipe.servings = newServing;
}

export function addBookMark(recipe) {
  // Add bookmark
  state.bookMarks.push(recipe);

  // Mark the current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.isBookMarked = true;
  persistBookMarks();
}

export function removeBookMark(id) {
  const index = state.bookMarks.findIndex(recipe => recipe.id === id);
  state.bookMarks.splice(index, 1);
  state.recipe.isBookMarked = false;
  persistBookMarks();
}


function persistBookMarks() {
  localStorage.setItem('bookMarks', JSON.stringify(state.bookMarks));
}

function init() {
  if (!localStorage.getItem('bookMarks')) return;
  state.bookMarks = JSON.parse(localStorage.getItem('bookMarks'));
}

init();

