import NavBar from '/Users/nirmalfernando/Myprojects/My-portfolio-website/portfolio/components/NavBar.tsx'
import CountUp from "react-countup"

export const About = () => {
  return (
    <>
      <NavBar/>
      <section>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="max-w-4xl grid md:grid-cols-2 p-6">
            <div className="flex justify-center">
              <img
                src="../img/myimg.png"
                alt="Profile"
                className="object-cover w-80 h-auto scale-150"/>
            </div>
            <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-400 mb-6">
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia.
            </p>

            <ul className="space-y-2">
              <li><strong>Name:</strong> Nirmal Fernando</li>
              <li><strong>Date of Birth:</strong> January 10, 2003</li>
              <li><strong>Address:</strong> Chilaw Puttalam Sri Lanka </li>
              <li><strong>Zip Code:</strong> 61000</li>
              <li><strong>Email:</strong> fernandonirmal345@gmail.com</li>
              <li><strong>Phone:</strong> not available at the moment</li>
            </ul>

            <div className="mt-6 flex items-center space-x-4">
              <span className="text-yellow-400 font-bold text-lg"><CountUp end={4} duration={8} /></span>
              <span>Project complete</span>
            </div>

            <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
              Download CV
            </button>
           </div>



























          </div>
        </div>
                   
      
                
      </section>
    </>
  )
}
