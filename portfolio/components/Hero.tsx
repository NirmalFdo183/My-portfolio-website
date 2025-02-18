import React from 'react'
import { Link} from "react-router-dom";

export const Hero = () => {
  return (
    <>
        <section className='bg-black text-white min-h-screen flex items-center justify-center'>
            <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="text-yellow-500 text-lg font-semibold uppercase">
                    Hello!
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold mt-2">
                    I'm <span className="text-yellow-500">Nirmal Fernando</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-2">
                    An Undergraduate Student
                    </p>
                    <p className="text-sm text-gray-200 mt-2">
                    (BSc) in Computer Science <br/>
                    University of Jaffna, Sri Lanka 
                    </p>
                    

                    <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                    <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600">
                        <Link to="/contact">Hire Me</Link>
                    </button>
                    <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black">
                        <Link to="/projects">My Works</Link>
                    </button>
                    </div>
                </div>
                <div><img src="/img/myimg.png" alt="Nirmal Fernando" className="w-full max-w-sm mx-auto lg:mt-17 lg:max-w-xl lg:mx-0" /></div>
                

            </div>
      </section>
    </>
  )
}
