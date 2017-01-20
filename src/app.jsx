import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import SearchBar from './containers/Search_bar';
import WeatherList from './containers/WeatherList';

import { configure } from './store/store';
const store = configure();

import 'font-awesome/scss/font-awesome.scss';
import './scss/style.scss';

console.log('React/Redux Boilerplate ready to go!');


ReactDOM.render(
  <Provider store={store} >
    <div className="container">
      <SearchBar />
      <WeatherList />
    </div>
  </Provider>,
  document.getElementById('app')
);


