import React from 'react';
import ReactDOM from 'react-dom';
import Excel from './components/excel/Excel';
import './index.css';

const ListHeads=["Book","Author","Language","Published","Sales"]


ReactDOM.render(
  <Excel heads={ListHeads} />,
  document.getElementById('root')
);
