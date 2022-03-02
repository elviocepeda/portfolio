import React from 'react';
import '../stylesheets/Location.scss'

export const Location = ({setShowMap}) => {

  const closeModal = (e) => {
    setShowMap(false)
  }
  
  return (
    <div className='location'>
      <div className='location-map'>
        <button className='location-btn-close' onClick={closeModal}>X</button>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102984.14361946216!2d-61.190239363002725!3d-36.23331148965989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe33e81a03975%3A0xc572a4f0cf8cade0!2sSan%20Carlos%20de%20Bolivar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1644008707571!5m2!1ses!2sar" title="Google Maps" width="600" height="450" border="0" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}
