export const GET_RECIPES = "getRecipes";
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../reducers/rootReducer';
import { Action } from 'redux'


export interface GetRecipesAction {
    type: typeof GET_RECIPES,
    payload?: any
}

export interface RecipesState {
    recipes: number
}

export type RecipesThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>