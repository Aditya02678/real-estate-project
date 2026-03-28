import React from 'react'
import {FaListAlt} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {IoBookmarksOutline,IoTicketOutline} from "react-icons/io5"
import {RiFileList3Line} from "react-icons/ri"

const feature = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 py-18 bg-white'>

      {/* container */}

    <div className='mx-auto max-w-[1440px] px-6 lg:px-12 flexBetween flex-wrap gap-8'>


      <div className='flex items-start gap-x-3'>
    <RiFileList3Line className='text-3xl'/>
    <h4 className='medium-18'>Detailed Listings</h4>


      </div>


    


      
      <div className='flex items-start gap-x-3'>
    <AiOutlineSearch className='text-3xl'/>
    <h4 className='medium-18'>Property Search</h4>


      </div>





      
      <div className='flex items-start gap-x-3'>
    <IoBookmarksOutline className='text-3xl'/>
    <h4 className='medium-18'>Saved Favorites</h4>


      </div>


      
      <div className='flex items-start gap-x-3'>
    <IoTicketOutline className='text-4xl relative bootom-3 ' />
    <h4 className='medium-18'>Book Visits</h4>


      </div>

    </div>



      </section>
  )
}

export default feature