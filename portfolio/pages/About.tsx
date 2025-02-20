import React from 'react'
import NavBar from '/Users/nirmalfernando/Myprojects/My-portfolio-website-1/portfolio/components/NavBar.tsx'

export const About = () => {
  return (
    <>
      <NavBar/>
      <section className='bg-black text-white min-h-screen flex  '>
                  
        <div className='ml-40 lg:mt-20' ><img src="/img/myimg.png" alt="Nirmal Fernando" className="w-full max-w-l  mx-auto lg:max-w-xl lg:mx-0" /></div>
        <div className="profile-container p-6 lg:mt-30">
          <span className='text-5xl font-bold lg:mb-4'>About Me</span>
          <p className='text-xl lg:mb-4 lg:mt-10'><strong>Name:</strong> Clark Thompson</p>
          <p><strong>Date of Birth:</strong> January 01, 1987</p>
          <p><strong>Address:</strong> San Francisco, CA 97987 USA</p>
          <p><strong>Zip Code:</strong> 1000</p>
          <p><strong>Email:</strong> <a href="mailto:clarkthomp@gmail.com" className="text-blue-600">clarkthomp@gmail.com</a></p>
          <p><strong>Phone:</strong> +1-2234-5678-9-0</p>
          <p><strong>Projects Completed:</strong> 120</p>
    </div>
        
                      
      
                
      </section>
    </>
  )
}
