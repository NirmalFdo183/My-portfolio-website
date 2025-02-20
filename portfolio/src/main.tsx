import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from '/Users/nirmalfernando/Myprojects/My-portfolio-website-1/portfolio/pages/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>  {/* Directly rendering Home as a single-page app */}
  </StrictMode>
);



/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {  createBrowserRouter, RouterProvider } from "react-router-dom";


import { Home } from '../pages/Home.tsx';
import {About} from '../pages/About.tsx'
import {Resume} from '../pages/Resume.tsx'
import {Services} from '../pages/Services.tsx'
import {Skills} from '../pages/Skills.tsx'
import {Projects} from '../pages/Projects.tsx'
import { Contact } from '../pages/Contact.tsx';


const router=createBrowserRouter(
 [
   {
     path:'/',
     element:<Home/>
   },
   {
     path:'/about',
     element:<About/>
   },
   {
     path:'/resume',
     element:<Resume/>
   },
   {
     path:'/services',
     element:<Services/>
   },
   {
     path:'/skills',
     element:<Skills/>
   },
   {
     path:'/projects',
     element:<Projects/>
   },
   {
     path:'/contact',
     element:<Contact/>
   }
 ]
)


createRoot(document.getElementById('root')!).render(
 <StrictMode>
   <RouterProvider router={router}/>


 </StrictMode>
)
 */
