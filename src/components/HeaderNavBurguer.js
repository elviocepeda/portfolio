import React, {useState} from 'react'
import '../stylesheets/HeaderNavBurguer.scss'
import { NavBurguerMenu } from './NavBurguerMenu'

export const HeaderNavBurguer = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleToggleMenu = () => {
    setIsClicked(!isClicked)
  }
  
  return (
    <>
      <div className='header-burguer' onClick={handleToggleMenu}>
        <div className={isClicked? 'topline-clicked' : 'topline'}></div>
        <div className={isClicked? 'midline-clicked' : 'midline'}></div>
        <div className={isClicked? 'bottomline-clicked' : 'bottomline'}></div>
      </div>
      {isClicked? <NavBurguerMenu /> : null}
    </>

  )
}
