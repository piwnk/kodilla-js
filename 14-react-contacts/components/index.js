import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// const React = require('react');
// const ReactDOM = require('react-dom');
// const App = require('./App');


const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
