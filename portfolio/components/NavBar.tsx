import { Link, NavLink ,useLocation} from "react-router-dom";
import React,{ useState }from 'react';
const NavBar: React.FC = () => {
  const location = useLocation();
  const isActive = (path:String) => location.pathname === path;
  return (
    <header className="fixed top-0 left-0 w-full bg-black p-4 z-50">
      <nav className="max-w-7xl mx-auto flex  items-center">
        <div className="text-white font-bold text-xl mr-45">
         Nirmal Fernando
        </div>
        <div className="hidden md:flex space-x-12">
        <Link to="/" className={isActive('/') ? 'text-yellow-300' : 'text-white '}>Home</Link>
        <Link to="/about" className={isActive('/about') ? 'text-yellow-300' : 'text-white '}>About</Link>
        <Link to="/resume" className={isActive('/resume') ? 'text-yellow-300' : 'text-white '}>Resume</Link>
        <Link to="/services" className={isActive('/services') ? 'text-yellow-300' : 'text-white'}>Services</Link>
        <Link to="/skills" className={isActive('/skills') ? 'text-yellow-300' : 'text-white'}>Skills</Link>
        <Link to="/projects" className={isActive('/projects') ? 'text-yellow-300' : 'text-white'}>Projects</Link>
        <Link to="/contact" className={isActive('/contact') ? 'text-yellow-300' : 'text-white'}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
