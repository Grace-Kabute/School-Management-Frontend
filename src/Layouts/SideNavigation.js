import React from 'react'
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
  return (
      <nav className="sidebar">
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/students">Students</NavLink></li>
          <li><NavLink to="/subjects">Subjects</NavLink></li>
          <li><NavLink to="/performance">Performance</NavLink></li>
          <li><NavLink to="/attendance">Attendance</NavLink></li>
        </ul>
      </nav>
  )
}

export default SideNavigation