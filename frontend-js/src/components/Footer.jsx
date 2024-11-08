import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus laudantium dolore distinctio commodi numquam, veritatis, natus inventore sint doloribus eaque laboriosam sequi quos voluptatibus aliquam ex repudiandae, deleniti similique?
            </p>
        </div>

        <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                      </ul>
             </div>

             <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>Email: info@example.com</li>
                    
                </ul>
             </div>

             <div>
            <hr />
            <p className='py-5 text-sm text-center'>
            ��  2024 Example- All rights reserved.
            </p>
        </div>

    </div>
    </div>
  )
}

export default Footer