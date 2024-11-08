import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title  text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        
        <img className='w-full md:max-w-[410px]' src={assets.contact_img} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Office</p>
          <p className='text-gray-500'>64709 Willms Station <br />Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Medix</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact