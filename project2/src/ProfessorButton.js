import React from 'react'
import FaceIcon from 'material-ui-icons/Face';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ProfessorTitleBar from './ProfessorTitleBar';

class ProfessorButton extends React.Component {
  handleClick = () => {
    this.props.handleProfessorClick()
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick = {this.handleClick}>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText inset primary="Professor" />
      </ListItem>
    )
  }
}

export default ProfessorButton
