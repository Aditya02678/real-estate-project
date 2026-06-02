import React from 'react';
import { Link } from 'react-router-dom';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4 copy.jpg';
import client5 from '../assets/client5 copy.jpg';
import client6 from '../assets/client6 copy.jpg';
import bg from '../assets/bg.png';
import { FaStar } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-6 lg:px-12 pl-8 bg-cover bg-no-repeat h-[722px] w-full  "
      style={{ backgroundImage: `url(${bg})`}}
    >
      <div className='relative top-32 xs:top-48'>
        <h1 className='h1 capitalize max-w-[41rem]' >Redefining Luxury Real Estate</h1>
        <p className= 'my-5 max-w-[33rem]'>
          Discover premium properties curated for refined living. Explore
          exclusive listings, elegant spaces, and seamless experiences designed
          for those who expect nothing less than extraordinary.
        </p>

        {/* Button */}

        <div className='inline-flex items-center justify-center gap-4 bg-white rounded ring-1 ring-slate-900/5 mt-4'>
          <div className='text-center regular-14 leading-tight pl-5 cursor-default'>
            <p className='regular-14'>
              <span className='uppercase font-bold'>10%  off</span>On All Properties
            </p>
          </div>
          <Link to="/listing" className='btn-dark !rounded tl-none !rounded-lg'>Explore</Link>
        </div>
        <div className='flex flex-col gap-4 mt-10 mb-4 max-w-64'>
          <div className='flex relative'>
            {/* Client image */}

            <img
              src={client1}
              alt="Client 1"
              className="h-[46px] border-2 border-white shadow-sm rounded-full"
            />
            <img
              src={client2}
              alt="Client 2"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-8"
            />
            <img
              src={client3}
              alt="Client 3"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-16"
            />

           

            <div className='h-[46px] w-[46px] border-2 border-white shadow-sm bg-slate-500/70 text-white absolute left-24 rounded-full flexCenter text-x5 font-sbold'>20k+ </div>
          </div>

          <div className='h5 !font-semibold max-w-52'>They knew what they wanted. We made it happen.</div>
        </div>

        <div className='flex flex-col'>
          <div className='flex gap-2 text-yellow-500 text-x5'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='bold-14 sm:bold-16 relative top-1'>
            18k <span className='regular-14 sm:regular-16'>The Gold Standard in Client Satisfaction.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
