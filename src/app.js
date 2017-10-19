import React from 'react';
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

const rootApp = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, rootApp);
