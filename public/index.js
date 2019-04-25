/**
 * NPM
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
/**
 * LOCAL
 */
import App from './components/App';
/**
 * CODE
 */
const RootComponent = (
    <App />
);

const target = document.getElementById("root");
/**
 * EXPORT
 */
render(RootComponent,target);

