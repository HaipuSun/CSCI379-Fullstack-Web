import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Button extends Component {
  constructor(props){
    super(props)
    this.state = {PROFESSOR: null}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      PROFESSOR: document.getElementById("input").value
    }, () => {
      const temp = this.state.PROFESSOR.charAt(0).toUpperCase() + this.state.PROFESSOR.slice(1)
      const x = "https://www.eg.bucknell.edu/~amm042/service/q?Semester=Fall&Year=2018&text=" + temp
      console.log(x)
      fetch(x)
        .then(result=>result.json())
        .then(result=>{
          if (result.message.length > 0) {
            var r
            var newHTML = ""
            var i;
            for(i=0; i<result.message.length; i++){
              r = result.message[i]
              newHTML +=
              '<div class="card">' +
              "<h1>" + r.Course + "</h1>" +
              '<p class="title">' + r.Title + "</p>" +
              "<p>" + r.Instructor + "</p>" +
              "<p>" + r["Meeting Time"] + "</p>" +
              "<p>" + r.Room + "</p>" +
              '<p><button class="courseButton" onClick={this.handleAddCourse}>Add to Favorite</button><button class="courseButton" onClick={this.handleSaveCourse}>Save Course</button></p>'+
              "</div>"
            }


            document.getElementById('courses').innerHTML = newHTML
          }
          else{
            document.getElementById("courses").innerHTML = "<p>Invalid Input.</p>"
          }
        })
        .catch(err=>{
          document.getElementById("courses").innerHTML = "<div>Couldn't fetch " + err + ".</div>"
        })
    });

  }

  render(){
    return (
      <button id="confirm" onClick={this.handleClick}> Search </button>
    );
  }
}

class SimpleAppBar extends Component {
  //const { classes } = props;
  render(){
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Professor
            </Typography>
            <input id='input' type="text"/>
            <Button id='SearchName' onClick={this.handleClick}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
/*
SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
*/
export default SimpleAppBar;
