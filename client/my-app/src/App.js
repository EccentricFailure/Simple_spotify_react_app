//import './App.scss';
import React, { Component } from'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Pagetwo from './components/Pagetwo';
import { Link, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from 'react-socks';

class App extends Component{ 

  
  render(){
    return (
        <BreakpointProvider>
          <div className="App">
            <Navbar />
            <Route path="/content"><Content /></Route>
            <Route path="/content2"><Pagetwo /></Route>
          </div>
        </BreakpointProvider>
      );
  }
 
}

export default App;
