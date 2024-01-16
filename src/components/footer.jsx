import React from 'react';
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
    <footer className="bg-black p-8 text-white fixed bottom-0 w-full">
      <div className="lg:flex">
        {/* First Column: Logo to Subscribe Button */}
        <div className="lg:w-1/2 mb-4">
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
            <a href="#" className="text-white text-xl font-semibold mb-2 ml-8">Home</a>
            <a href="#" className="text-white text-xl font-semibold mb-2 ml-8">Events</a>
            <a href="#" className="text-white text-xl font-semibold mb-2 ml-8">Team</a>
            <a href="#" className="text-white text-xl font-semibold ml-8">Contact Us</a>
          </div>

          {/* Email Subscription Form */}
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="mr-2 ml-8 px-4 py-2 bg-white text-gray-500 text-base rounded-lg"
              style={{ width: '300px', height: '40px' }}
            />
            <button
              className="bg-red text-white font-bold px-4 py-2 text-base rounded-lg"
              style={{ width: '100px', height: '40px' }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Second Column: Social Media Icons to Address */}
        <div className="lg:w-1/2">
          {/* Social Media Icons */}
          <div className="flex mb-8 mt-6 ml-8">
            <img src={Youtube} alt="YouTube" className="mr-4" style={{ width: '30px', height: '30px' }} />
            <img src={Instagram} alt="Instagram" className="mr-4" style={{ width: '30px', height: '30px' }} />
            <img src={Linkedin} alt="LinkedIn" className="mr-4" style={{ width: '30px', height: '30px' }} />
            <img src={Twitter} alt="Twitter" style={{ width: '30px', height: '30px' }} />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mb-4 ">
            {/* Phone Icon and Number */}
            <div className="flex items-center mb-4 ml-4">
              <img src={Phone} alt="Twitter" style={{ width: '30px', height: '30px' }} />
              <p className="text-white text-xl ml-4">+91 8810565359</p>
            </div>

            {/* Email Icon and Address */}
            <div className="flex items-center mb-4 ml-4">
              <img src={Email} alt="Twitter" style={{ width: '30px', height: '20px' }} />
              <p className="text-white text-xl ml-4">gdsc.mscw@du.ac.in</p>
            </div>

            {/* Location Icon and Address */}
            <div className="flex items-center ml-4">
              <img src={Location} alt="Twitter" style={{ width: '30px', height: '30px' }} />
              <p className="text-white text-xl ml-4">
                Mata Sundari Ln, Mata Sundri Women's College, Mandi House, New Delhi, Delhi 110002
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
