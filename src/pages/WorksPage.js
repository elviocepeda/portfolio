import React from 'react';
import NavBar from '../components/NavBar';
import { IconsBar } from '../components/IconsBar';
import { ImageSection } from '../components/ImageSection';
import { PolygonBg } from '../components/PolygonBg';
import { SvgText } from '../components/SvgText';
import '../stylesheets/WorksPage.scss'

export default function WorksPage() {
  return (
    <div className='works'>

      <div className='section-1'>
        <NavBar />
        <div className='works-container'>
          <div className='works-cards'>
            <span>work 1</span>
            <span>work 2</span>
            <span>work 3</span>
            <span>work 4</span>
            <span>work 5</span>
            <span>work 6</span>
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
