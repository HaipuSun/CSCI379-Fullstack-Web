import React from 'react'
import SchoolIcon from 'material-ui-icons/School';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DepartmentTitleBar from './DepartmentTitleBar';

class DepartmentButton extends React.Component {
  handleClick = () => {
    this.props.handleDepartmentClick()
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick = {this.handleClick}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText inset primary="Department" />
      </ListItem>
    )
  }
}

export default DepartmentButton
