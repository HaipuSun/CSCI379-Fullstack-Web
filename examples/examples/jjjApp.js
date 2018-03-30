import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Professorpage from './Professorpage';
import Namepage from './Namepage';
import CRNpage from './CRNpage';
import Coursepage from './Coursepage';
import Mainpage from './Mainpage';
import Help from './Help';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
	  <div>
	  <Route exact path='/' render = {() => (
	  <MuiThemeProvider>
		<Mainpage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/help' render = {() => (
	  <MuiThemeProvider>
		<Help />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchcourse' render = {() => (
	  <MuiThemeProvider>
		<Coursepage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchbycrn' render = {() => (
	  <MuiThemeProvider>
		<CRNpage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchbyname' render = {() => (
	  <MuiThemeProvider>
		<Namepage />
	  </MuiThemeProvider>
	  )}/>
	  <Route path='/searchbyprofessor' render = {() => (
	  <MuiThemeProvider>
		<Professorpage />
	  </MuiThemeProvider>
	  )}/>
	  
	  </div>
    );
  }
}

export default App;
