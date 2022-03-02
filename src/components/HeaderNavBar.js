import React from 'react';
import { Link } from 'react-router-dom'
import { NavBarData } from '../components/NavBarData'
import '../stylesheets/HeaderNavBar.scss'

export const HeaderNavBar = () => {
  return (
    <nav className='header-navbar'>
        <ul>
          {NavBarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} style={item.style}>
                  <span>{item.text}</span>
                </Link>
              </li>
            )
        })}
      </ul>
    </nav>
  )
};
