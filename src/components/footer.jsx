import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gdsc logo.ico';
import Instagram from '../assets/instagram.png';
import Youtube from '../assets/youtube.png';
import Email from '../assets/email.png';
import Twitter from '../assets/twitter.png';
import Linkedin from '../assets/linkedin.png';
import Phone from '../assets/phone.png';
import Location from '../assets/location.png';


const Footer = () => {
  return (
    <footer className="bg-black p-0 text-white bottom-0 w-full justify-around">
      <div className="lg:flex p-8">
        {/* First Column: Logo to Subscribe Button */}
        <div className="lg:w-1/2">
          <div className="flex items-center mb-4">
            {/* Google Developer Student Clubs Logo */}
            <img src={logo} alt="GDSC Logo" className="mr-2" />

            {/* College Name */}
            <div>
              <p className="md:text-2xl text-xl font-semibold">Google Developers Student Club</p>
              <p className="text-xs font-semibold">Mata Sundri College for Women</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col mb-4">
            <Link to="/" className="text-white hover:text-red text-xl font-semibold mb-2 ml-8">Home</Link>
            <Link to="/events" className="text-white hover:text-blue text-xl font-semibold mb-2 ml-8">Events</Link>
            <Link to="/team" className="text-white hover:text-yellow text-xl font-semibold mb-2 ml-8">Team</Link>
            <Link to="/contact" className="text-white hover:text-green text-xl font-semibold ml-8">Contact Us</Link>
          </div>

          {/* Email Subscription Form */}
          <div className="flex flex-col lg:flex-row mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="ml-8 px-4 py-2 bg-white text-gray-500 text-base rounded-lg mb-6 lg:mb-0"
              style={{ maxWidth: '300px', height: '40px' }}
            />
            <button
              className="bg-red text-white font-bold px-4 py-2 text-base rounded-lg ml-8"
              style={{ width: '100px', height: '40px' }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Second Column: Social Media Icons to Address */}
        <div className="lg:w-1/2 p-4">
          {/* Social Media Icons */}
          <div className="flex mb-8 mt-2 ml-4">
            <a href="https://www.youtube.com/@GDSC-MSCW" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} alt="YouTube" className="mr-4" style={{ width: '30px', height: '30px' }} />
            </a>
  
            <a href="https://www.instagram.com/gdsc_mscw/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="mr-4" style={{ width: '30px', height: '30px' }} />
            </a>
  
            <a href="https://www.linkedin.com/company/google-developer-student-clubs-mata-sundri-college-for-women/mycompany/" target="_blank" rel="noopener noreferrer">
             <img src={Linkedin} alt="LinkedIn" className="mr-4" style={{ width: '30px', height: '30px' }} />
            </a>
  
            <a href="https://twitter.com/GDSC_MSCW" target="_blank" rel="noopener noreferrer">
             <img src={Twitter} alt="Twitter" style={{ width: '30px', height: '30px' }} />
            </a>
          </div>


          {/* Contact Information */}
          <div className="flex flex-col mb-4 ">
            {/* Phone Icon and Number */}
            <div className="flex items-center mb-4 ml-4">
              <img src={Phone} alt="Twitter" style={{ width: '30px', height: '30px' }} />
              <p className="text-white hover:text-blue text-sm md:text-xl ml-4">+91 8810565359</p>
            </div>

            {/* Email Icon and Address */}
            <div className="flex items-center mb-4 ml-4">
             <img src={Email} alt="Email" style={{ width: '30px', height: '20px' }} />
             <a href="mailto:gdsc.mscw@du.ac.in">
             <p className="text-white hover:text-blue text-sm md:text-xl ml-4">gdsc.mscw@du.ac.in</p>
             </a>
             </div>


            {/* Location Icon and Address */}
            <div className="flex items-center ml-4">
             <img src={Location} alt="Twitter" style={{ width: '30px', height: '30px' }} />
               <a
                 href="https://www.google.com/maps/place/Mata+Sundri+College+for+Women(University+Of+Delhi)/@28.6335639,77.2315474,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd2ed90f27c3:0x1ae96f860fc49d6e!8m2!3d28.6335639!4d77.2341223!16s%2Fm%2F0cpdwg1?hl=en&entry=ttu"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-blue text-sm md:text-xl ml-4"
               >
               Mata Sundari Ln, Mata Sundri Women's College, Mandi House, New Delhi, Delhi 110002
               </a>
             </div>            
          </div>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="text-center text-white font-semibold text-sm bg-gray-400 p-2 mt-4 w-full">
        &copy; {new Date().getFullYear()} All right reserved GDSC MSCW
      </div>
    </footer>
  );
};

export default Footer;
