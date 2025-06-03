import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
import sassTransformer from '@parcel/transformer-sass/lib/SassTransformer.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
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
