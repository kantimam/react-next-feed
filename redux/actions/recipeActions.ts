import { GET_RECIPES, RecipesThunk } from './types';
import { Dispatch } from 'redux';

export const getRecipes: RecipesThunk = () => (dispatch: Dispatch) => dispatch({
    type: GET_RECIPES
})


