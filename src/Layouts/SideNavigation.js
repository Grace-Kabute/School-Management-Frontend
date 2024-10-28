import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Components/Icon';

const SideNavigation = () => {

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link 
            to="/dashboard" >
            <Icon name="home" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/students">
            <Icon name="student" />
            Students
          </Link>
        </li>
        <li>
          <Link 
            to="/subjects">
            <Icon name="subject" />
            Subjects
          </Link>
        </li>
        <li>
          <Link 
            to="/teachers">
            <Icon name="teacher" />
            Teachers
          </Link>
        </li>
        <li>
          <Link 
            to="/performance">
            <Icon name="performance" />
            Performance
          </Link>
        </li>
        <li>
          <Link 
            to="/attendance" >
            <Icon name="attendance" />
            Attendance
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;