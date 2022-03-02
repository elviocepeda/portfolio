import React from 'react';
import '../stylesheets/NavBar.scss'
import { HeaderNavBar } from './HeaderNavBar';
import { HeaderNavBurguer } from './HeaderNavBurguer';
import Logo from './Logo'

export default function NavBar() {

  return (
    <div className='header-container'>
      <span className='header-logo'><Logo /></span>
      
      <HeaderNavBar />
      <HeaderNavBurguer />

    </div>
  )
}
