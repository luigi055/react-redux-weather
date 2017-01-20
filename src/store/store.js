import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import { weatherReducer } from '../reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    weather: weatherReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState, 
    composeEnhancers(applyMiddleware(ReduxPromise))
  );
  
  return store;
};

