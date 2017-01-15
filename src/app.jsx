import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import Hobby from 'Hobby';

import { addFeature } from './actions';
import { configure } from './store/store';

import 'font-awesome/scss/font-awesome.scss';
import './scss/style.scss';

console.log('React/Redux Boilerplate ready to go!');

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <Hobby />
  </Provider>,
  document.getElementById('app')
);

store.dispatch(addFeature('React, ReactDOM, React Router'));
store.dispatch(addFeature('Redux, React-Redux, Redux-thunk'));
store.dispatch(addFeature('Bootstrap V4 alpha~6 customizable Sass'));
store.dispatch(addFeature('FontAwesome 4.7'));
store.dispatch(addFeature('PostCSS autoprefixer plugin'));
store.dispatch(addFeature('react, ES6 and stage-0 babel presets'));
store.dispatch(addFeature('ESLint with RallyCoding rules'));
