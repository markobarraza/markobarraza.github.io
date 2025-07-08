import React from 'react'
import '../sass/pages/Home.scss'
import Perfil from './Perfil'
import Laboral from './Laboral'
import Educacion from './Educacion'
import Tecnologias from './Tecnologias'

const Home = () => {
  return (
    <div className='home_container'>
      <Perfil/>
      <Laboral/>
      <div className='home_inner-container'>
        <Educacion/>
        <Tecnologias/>
      </div>
    </div>
  )
}

export default Home
