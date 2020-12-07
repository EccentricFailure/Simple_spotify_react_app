//import './App.scss';
import React, { Component } from'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Pagetwo from './components/Pagetwo';
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
                <Route exact path="/content"><Content /></Route>
                <Route exact path="/content2"><Pagetwo /></Route>
              </Switch>
          </div>
        </BreakpointProvider>
      );
  }
 
}

export default App;
