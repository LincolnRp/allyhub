import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import About from './../../components/About/About'
import Form from './../../components/Form/Form'
function Home() {


  return (

  <div>
        <Header/>
        <Carousel/>
        <About/>
        <Form/>
        <Footer/>
  </div>
  )
}

export default Home