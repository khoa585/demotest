import React from 'react';
import './App.css';
import Header from './Header/Header';
import Distant from './Distant/Distant';
import Body from './Body/Body';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Distant></Distant>
      <Body></Body>
    </div>
  );
}

export default App;
