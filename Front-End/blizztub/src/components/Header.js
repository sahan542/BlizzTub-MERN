import React from 'react'
import Logo from './Logo'
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";





const Header = () => {
  return (
    <header className='h-16 shadow-md'>
        <div className='h-full container mx-auto flex items-center px-6 justify-between'>
          <div className=''>
              <Logo w={90} h={60}/>
          </div>
          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
              <input type='text' placeholder='search product here..' className='w-full outline-none'/>
              <div className='text-lg min-w-[50px] h-9 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <IoSearch/>
              </div>
          </div>

          <div className='flex items-center gap-4'>
              <div className='text-3xl cursor-pointer'>
                  <FaRegCircleUser/>
              </div>
              <div className='text-3xl relative'>
                <span><TiShoppingCart/></span>
                <div className='bg-red-300 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p className='text-sm'>0</p>
                </div>
              </div>

                <div>
                    <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>LogIn</button>
                </div>
              </div>
          </div>





    </header>
  )
}

export default Header