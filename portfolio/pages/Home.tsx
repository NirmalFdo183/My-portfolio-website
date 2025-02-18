import React from 'react'
import NavBar from '/Users/nirmalfernando/Myprojects/My-portfolio-website-1/portfolio/components/NavBar.tsx'
import {Hero} from '/Users/nirmalfernando/Myprojects/My-portfolio-website-1/portfolio/components/Hero.tsx'
import {About} from '/Users/nirmalfernando/Myprojects/My-portfolio-website-1/portfolio/pages/About.tsx'

export const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
    
    </div>
  )
}
