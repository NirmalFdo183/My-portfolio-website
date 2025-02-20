import React from 'react';
import NavBar from '../components/NavBar';
import { Hero } from '/Users/nirmalfernando/Myprojects/My-portfolio-website-1/portfolio/components/Hero.tsx';
import { About } from '../pages/About';
import { Resume } from '../pages/Resume';
import { Services } from '../pages/Services';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

export const Home = () => {
  return (
    <div>
      <NavBar/>
      <section id="Home"><Hero /></section> 
      <section id="About"><About /></section>
      <section id="Resume"><Resume /></section>
      <section id="Services"><Services /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"><Projects /></section>
      <section id="Contact"><Contact /></section>
      
      
    </div>
  );
};

/*<section id="Home"><Hero /></section> 
<section id="About"><About /></section>
      <section id="Resume"><Resume /></section>
      <section id="Services"><Services /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"><Projects /></section>
      <section id="Contact"><Contact /></section> */
/* import React from 'react'
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
 */