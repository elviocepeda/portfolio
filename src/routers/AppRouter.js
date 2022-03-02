import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import WorksPage from '../pages/WorksPage'
import ContactPage from '../pages/ContactPage'
import Error404 from '../pages/Error404'

export default function AppRouter() {
  return (
    <>
      <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/works' element={<WorksPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>    
      </Router>
    </>
  ) 
}
