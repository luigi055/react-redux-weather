import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeature } from '../actions';

const Hobby = props => {
  function renderList() {
    return props.features.map(feature => {
      return (<li key={feature.id} className="list-group-item-success">
                {feature.feature} <i className="fa fa-thumbs-up" />
              </li>);
    });
  }

  return (
    <div className="container">
      <h1 className="text-success title-component">React Redux Bootstrapv4 Boilerplate</h1>
      <ul className="list-group list-unstyled">
        {renderList()}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    features: state.features
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFeature }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hobby);
