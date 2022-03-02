import React, { useState } from 'react';
import { IconsBar } from '../components/IconsBar';
import { ImageSection } from '../components/ImageSection';
import NavBar from '../components/NavBar';
import { PolygonBg } from '../components/PolygonBg';
import { SvgText } from '../components/SvgText';
import '../stylesheets/ContactPage.scss'

const initialForm = {
  name: "",
  email: "",
  textarea: ""
};

export default function ContactPage() {

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.textarea.trim()) {
      console.log("Datos incompletos");
      return;
    }

    e.target.reset()
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  return (
    <div className='contact'>

      <div className='section-1'>
        <NavBar />
        <div className='contact-container'>
          <div className='form-container'>
            <h4>Contactame!</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <textarea
                rows="4" cols="50"
                name="textarea"
                onChange={handleChange}
              />
              <input type="submit" value="Enviar" />
            </form>
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
