import React from 'react'
import NavBar from '../components/NavBar'
import { SvgText } from '../components/SvgText'
import { IconsBar } from '../components/IconsBar'
import { ImageSection } from '../components/ImageSection'
import { PolygonBg } from '../components/PolygonBg'
import '../stylesheets/AboutPage.scss'
import Avatar from '../images/me.jpg'

export default function AboutPage() {
  return (
    <div className='about'>

      <div className='section-1'>
        <NavBar />
        <div className='about-container'>
          <div className='responsive-container-avatar'>
            <div className='avatar'>
              <img className='avatar-img' src={Avatar} alt='Elvio Cepeda'></img>
            </div>
          </div>
          <div className='about-info'>
            <p className='about-paragraph'>
              Me llamo <span>Elvio Cepeda</span>, tengo 33 años y resido en la provincia de Buenos Aires, 
              técnico personal y profesional en informática. A principios de 2021, 
              comencé mi formación de manera autodidacta en el mundo del desarrollo web y actualmente, 
              con la misma motivación que en el inicio, 
              continúo por el camino hacia el crecimiento personal constante 
              dando lugar al aprendizaje de nuevas tecnologias y profundizando aquellas con las que ya trabajo.
            </p>
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
