import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import newlogo from "../assets/newlogo.png"


const Footer = () => {
  return (
    <footer>
      <div className='mx-auto max-w-[1440px] px-6 lg:px-12 flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-gradient-to-r from-yellow-100 to-neutral-50'>
        <div>
          <h4 className='h4'>We are always here to help</h4>
          <p>Your journey is our priority. Whether you have a question about a specific listing, need help with a virtual tour.</p>
        </div>
        <div className='flexStart flex-wrap gap-8'>
          <div className='flexCenter gap-x-6'>
            <FaLocationDot />
            <div>
              <h5 className='h5'>Location</h5>
              <p>Gurugram, Delhi NCR - 122002</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaPhone />
            <div>
              <h5 className='h5'>Phone</h5>
              <p>+91 98564 78965</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaMailBulk />
            <div>
              <h5 className='h5'>Email Support</h5>
              <p>support@neev.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1440px] px-6 lg:px-12 flex items-start justify-between flex-wrap gap-12 mt-12'>
        {/* logo - Left side */}
        <div className='flex flex-col max-w-sm gap-y-5'>
          {/* logo */}
          <div>
            <Link to={"/"}>
              <img src={newlogo} alt="" className="h-25" />
            </Link>
          </div>
          <p>Neev is India’s premier AI-powered real estate platform. We are dedicated to bringing transparency, trust, and technology to your home-buying experience.</p>
        </div>
        <div className='flexStart gap-7 xl:gap-x-36 flex-wrap'>
          <ul>
            <h4 className='h4 mb-3'>Customer Service</h4>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Help center</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Payment Plans</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Contact</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Booking Status</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Agent Feedback</a></li>
          </ul>
          <ul>
            <h4 className='h4 mb-3'>Legal</h4>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Privacy Policy</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cookie settings</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Terms & conditions</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cancelation</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Licensing & RERA</a></li>
          </ul>
          <ul>
            <h4 className='h4 mb-3'>Company</h4>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Our teams</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Sustainability</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Press</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Jobs</a></li>
            <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Newsletter</a></li>
          </ul>
        </div>
      </div>
      {/* copyrights */}
      <p className='mx-auto max-w-[1440px] px-6 lg:px-12 medium-14 py-2 px-8 rounded flexBetween mt-6 bg-gradient-to-r from-yellow-100 to-neutral-50'><span>2026 Neev</span><span>All rights reserved</span></p>

    </footer>
  )
}

export default Footer