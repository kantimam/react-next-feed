import { GET_RECIPES, GET_RECIPE, RecipesState, RecipeActionType } from '../actions/types';
//import { Action } from 'redux'

const initialState: RecipesState = {
    recipes: 0,
    recipe: {}
}

const recipeReducer = (state = initialState, action: RecipeActionType) => {
    switch (action.type) {
        case GET_RECIPES:
            return { ...state, recipes: action.payload };
        case GET_RECIPE:
            return { ...state, recipe: action.payload };
        default:
            return { ...state };
    }
};

export default recipeReducer;