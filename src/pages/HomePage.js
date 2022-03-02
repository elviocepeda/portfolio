import React from 'react'
import NavBar from '../components/NavBar'
import '../stylesheets/HomePage.scss'
import { IconsBar } from '../components/IconsBar'
import { SvgText } from '../components/SvgText'
import { Technologies } from '../components/Technologies'
import { PolygonBg } from '../components/PolygonBg'
import { ImageSection } from '../components/ImageSection'
import Avatar from '../images/me.jpg'



export default function HomePage() {

  

  return (
    <div className='home'>

      <div className='section-1'>
        <NavBar />
        <div className='home-container'>
          <div className='home-info'>
            <div className='home-text'>
              <div className='responsive-container-avatar'>
                <div className='avatar'>
                  <img className='avatar-img' src={Avatar} alt='Elvio Cepeda'></img>
                </div>
              </div>
              <h4>Hola! soy Elvio</h4>
              <p>..buscando experiencias en desarrollo frontend.</p>
            </div>
            <Technologies />
          </div>
            <SvgText />
            <PolygonBg />
        </div>
      </div>

      <div className='section-2'>
        <ImageSection />
        <IconsBar />
      </div>
    </div>
  )
}
