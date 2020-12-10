import './App.scss';
import React, { Component } from'react';
import Navbar from './components/Navbar';
import AllSongs from './components/AllSongs';
import Add from './components/Add';
import { Link, Route, Router, Switch } from "react-router-dom";
import { BreakpointProvider } from 'react-socks';
import Dashboard from './components/Dashboard'

export default function App(){ 

  return (
      <BreakpointProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/songlist"component={AllSongs} />
            <Route exact path="/add"component={Add} />
          </Switch>
        </div>
      </BreakpointProvider>
    );
}
