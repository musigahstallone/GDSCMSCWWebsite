// Home.jsx
import React from 'react';
import heroImage from '../assets/heroimg.gif';
import Events from '../assets/events.png';
import Buttons from '../components/Buttons';
import Img from '../assets/img.png';
import Linesbg from '../assets/Group 207.svg';
import studyJams from '../assets/studyJams.gif';
import Team from '../assets/team.gif';

const Home = () => {
  return (
    <div className="mx-0">
      {/* Hero section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40">
        <div className="mb-4 sm:mb-0 ml-10 md:ml-8 mr-10 md:mr-4">
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
          <span className="text-green font-semibold">Connect</span> <span className="text-yellow font-semibold">and</span> <span className="text-red font-semibold">Grow"</span> we invite you to join us on a journey of exploration, collaboration, and innovation. </p>
         <button
          onClick={() => { window.open("https://gdsc.community.dev/mata-sundri-college-for-women-delhi/", "_blank"); }}
          className="bg-gradient-to-b font-semibold from-red to-yellow text-white rounded-md px-4 py-2 mt-14 flex items-center"
         >
          Join Us
            <span className="ml-2 font-bold">&gt;</span>
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            src={heroImage}
            alt="Hero Image"
            className="w-[90%] h-[80%] mt-6"
          />
        </div>
      </div>
      
      {/*Image section */}
      <div className="container mx-auto my-10 w-[30%] text-center">
        <img src={Img} alt="myImg" />
      </div>
      
      {/* SVG background and cards section */}
      <div className="my-10 mt-40 text-center">
        <img
        src={Linesbg}
        alt="Background Lines"
        className="w-full"
        />
      </div>

      {/* Our events section */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 mx-auto md:gap-8 mt-40">
        <div className="sm:col-span-1">
          <img
            src={Events} 
            alt="Our Events"
            className="w-[80%] md:w-[90%] lg:w-full mx-10"
          />
        </div>
        <div className="sm:col-span-1">
          <div className="mb-4 text-center mt-8"> 
          <h2 className="text-2xl md:text-3xl font-bold mb-10 inline-block text-black mx-auto">
           Our  <span class="bg-gradient-to-b from-red to-yellow text-transparent bg-clip-text">Events</span>
          </h2>         
            <p className="text-gray-68 ml-10 md:ml-20 mr-10 text-start font-semibold mb-10">
            Explore upcoming events at GDSC MSCW to delve into the fascinating world of technology. Immerse yourself in a community-driven environment that encourages learning, collaboration, and innovation. Stay updated with the latest trends and groundbreaking innovations through our exciting lineup of events.
            </p>
            <Buttons
              text="View Events"
              link="/events"
            />
          </div>
        </div>
      </div>

       {/* Study jams section */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 mx-auto md:gap-10 mb-8 mt-10">
        <div className="sm:col-span-1">
          <div className="mb-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 inline-block text-black mx-auto mt-14 md:mt-40">
           Study <span class="bg-gradient-to-b from-red to-yellow text-transparent bg-clip-text">Jams</span>
          </h2>          
            <p className="text-gray-68 ml-10 md:ml-20 mr-10 text-start font-semibold mb-10">
            Join our vibrant GDSC Study Jams, where learning meets collaboration! Dive into hands-on projects, guided sessions, and interactive workshops exploring cutting-edge Google technologies. Expand your skills, connect with passionate learners, and boost your tech journey with us. 
            </p>
            <Buttons
              text="Know more"
              link="/events"
            />
          </div>
        </div>
        <div className="sm:col-span-1 hidden md:block">
          <img
            src={studyJams} 
            alt="Study Jams"
            className="w-[80%] md:w-[90%] lg:w-full mx-10"
          />
        </div>
      </div>

    {/* Meet the Team section */}
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 mx-auto md:gap-10 mb-8">
    <div className="sm:col-span-1 hidden md:block">
          <img
            src={Team} 
            alt="meet the team"
            className="w-[80%] md:w-[90%] lg:w-full"
          />
        </div>
        <div className="sm:col-span-1">
          <div className="mb-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 inline-block text-black mx-auto mt-14 md:mt-40">
           Meet the <span class="bg-gradient-to-b from-red to-yellow text-transparent bg-clip-text">Team</span>
          </h2>          
            <p className="text-gray-68 ml-10 md:ml-20 mr-10 text-start font-semibold mb-10">
            Dive into the essence of Our Team. A diverse blend of talents and passion, we unite to drive innovation. Meet the individuals sculpting our vision, each contributing a distinctive hue to our collective masterpiece.
            </p>
            <Buttons
              text="Know more"
              link="/team"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;