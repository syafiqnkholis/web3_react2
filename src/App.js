import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Navbar from './common/component/navbar';
import Router from './common/component/router';

class App extends React.Component {
  

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Router/>
      </div>
    );
  }
  
}

export default App;