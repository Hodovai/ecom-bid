import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
     
    const {showSearch,setShowSearch} = useContext(ShopContext)
    const [token, setToken] = useState(true)
    const navigate = useNavigate();
    

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        
        <Link to='/'><img  src={assets.logo} alt="logo"  className='w-36'/></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
       
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=> setShowSearch(true)} src={assets.search_icon}  className='w-5 cursor-pointer' alt="search" />

            <div className='group relative'>
                <Link to='/login'> <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
               <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap2 w-36 px5 bg-slate-100 text-gray-500 rounded'>
                        <p onClick={()=> navigate('/my-profile')}  className='cursor-pointer hover:text-black'>My Profile</p>
                       <p onClick={() => navigate('orders')} className ='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={() => setToken(false)}   className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px]  bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden  bg-white transition-all ${visible ? 'w-full' : 'w-0'} `}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=> setVisible(false)} to='/'><p  className='py-2 pl-6 border '>HOME</p></NavLink>  
                   <NavLink onClick={()=> setVisible(false)}  to='/collection'><p  className='py-2 pl-6 border  '>COLLECTION</p></NavLink>
                  <NavLink onClick={()=> setVisible(false)}  to='/about'><p  className='py-2 pl-6 border  '>ABOUT</p></NavLink>
                   <NavLink onClick={()=> setVisible(false)}  to='/contact'><p  className='py-2 pl-6 border  '>CONTACT</p></NavLink>
               

            </div>
        </div>
    </div>
  )
}

export default Navbar