import React from 'react';
import { FaStar } from 'react-icons/fa';
import user1 from '../assets/testimonials/user1.png';
import user2 from '../assets/testimonials/user2.png';
import property1 from '../assets/testimonial1.jpg';
import property2 from '../assets/img2.png';
import property3 from '../assets/img3.png';
import property4 from '../assets/img4.png';
import { FaCheck } from 'react-icons/fa';


const testimonials = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 bg-white py-16 xl:pt-28">
      {/* Container */}

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-20 mb-16 rounded-2xl">
        {/* left side */}
        <div className='flex items-start justify-between flex-col gap-10'>
          <h2 className="h2">Customer Feedback and Experience</h2>

          <div className="flex flex-col gap-1 bg-white p-2 rounded ring-1 ring-slate-900/5">
            <div className='flex text-secondary gap-2'>
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />

              <FaStar className="text-yellow-500 " />

              <FaStar className="text-yellow-500 " />
              <FaStar  />
            </div>

            <div className='medium-14'>
              Showingh 1-2 out of <b>2k reviews</b>
            </div>
          </div>
        </div>

        {/* right side  */}

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
          {/* Testimonials card */}

          <div className=' rounded-lg p-4 bg-white ring-1 ring-slate-900/5'>
            <div className="flexBetween ">
              <div className='flexCenter gap-x-2'><img src={user1} alt="userImg" height={44} width={44} className=" rounded-full" />
              <h5 className="bold-14">john</h5>
              </div>
              <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-x5 font-semibold">
                <FaCheck/>
                Verified
              </div>
            </div>

            <hr  className='h-[1px] w-full my-2'/>

            <div className='flex gap-x-1 text-secondary mt-5 mb-1 text-x5'>

            <FaStar className="text-yellow-500 " />       
            <FaStar className="text-yellow-500 " />       
            <FaStar className="text-yellow-500 " />       
            <FaStar className="text-yellow-500 " />       
            <FaStar className="text-yellow-500 " />       

            </div>

            <h4 className="h4">High Quality</h4>

            <p>"As a first-time homebuyer, I was completely overwhelmed. This platform made the process so much easier by providing clear floor plans, neighborhood safety ratings, and direct access to honest agents. I found my dream home in less than a month!"
— john., <i> Verified Buyer</i>  </p>

            <div className='flex gap-x-1 mt-5'>


              <img src={property1} alt="propertyImg" height={44} width={44} className="rounded aspect-square object-cover" />

              
              <img src={property2} alt="propertyImg" height={44} width={44} className="rounded aspect-square object-cover" />
            </div>
          </div>
         


            {/* Testimonials card */}
          <div className=' rounded-lg p-4 bg-white ring-1 ring-slate-900/5'>
            <div className="flexBetween ">
              <div className='flexCenter gap-x-2'><img src={user2} alt="userImg" height={44} width={44} className=" rounded-full" />
              <h5 className="bold-14">jane</h5>
              </div>
              <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-x5 font-semibold">
                <FaCheck/>
                Verified
              </div>
            </div>

            <hr  className='h-[1px] w-full my-2'/>

            <div className='flex gap-x-1   mt-5 mb-1 text-x5'>

            <FaStar className="text-yellow-500 "/>       
            <FaStar className="text-yellow-500 "  />       
            <FaStar className="text-yellow-500 " />       
            <FaStar className="text-yellow-500 "/>       
            <FaStar className="text-yellow-500 " />       

            </div>

            <h4 className="h4">Modern Design</h4>

            <p>"The most transparent selling experience I've ever had. No hidden fees, no shady calls—just serious buyers. The 'Verified Seller' process was simple and definitely helped build trust with the person who eventually bought our condo."
— jane.,  <i>Verified Buyer</i> </p>

            <div className='flex gap-x-1 mt-5'>


              <img src={property3} alt="propertyImg" height={44} width={44} className="rounded aspect-square object-cover" />

              
              <img src={property4} alt="propertyImg" height={44} width={44} className="rounded aspect-square object-cover" />
            </div>
          </div>
         
                   
        </div>
      </div>
    </section>
  );
};

export default testimonials;
