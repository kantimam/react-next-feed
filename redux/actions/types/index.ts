export const GET_RECIPES = "getRecipes";

export interface GetRecipesAction {
    type: typeof GET_RECIPES,
    payload?: any
}

export interface RecipesState {
    recipes: number
}