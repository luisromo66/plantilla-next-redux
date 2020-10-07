import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'; //esta en el index y lo pasa por default

const store = createStore(
    reducer,  //combine reducers esta en reducers, y es para si tienes multiples reducers poder agregarlos en el store
    compose( applyMiddleware(thunk),

        typeof window === 'object' &&
          typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export default store;