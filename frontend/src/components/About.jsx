import React from 'react';
import about1 from '../assets/new5.jpg';
import about3 from '../assets/new6.jpg';
import { FaScreenpal, FaUpDown } from 'react-icons/fa6';
import {
  FaEnvelope,
  FaInbox,
  FaUser,
  FaList,
  FaMap,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const About = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-16 xl-:pb-28">
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* Image left side */}

        <div className="flex-1">
          <div className="relative">
            <img src={about1} alt="AboutImage" className="rounded-3xl" height="600px" width="500px" />

            <span className="absolute top-8 left-8 bg-white px-2 rounded-full medium-14">
              Mumbai
            </span>
          </div>
        </div>

        {/* info right side */}

        <div className='flex-1'>
          <h2 className="h2">
            Empowering You To Find Your Dream Home,Effortlessly
          </h2>

          <p>
            Luxury is more than an aesthetic—it’s a seamless experience. We curate India’s most prestigious properties, offering you exclusive access to off-market gems and architectural masterpieces. Our platform eliminates the noise of the traditional market, providing a sophisticated, private gateway to the lifestyle you’ve worked so hard to achieve. Experience real estate refined
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaList className=" text-secondary" />
              <p>Virtual property tours and viewings</p>
            </div>

            <div className="flex gap-3">
              <FaUpDown className=" text-secondary" />
              <p>
                Real-time market price 
              </p>
            </div>

            <div className="flex gap-3">
              <FaMap className=" text-secondary" />
              <p>Interactive floor plans and maps</p>
            </div>

            <div className="flex gap-3">
              <FaMapMarkedAlt className=" text-secondary" />
              <p>Access to off-market properties</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className=" text-secondary" />
              <p>Direct messaging with agents and owners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second container */}

 <div className="flex items-center flex-col lg:flex-row gap-12 mt-36">
        

        {/* info left side */}

        <div className='flex-1'>
          <h2 className="h2">
            Simplifying Your Real Estate Journey Every step of the way
          </h2>

          <p>
            Your dream home is more than just a pin on a map; it’s where your next chapter begins. We’ve reimagined the Indian real estate journey to be as seamless as it is sophisticated. By combining elite local expertise with state-of-the-art AI, we filter out the noise to bring you only the finest opportunities. Whether you are seeking a serene retreat or a vibrant urban sanctuary, our platform puts the power of the market in your hands—making the path to your new front door completely effortless.
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <FaList className=" text-secondary" />
              <p>In-app scheduling for property viewings</p>
            </div>

            <div className="flex gap-3">
              <FaUpDown className=" text-secondary" />
              <p>
                Real-time market price updates              </p>
            </div>

            <div className="flex gap-3">
              <FaInbox className=" text-secondary" />
              <p>User friendly interface for smooth navigation</p>
            </div>

            <div className="flex gap-3">
              <FaUser className=" text-secondary" />
              <p>Detailed agent and realtor profiles</p>
            </div>

            <div className="flex gap-3">
              <FaMapMarkedAlt className=" text-secondary" />
              <p>Access to off-market properties</p>
            </div>
          </div>
        </div>
       {/* Image right side */}

        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={about3} alt="AboutImage" className="rounded-3xl" height="600px" width="500px" />

            <span className="absolute top-8 right-8 bg-white px-2 rounded-full medium-14 ">
              Delhi
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;
