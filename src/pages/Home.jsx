// Home.jsx
import React from 'react';
import heroImage from '../assets/heroimg.gif';

const Home = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="mb-4 sm:mb-0 ml-10 md:ml-2 mr-10 md:mr-2">
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mt-10 md:mt-20">
          Welcome to <span className="text-red">G</span>
          <span className="text-blue">D</span>
          <span className="text-green">S</span>
          <span className="text-yellow">C</span> <span className="text-blue">M</span>
          <span className="text-red">S</span>
          <span className="text-green">C</span>
          <span className="text-yellow">W</span> 
          <span className="text-blue">!</span>
        </h1>
        <br />
        <p className="text-gray-68 font-semibold">At <span className="text-blue font-semibold">G</span>
        <span className="text-red font-semibold">O</span>
        <span className="text-yellow font-semibold">O</span>
        <span className="text-blue font-semibold">G</span>
        <span className="text-green font-semibold">L</span>
        <span className="text-red font-semibold">E</span> Developer Student Clubs MSCW, we're a passionate university-based community committed to empowering our students with the latest tools and technologies offered by <span className="text-blue font-semibold">G</span>
        <span className="text-red font-semibold">O</span>
        <span className="text-yellow font-semibold">O</span>
        <span className="text-blue font-semibold">G</span>
        <span className="text-green font-semibold">L</span>
        <span className="text-red font-semibold">E.</span> 
        <br /> <br />
        Our mission is simple: foster peer-to-peer learning and turn knowledge into practical expertise. With a core focus on <span className="text-blue font-semibold">"Learn,</span>
        <span className="text-green font-semibold">Connect</span> <span className="text-yellow font-semibold">and</span> <span className="text-red font-semibold">Grow"</span> we invite you to join us on a journey of exploration, collaboration, and innovation.
      </p>
      <button
          onClick={() => { window.location.href = "https://gdsc.community.dev/mata-sundri-college-for-women-delhi/"; }}
          className="bg-gradient-to-b font-semibold from-red to-yellow text-white rounded-md px-4 py-2 mt-14 flex items-center"
        >
          Join Us
          <span className="ml-2 font-bold">&gt;</span>
        </button>
    </div>
    <div className="hidden sm:block">
      <img
        src={heroImage}
        alt="Hero Image"
        className="w-full h-auto mt-6"
      />
    </div>
  </div>
  );
};

export default Home;
