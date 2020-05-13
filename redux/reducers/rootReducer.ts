import recipeReducer from './recipeReducer';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    recipeState: recipeReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;