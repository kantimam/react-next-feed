import { GET_RECIPES, RecipesThunk } from './types';
import { Dispatch } from 'redux';
import { getRecipesAPI } from '../../api'

export const getRecipes: RecipesThunk = () => async (dispatch: Dispatch) => {
    try {
        const jsonData = await getRecipesAPI();
        dispatch({
            type: GET_RECIPES,
            payload: jsonData
        })
    }
    catch (error) {
        console.warn(error);
        dispatch({
            type: GET_RECIPES,
            payload: {}
        })
    }

}


