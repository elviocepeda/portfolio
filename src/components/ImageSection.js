import React from 'react';
import image1 from '../images/me.jpg'
import '../stylesheets/ImageSection.scss'

export const ImageSection = () => {
  return (
    <div className='image-section'>
      <img className='image-profile' src={image1} alt='Imagen prueba'></img>
    </div>
  )
}
