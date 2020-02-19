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
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

function App (props) {
    return (
      <div classNames= "container-fluid">
        <div classNames= "row">
          <div className = {classes.gridContainer}>
            <div className = {classes.name}>
              <h1>Giselle Su Seau Yean</h1>
              <p>Your Front-end Developer - Aspires to make your website pixel perfect!</p>
            </div>
            <div className = {classes.contact}>
              <Contact
              email="seauyeansu@gmail.com"
              mobile="01763447xxxx"
              linkedin="linkedin.com/in/seauyean/"
              github="github.com/seauyeansu"
              />
            </div>
          </div>
        </div>

        <div classNames= "row">
          <div className = {classes.gridContainer}>
            <div className = {classNames(classes.study, classes.border)}>
              <h3>Self-Study</h3>
            </div>
            <div className = {classNames(classes.icon5, classes.vl5)}>
            <span className = "fa-layers fa-fw">
              <FontAwesomeIcon
              icon= { faCircle }
              color = "#113f67"
              size = "2x"
              aria-hidden = "true"/>
              <FontAwesomeIcon icon= { faPencilAlt } inverse transform = "right-6"/>
            </span>
            <div classNames= "vl5"></div>
            </div>
            <div className = {classes.date1}>
              <p>June 2019 - present</p>
            </div>
            <div className = {classes.main1}>
              <p>Front-End Developer (Self-taught)</p>
              <p>Learning sources include:</p>
              <ul>
                <li>w3schools.com;</li>
                <li>Udemy - "React - The Complete Guide (incl Hooks, React Router, Redux)";</li>
                <li>tylermcginnis.com; and</li>
                <li>others.</li>
              </ul>
              <p>My projects:</p>
              <ol>
                <li><a href = "https://seauyeansu.github.io/CV/dist/">My Resume</a></li>
                <ul>
                  <li>Developed using Javasript and React Framework.</li>
                </ul>
                <li><a href = "http://direct.mekmek.ml/">New Parent Registration Form</a></li>
                <ul>
                  <li>Simple client-side form for new parents to register developed using Javascript, React Framework, Python, Flask and MySQL.</li>
                  <li>Created form UI</li>
                  <li>Created MySQL database</li>
                  <li>Created return message upon clicking 'Submit'</li>
                  <li>Created database table output file in .csv format</li>
                </ul>
                <li><a href = "https://seauyeansu.github.io/flight-seat-selector/public/">Flight-seat-selector</a></li>
                <ul>
                  <li>Simple UI of flight seat available for selection developed using Javascript and React-Redux.</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>


        <div classNames= "row">
          <div className = {classes.gridContainer}>
            <div className = {classNames(classes.employment, classes.border)}>
              <h3>Employment</h3>
            </div>
            <div className = {classNames(classes.icon6, classes.vl6)}>
            <span className = "fa-layers fa-fw">
              <FontAwesomeIcon
              icon= { faCircle }
              color = "#113f67"
              size = "2x"
              aria-hidden = "true" />
              <FontAwesomeIcon icon= { faBriefcase } inverse transform = "right-6"/>
            </span>
            <div classNames= "vl6"></div>
            </div>
            <div className = {classes.employerName1}>
              <h2>Binary Group Services @Binary.com (March 2015 - June 2019)</h2>
              <p>My roles and responsibilities include:</p>
              <ul>
                <li>Financial projections for licence renewal, new approvals, and extension of scope of services;</li>
                <li>Preparation of annual report (drafting of text and coordination with graphic designers);</li>
                <li>Drafting and preparation of prospectus, product disclosure statement, information memorandum, pillar 3 report, and other regulatory disclosures;</li>
                <li>Monthly financial analysis and update to shareholders; and</li>
                <li>Others.</li>
                </ul>
              </div>
            <div className = {classes.date2}>
              <p>February 2019 - June 2019</p>
            </div>
            <div className = {classes.main2}>
              <p>Minijob - Financial Analyst</p>
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
            <div className = {classes.employerName2}>
              <h2>Career Break (April 2014 - March 2015)</h2>
            </div>
            <div className = {classes.employerName3}>
              <h2>Accenture, Kuala Lumpur, Malaysia (April 2010 - April 2014)</h2>
            </div>
            <div className = {classes.date6}>
              <p>April 2012 - April 2014</p>
              </div>
            <div className = {classes.main6}>
              <p>Manager</p>
              <p><u>Large Regional Investment Bank (October 2012 - April 2013)</u></p>
              <p>My third project was to support the post-merger integration of two client investment banks. My roles and responsibilities include:</p>
                <ul>
                <li>Lead the post-merger integration of Finance workstream;</li>
                <li>Plan and execute post-merger integration activities;</li>
                <li>Develop target operating model (people, process, and technology) for the merged Finance department;</li>
                <li>Prepare merged Finace department to be ready for Legal Day One and Customer Day One; and</li>
                <li>Others.</li>
                </ul>
              <p><u>National oil and gas company (December 2011 to September 2012)</u></p>
              <p>My second project was to support the Finance Shared Services Accounts Receivable workstream to develop a finance shared services target operating model. My roles and responsibilities include:</p>
                <ul>
                <li>Conducting client interviews and documentation of services provided by Accounts Receivable Sub-department;</li>
                <li>Documentation of processes and procedures of Accounts Receivable Sub-department;</li>
                <li>Identification of shared processes and procedures of Accounts Receivable Sub-department to be transferred to Finance Shared Services Centre;</li>
                <li>Support the deployment of Record-to-Report workstream of Finance Shared Services Centre; and</li>
                <li>Others</li>
                </ul>
            </div>
            <div className = {classes.date7}>
              <p>April 2010 - March 2012</p>
            </div>
            <div className = {classes.main7}>
              <p>Consultant</p>
              <p>My first project in Accenture was to support a growth transformation program for a large Malaysian Bank. My roles and responsibilities include:</p>
              <ul>
              <li>Preparation of business case and monitoring of financial results (revenue and profit);</li>
              <li>Preparation of powerpoint presentations;</li>
              <li>Project management; and</li>
              <li>Others.</li>
              </ul>
            </div>
            <div className = {classes.employerName4}>
              <h2>PricewaterhouseCoopers, Kuala Lumpur, Malaysia (January 2005 - April 2010)</h2>
              <p>After completing my studies, I landed my first job in PricewaterhouseCoopers (Kuala Lumpur, Malaysia office) as an External Audit Associate. My roles and responsibilities include:</p>
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
          </div>
        </div>

        <div classNames= "row">
          <div className = {classes.gridContainer}>
            <div className = {classNames(classes.academic, classes.border)}>
              <h3>Education and Skills</h3>
            </div>
            <div className = {classNames(classes.icon7, classes.vl7)}>
            <span className = "fa-layers fa-fw">
            <FontAwesomeIcon
              icon = { faCircle }
              color = "#113f67"
              size = "2x"/>
            <FontAwesomeIcon icon= { faGraduationCap } inverse transform = "right-6"/>
            </span>
            <div classNames= "vl7"></div>
            </div>
            <div className = {classes.title}>
              <h4>Sunway University College, Malaysia</h4>
              <ul>
              <li>Association Chartered Certified Accountants</li>
              <li>Institute of Chartered Accountants in England and Wales</li>
              </ul>
              <h4>Oxford Brookes University</h4>
              <ul>
              <li>Bachelor of Science - BS, Applied Accounting, First classNamesHonours</li>
              </ul>
            </div>
            <div className = {classNames(classes.icon8, classes.vl8)}>
            <span className = "fa-layers fa-fw">
            <FontAwesomeIcon
              icon= { faCircle }
              color = "#113f67"
              size = "2x"/>
            <FontAwesomeIcon icon={ faCogs } inverse transform = "right-6"/>
            </span>
            <div classNames= "vl8"></div>
            </div>

            <div className = {classes.skill}>
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Javascript</td>
                    <td>
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                    </td>
                  </tr>
                  <tr>
                    <td>HTML</td>
                    <td>
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                    </td>
                  </tr>
                  <tr>
                    <td>CSS and SASS</td>
                    <td>
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                    </td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td>
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                    </td>
                  </tr>
                  <tr>
                    <td>Web Development</td>
                    <td>
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#a2a8d3" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                      <FontAwesomeIcon
                        icon={ faStar }
                        color="#e7eaf6" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div classNames = "row">
        <div className = {classes.gridContainer}>
          <div className = {classes.footer}>
            <a href="javascript:window.print();return false;">
            <FontAwesomeIcon
              icon={ faPrint }
              color="#113f67" alt="Click here to print this page"/></a>
            </div>
          </div>
        </div>
      </div>
      );
  }

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
