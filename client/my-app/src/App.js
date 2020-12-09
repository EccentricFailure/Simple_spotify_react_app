//import './App.scss';
import React, { Component } from'react';
import Navbar from './components/Navbar';
import AllSongs from './components/AllSongs';
import Add from './components/Add';
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
                <Route exact path="/songlist"><AllSongs /></Route>
                <Route exact path="/add"><Add /></Route>
              </Switch>
          </div>
        </BreakpointProvider>
      );
  }
 
}

export default App;
