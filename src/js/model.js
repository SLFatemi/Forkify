import { API_URL, KEY, RES_PER_PAGE } from './config.js';
import { getJSON, sendJSON } from './helpers.js';


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

function createRecipeObject(data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    // If the key exist
    ...(recipe.key && { key: recipe.key })
  };
}

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    if (state.bookMarks.map(recipe => recipe.id)
      .includes(state.recipe.id)) state.recipe.isBookMarked = true;
  } catch (e) {throw e;}
  return null;
}

export async function loadSearchResults(query) {
  try {
    const data = await getJSON(`${API_URL}/?search=${query}&key=${KEY}`);
    state.search.query = query;
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key })
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
    ing.quantity = +((ing.quantity / state.recipe.servings) * newServing).toFixed(2);
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

export async function uploadRecipe(newRecipe) {
  const ingredients = Object.entries(newRecipe)
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
      const ingArray = ing[1]
        .replaceAll(' ', '')
        .split(',');
      if (ingArray.length !== 3) throw new Error('Wrong ingredient format');
      const [quantity, unit, description] = ingArray;
      return {
        quantity: quantity ? +quantity : null,
        unit,
        description
      };
    });
  const recipeToSend = {
    title: newRecipe.title,
    publisher: newRecipe.publisher,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    servings: +newRecipe.servings,
    cooking_time: +newRecipe.cookingTime,
    ingredients: ingredients
  };
  const data = await sendJSON(`${API_URL}?key=${KEY}`, recipeToSend);
  state.recipe = createRecipeObject(data);
  addBookMark(state.recipe);
}

function persistBookMarks() {
  localStorage.setItem('bookMarks', JSON.stringify(state.bookMarks));
}

function init() {
  if (!localStorage.getItem('bookMarks')) return;
  state.bookMarks = JSON.parse(localStorage.getItem('bookMarks'));
}

init();

