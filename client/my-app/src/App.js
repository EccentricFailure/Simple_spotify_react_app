//import './App.scss';
import React, { Component } from'react';
import Navbar from './components/Navbar';
import AllSongs from './components/AllSongs';
import Genre from './components/Genre';
import { Link, Route, Router, Switch } from "react-router-dom";
import { BreakpointProvider } from 'react-socks';
import Dashboard from './components/Dashboard'

class App extends Component{ 

  
  render(){
    return (
        <BreakpointProvider>
          <div className="App">
            <Navbar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/content"><AllSongs /></Route>
                <Route exact path="/content2"><Genre /></Route>
              </Switch>
          </div>
        </BreakpointProvider>
      );
  }
 
}

export default App;
