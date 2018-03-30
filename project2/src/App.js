import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './CourseCard.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Button from 'material-ui/Button';
import MiniDrawer from './MiniDrawer';


class App extends Component {

  render() {
    return (
      <div>
        <div className="BU">BU Course</div>
        <link async href="http://fonts.googleapis.com/css?family=Warnes" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>

        <MiniDrawer />
      </div>
    );
  }
}

export default App;
