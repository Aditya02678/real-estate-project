import React from 'react'

import Hero from "../components/Hero"
import Feature from '../components/feature'
import  Achievements  from "../components/Achievements";
import Properties from '../components/Properties'
import About from '../components/about'
import Testimonials from '../components/testimonials'

const Home = () => {
  return (
    <main className=" mx-auto max-w-[1440px]  bg-gradient-to-r from-yellow-100 to-neutral-50">
      <Hero/>
    <Feature/>
    <Achievements/>
    <Properties/>
    <About/>
    <Testimonials/>

     </main>
  )
}

export default Home