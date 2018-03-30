import React from 'react';
import PropTypes from 'prop-types';

function SimpleCard(props) {

  const { classes } = props;

  return (
    <div class="card">

      <h1>John Doe</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>

     <p><button class="courseButton">Contact</button></p>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleCard;
