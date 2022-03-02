import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarData } from '../components/NavBarData'
import '../stylesheets/NavBurguerMenu.scss'

export const NavBurguerMenu = () => {
  return (
    <nav className='navburguer-menu'>
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
}
