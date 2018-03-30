import React from 'react'
import StarIcon from 'material-ui-icons/Star';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class CourseNameButton extends React.Component {
  handleClick = () => {
    this.props.handleCourseNameClick()
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick={this.handleClick}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Saved" />
      </ListItem>
    )
  }
}

export default CourseNameButton
