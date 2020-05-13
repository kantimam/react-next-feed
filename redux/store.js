/* import {
    createStore
} from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store; */


import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

// CREATING INITIAL STORE
export default initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

    // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
    if (module.hot) {
        module.hot.accept('./reducers/rootReducer', () => {
            const createNextReducer = require('./reducers/rootReducer').default

            store.replaceReducer(createNextReducer(initialState))
        })
    }

    return store
}