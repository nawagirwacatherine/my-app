import React from 'react';
import './App.css';
import Orderonline from './Orderonline.js';
import Menu from './Menu';
import Login from './Login';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';




function Header() {
  return <h1>Little lemom restaurant</h1>;
}

function App() {
  return <Header />;

}

export default App;
