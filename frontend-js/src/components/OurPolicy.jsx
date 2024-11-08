import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'> Easy Exchange Policy</p>
            <p className='text-gray-400'> We offer a simple and hassle-free exchange policy.</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'> 7 Days Return Policy</p>
            <p className='text-gray-400'>We offer a 7-day return policy for all our products.</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>
                Dedicated Customer Support
            </p>
            <p className='text-gray-400'>
                Our customer support team is available 24/7 to assist you with any queries or concerns.
            </p>
        </div>

    </div>
  )
}

export default OurPolicy