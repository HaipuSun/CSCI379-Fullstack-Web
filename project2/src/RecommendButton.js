import React from 'react'
import TagFace from 'material-ui-icons/TagFaces';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class DepartmentButton extends React.Component {
  handleClick = () => {
    this.props.handleRecommendClick()
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem button onClick = {this.handleClick}>
        <ListItemIcon>
          <TagFace />
        </ListItemIcon>
        <ListItemText inset primary="Recommend" />
      </ListItem>
    )
  }
}

export default DepartmentButton
