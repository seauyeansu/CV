import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const contact = (props) => {
  return (
    <div className={classes.contact}>
      <ul>
      <li><FontAwesomeIcon icon={ faAt }/> {props.email}</li>
      <li><FontAwesomeIcon icon={ faMobileAlt }/> {props.mobile}</li>
      <li><a href="https://www.linkedin.com/in/seauyean/"><FontAwesomeIcon icon={ faLinkedin }/> {props.linkedin}</a></li>
      <li><FontAwesomeIcon icon={ faGithub }/> {props.github}</li>
      </ul>
    </div>
  )
}

export default contact;
