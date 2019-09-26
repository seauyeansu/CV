import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const contact = (props) => {
  return (
    <div className={classes.contact}>
      <ul>
      <li><span className = "fa-layers fa-fw">
        <FontAwesomeIcon
        icon = { faCircle }
        color = "#113f67"/>
        <FontAwesomeIcon icon = { faEnvelope } inverse transform = "shrink-6"/></span>{props.email}</li>
      <li><span className = "fa-layers fa-fw">
        <FontAwesomeIcon
        icon ={ faCircle }
        color = "#113f67"/>
        <FontAwesomeIcon icon = { faMobileAlt } inverse transform = "shrink-6"/></span>{props.mobile}</li>
      <li><span className = "fa-layers fa-fw">
        <FontAwesomeIcon
        icon = { faCircle }
        color = "#113f67"/>
        <FontAwesomeIcon icon = { faLinkedin } inverse transform = "shrink-6"/></span>
        <a href="https://www.linkedin.com/in/seauyean/">{props.linkedin}</a></li>
      <li><span className = "fa-layers fa-fw">
        <FontAwesomeIcon
        icon = { faCircle }
        color = "#113f67"/>
        <FontAwesomeIcon icon = { faGithub } inverse transform = "shrink-6"/></span>{props.github}</li>
      </ul>
    </div>
  )
}

export default contact;
