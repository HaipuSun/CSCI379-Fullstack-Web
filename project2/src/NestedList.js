import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Class from 'material-ui-icons/Class';
import Star from 'material-ui-icons/Star';
import SchoolIcon from 'material-ui-icons/School';
import FaceIcon from 'material-ui-icons/Face';
import SearchIcon from 'material-ui-icons/Search';

import CourseNameButton from './CourseNameButton';
import CourseNumberButton from './CourseNumberButton';
import ProfessorButton from './ProfessorButton';
import DepartmentButton from './DepartmentButton';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List
          component="nav"
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText inset primary="Search" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <CourseNameButton handleCourseNameClick={this.props.handleCourseNameClick}/>

              <CourseNumberButton handleCourseNumberClick={this.props.handleCourseNumberClick}/>

              <ProfessorButton handleProfessorClick={this.props.handleProfessorClick}/>

              <DepartmentButton handleDepartmentClick={this.props.handleDepartmentClick}/>

            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
