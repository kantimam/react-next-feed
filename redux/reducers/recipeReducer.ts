import { GET_RECIPES, GetRecipesAction, RecipesState } from '../actions/types';

const initialState: RecipesState = {
    recipes: 0
}

const recipeReducer = (state = initialState, action: GetRecipesAction) => {
    switch (action.type) {
        case GET_RECIPES:
            return { ...state, value: state.recipes + 1 };
        default:
            return { ...state };
    }
};

export default recipeReducer;