import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/scss/font-awesome.scss';
import './scss/style.scss';

console.log('React/Redux Boilerplate ready to go!');

ReactDOM.render(
  <div className="container">
    <h1 className="text-success title-component">React Redux Bootstrapv4 Boilerplate</h1>
    <ul className="list-group list-unstyled">
      <li className="list-group-item-success">React Redux <i className="fa fa-thumbs-up" /></li>
      <li className="list-group-item-success">Bootstrap 4 alpha-6 scss <i className="fa fa-thumbs-up" /></li>
      <li className="list-group-item-success">FontAwesome 4.7 <i className="fa fa-thumbs-up" /></li>
      <li className="list-group-item-success">PostCSS autoprefixer Plugin <i className="fa fa-thumbs-up" /></li>
      <li className="list-group-item-success">ES6 + stage-0 <i className="fa fa-thumbs-up" /></li>
    </ul>
  </div>,
  document.getElementById('app')
);
