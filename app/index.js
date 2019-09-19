import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';
import Contact from './Contact';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function App (props) {
    return (
        <div className= {classes.gridContainer}>
          <div className = {classes.name}>
              <h1>Giselle Su Seau Yean</h1>
              <p>Front End Developer</p>
          </div>
          <div className = {classes.contact}>
              <Contact
              email="seauyeansu@gmail.com"
              mobile="017634474915"
              linkedin="linkedin.com/in/seauyean/"
              github="github.com/seauyeansu"
              />
          </div>
          <div className = {classNames(classes.employment, classes.border)}>
            <h3>Employment</h3>
          </div>
          <div className = {classNames(classes.icon5, classes.iconStyle)}>
            <FontAwesomeIcon icon={ faBriefcase }/>
          </div>
          <div className = {classes.date1}>
            <p>June 2019 - present</p>
          </div>
          <div className = {classes.main1}>
            <p>Front-End Developer (Self-taught)</p>
          </div>
          <div className = {classes.employerName1}>
            <h2>Binary Group Services @Binary.com</h2>
          </div>
          <div className = {classes.date2}>
            <p>February 2019 - June 2019</p>
          </div>
          <div className = {classes.main2}>
            <p>Minijob - Financial Analyst</p>
            <ul>
            <li>Financial projections for licence renewal, new approvals, and extension of scope of services.</li>
            <li>Preparation of annual report (drafting of text and coordination with graphic designers).</li>
            </ul>
          </div>
          <div className = {classes.date3}>
            <p>July 2017 - January 2019</p>
          </div>
          <div className = {classes.main3}>
            <p>Selbstständig Freiberufler</p>
          </div>
          <div className = {classes.date4}>
            <p>May 2017 - July 2017</p>
          </div>
          <div className = {classes.main4}>
            <p>Relocation to Munich, Germany</p>
          </div>
          <div className = {classes.date5}>
            <p>March 2015 - May 2017</p>
          </div>
          <div className = {classes.main5}>
            <p>Senior Financial Analyst</p>
          </div>
          <div className = {classes.date6}>
            <p>April 2012 - April 2014</p>
          </div>
          <div className = {classes.main6}>
          <p>Manager</p>
          <p>Large Regional Investment Bank (October 2012 - April 2013)</p>
            <p>My third project is again a bank.</p>
              <ul>
              <li></li>
              </ul>
          <p>National oil and gas company (December 2011 to September 2012)</p>
            <p>My second project involved supporting the Finance Shared Services Accounts Receivable workstream to develop a finance shared services target operating model. My roles and responsibilities include:</p>
              <ul>
              <li>Conducting client interviews and documentation of services provided by Accounts Receivable Sub-department;</li>
              <li>Documentation of processes and procedures of Accounts Receivable Sub-department;</li>
              <li>Identification of shared processes and procedures of Accounts Receivable Sub-department to be transferred to Finance Shared Services Centre;</li>
              <li>Support the deployment of Record-to-Report workstream of Finance Shared Services Centre; and</li>
              <li>Others</li>
              </ul>
          </div>
          <div className = {classes.employerName2}>
            <h2>Career Break</h2>
          </div>
          <div className = {classes.employerName3}>
            <h2>Accenture (April 2010 - April 2014)</h2>
          </div>
          <div className = {classes.date7}>
            <p>April 2010 - March 2012</p>
          </div>
          <div className = {classes.main7}>
            <p>Consultant</p>
            <p>My first assignment was to support a growth transformation program for a large Malaysian Bank. My roles and responsibilities include:</p>
            <ul>
            <li>Preparation of business case and monitoring of financial results (revenue and profit);</li>
            <li>Preparation of powerpoint presentations;</li>
            <li>Project management; and</li>
            <li>Others.</li>
            </ul>
          </div>
          <div className = {classes.employerName4}>
            <h2>PricewaterhouseCoopers (January 2005 - April 2010)</h2>
            <p>I joined the workforce as an External Audit Associate in PricewaterhouseCoopers (Kuala Lumpur office). My roles and responsibilities include:</p>
            <ul>
            <li>Lead and manage audit fieldwork in accordance with IFRS for listed and private companies;</li>
            <li>Review of IFRS accounting policies in annual reports / financial statements;</li>
            <li>Understanding, evaluation and validation of internal controls;</li>
            <li>Review of financial statement for sign off;</li>
            <li>Review of internal controls and drafting of internal control report; and</li>
            <li>Others.</li>
            </ul>
          </div>
          <div className = {classes.date8}>
            <p>January 2009 - April 2010</p>
          </div>
          <div className = {classes.main8}>
            <p>Assistant Manager</p>
          </div>
          <div className = {classes.date9}>
            <p>January 2007 - December 2008</p>
          </div>
          <div className = {classes.main9}>
            <p>Senior Associate</p>
          </div>
          <div className = {classes.date10}>
            <p>January 2005 - December 2006</p>
          </div>
          <div className = {classes.main10}>
            <p>Associate</p>
          </div>

          <div className = {classNames(classes.academic, classes.border)}>
            <h3>Academic</h3>
          </div>
          <div className = {classNames(classes.icon6, classes.iconStyle)}>
            <FontAwesomeIcon icon={ faPencilAlt }/>
          </div>
          <div className = {classes.title}>
            <h4>Test</h4>
          </div>
          <div className = {classNames(classes.icon7, classes.iconStyle)}>
            <FontAwesomeIcon icon={ faCogs }/>
          </div>
          <div className = {classes.skill}>
            <h4>Test</h4>
          </div>
          <div className = {classes.starRating}>
            <FontAwesomeIcon
              icon={ faStar }
              color="#6DB65B" />
            <FontAwesomeIcon
              icon={ faStar }
              color="#6DB65B" />
            <FontAwesomeIcon
              icon={ faStar }
              color="#6DB65B" />
            <FontAwesomeIcon
              icon={ faStar }
              color="#000000" />
            <FontAwesomeIcon
              icon={ faStar }
              color="#000000" />

          </div>
        </div>
      );
  }

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
