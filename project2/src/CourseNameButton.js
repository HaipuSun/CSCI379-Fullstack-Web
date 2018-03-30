import React from 'react'
import Star from 'material-ui-icons/Star';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import CourseNameTitleBar from './CourseNameTitleBar';

class CourseNameButton extends React.Component {
  handleClick = () => {
    this.props.handleCourseNameClick()
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick = {this.handleClick}>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText inset primary="Course Name" />
      </ListItem>
    )
  }
}

export default CourseNameButton
