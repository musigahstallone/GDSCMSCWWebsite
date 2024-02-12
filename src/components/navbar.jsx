import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/gdsc logo.ico';
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <nav className={`flex items-center justify-between p-4 shadow-md ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Mobile Navigation - Hamburger Icon */}
      <div className="lg:hidden">
        <button
          onClick={handleMobileNavToggle}
          className={`text-gray-68 focus:outline-none focus:border-none ${theme === 'dark' ? 'text-white' : 'text-gray-68'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Logo and Heading */}
      <div className="flex items-center">
        <img src={logo} alt="Google Developers Student Club" className="mr-2" />
        <div>
          <p className={`font-semibold md:text-xl lg:text-2xl text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-68'}`}>Google Developers Student Club</p>
          <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-68'} font-bold text-xs`}>Mata Sundri College for Women</p>
        </div>
      </div>


      {/* Mobile Navigation Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-1/2 shadow-md bg-${theme === 'dark' ? 'black' : 'white'} bg-opacity-90 z-50 ${isMobileNavOpen ? 'block' : 'hidden'}`}>  <div className="flex justify-end p-4">
    <button
      onClick={closeMobileNav}
      className={`text-black text-bold focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>

        {/* Mobile Navigation Menu */}
  <div className="flex flex-col p-4">
    <Link to="/" className="py-2" onClick={closeMobileNav}>Home</Link>
    <Link to="/events" className="py-2" onClick={closeMobileNav}>Events</Link>
    <Link to="/team" className="py-2" onClick={closeMobileNav}>Team</Link>
    <Link to="/contact" className="py-2" onClick={closeMobileNav}>Contact Us</Link>
  </div>
</div>

        {/* Right Side - Navigation Sections (Not visible in mobile view) */}
      <div className="flex items-center  text-2xl lg:flex hidden">
        <Link to="/" className={`mr-5 ${theme === 'dark' ? 'text-white' : 'text-gray-68'} hover:text-red hover:border-b-4 hover:border-red transition duration-300 ease-in-out`}>Home</Link>
        <Link to="/events" className={`mr-5 ${theme === 'dark' ? 'text-white' : 'text-gray-68'} hover:text-blue hover:border-b-4 hover:border-blue transition duration-300 ease-in-out`}>Events</Link>
        <Link to="/team" className={`mr-5 ${theme === 'dark' ? 'text-white' : 'text-gray-68'} hover:text-yellow hover:border-b-4 hover:border-yellow transition duration-300 ease-in-out`}>Team</Link>
        <Link to="/contact" className={`mr-5 ${theme === 'dark' ? 'text-white' : 'text-gray-68'} hover:text-green hover:border-b-4 hover:border-green transition duration-300 ease-in-out`}>Contact Us</Link>
      </div>

      {/* Light/Dark Toggle Button*/}
      <div className="flex items-center  text-2xl">
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input type="checkbox" onChange={handleToggle} />
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;

