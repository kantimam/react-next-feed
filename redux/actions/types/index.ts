import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../reducers/rootReducer';
import { Action } from 'redux'


export const GET_RECIPES = "getRecipes";
export const GET_RECIPE = "getRecipe";

/* state types */
export interface RecipesState {
    recipes: number,
    recipe: unknown
}

/* action types */
export interface GetRecipesAction {
    type: typeof GET_RECIPES,
    payload?: any
}

export interface GetRecipeAction {
    type: typeof GET_RECIPE,
    payload?: any
}



export type RecipesThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export type RecipeActionType = GetRecipeAction | GetRecipesAction;