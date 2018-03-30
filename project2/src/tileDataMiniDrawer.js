// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import NestedList from './NestedList';
import Divider from 'material-ui/Divider';

import Favorite from 'material-ui-icons/Favorite';
import Brush from 'material-ui-icons/Brush';
import StarIcon from 'material-ui-icons/Star';
import DeleteIcon from 'material-ui-icons/Delete';
import SaveIcon from 'material-ui-icons/Save';
import SearchIcon from 'material-ui-icons/Search';
import FolderOpen from 'material-ui-icons/FolderOpen';
import MailIcon from 'material-ui-icons/Mail';
import TagFace from 'material-ui-icons/TagFaces';

export const mailFolderListItems = (func1,func2,func3,func4) => (
  <div>

    <NestedList handleDepartmentClick={func1} handleProfessorClick={func2} handleCourseNameClick={func3} handleCourseNumberClick={func4}/>

    <Divider />

    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Saved" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Favorite />
      </ListItemIcon>
      <ListItemText primary="Favorite" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Brush />
      </ListItemIcon>
      <ListItemText primary="Reset" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <TagFace />
      </ListItemIcon>
      <ListItemText primary="Recommend" />
    </ListItem>

  </div>
);

export const otherMailFolderListItems = (
  <div>

    <ListItem button>
      <ListItemIcon>
        <FolderOpen />
      </ListItemIcon>
      <ListItemText primary="Open" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <SaveIcon />
      </ListItemIcon>
      <ListItemText primary="Save" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Delete" />
    </ListItem>

  </div>
);
