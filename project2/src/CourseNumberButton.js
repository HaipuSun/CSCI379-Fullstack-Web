import React from 'react'
import Class from 'material-ui-icons/Class';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import CourseNumberTitleBar from './CourseNumberTitleBar';

class CourseNumberButton extends React.Component {
  handleClick = () => {
    this.props.handleCourseNumberClick()
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick = {this.handleClick}>
        <ListItemIcon>
          <Class />
        </ListItemIcon>
        <ListItemText inset primary="Course Number" />
      </ListItem>
    )
  }
}

export default CourseNumberButton
