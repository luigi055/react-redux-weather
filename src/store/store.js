import { combineReducers, applyMiddleware, createStorage, compose } from 'redux';
import thunk from 'redux-thunk';

export const configure = (initialState = {}) => {
  const reducer = combineReducers();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
  );
  
  return store;
};
