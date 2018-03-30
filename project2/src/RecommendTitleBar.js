import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
//import Button from 'material-ui/Button';
import Courses from './MajorYear';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class RecommendTitleBar extends Component {
  //const { classes } = props;

  constructor(props){
    super(props)
    this.state = {Major: "BEMG", Year: "2019"}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      Major: document.getElementById("selectOfMajor").value,
      Year: document.getElementById("selectOfYear").value
    });
  }

  handleClick = (event) => {
    var newHTML = ""
    document.getElementById("courses").innerHTML = ""
    var recommendCourses= Courses[this.state.Major][this.state.Year]
    for ( var rc in recommendCourses ) {
      var department = recommendCourses[rc]["Department"]
      var courseNumber = recommendCourses[rc]["CourseNumber"]
      fetch("https://www.eg.bucknell.edu/~amm042/service/q?Semester=Fall&Year=2018&Department=" + department + "&CrseNum=" + courseNumber)
        .then(result=>result.json())
        .then(result=>{
          if (result.message.length > 0) {
            for ( var j=0;j<result.message.length;j++){
              var r = result.message[j]
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
          document.getElementById("courses").innerHTML += newHTML
          }
        })
        .catch(err=>{
          document.getElementById("courses").innerHTML += "<div>ERROR: " + err + ".</div>"
        })
    }
  }

  render(){
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Major
            </Typography>
            <select id='selectOfMajor' onChange={this.handleChange}>
              <option value="BEMG">BEMG</option>
              <option value="CHEG">CHEG</option>
              <option value="CENG">CENG</option>
              <option value="CPEG">CPEG</option>
              <option value="CSEG">CSEG</option>
              <option value="ELEC">ELEC</option>
              <option value="ENGR">ENGR</option>
              <option value="EVEG">EVEG</option>
              <option value="MECH">MECH</option>
            </select>
            <Typography variant="title" color="inherit">
              Class of Year
            </Typography>
            <select id='selectOfYear' onChange={this.handleChange}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <button id="confirm" onClick={this.handleClick}> Get Advice </button>
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
export default RecommendTitleBar;
