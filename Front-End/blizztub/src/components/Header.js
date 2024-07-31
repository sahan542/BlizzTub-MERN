import React, { useState } from 'react'
import Logo from './Logo'
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';





const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state?.user?.user)
  //console.log("user header",user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false);

  const handleLogout = async() => {
    try{
      const fetchData = await fetch(SummaryApi.logout_user.url,{
        method : SummaryApi.logout_user.method,
        credentials : 'include'
      })
      const data = await fetchData.json()
  
      if(data.success){
        toast.success(data.message)
        dispatch(setUserDetails(null))
        navigate("/home")
      }
      if(data.error){
        toast.error(data.error)
      }
  
    }
    catch(error){
      toast.error("logout failed !")
    }
    
  }
  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='h-full container mx-auto flex items-center px-6 justify-between'>
          <div className=''>
              <Link to={"/"}>
                  <Logo w={90} h={60}/>
              </Link>
          </div>
          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
              <input type='text' placeholder='search product here..' className='w-full outline-none'/>
              <div className='text-lg min-w-[50px] h-9 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <IoSearch/>
              </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='relative group flex justify-center'>
                {
                  user?._id && (
                    <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
                    {
                      user?.profilepic ? (
                        <img src={user?.profilepic} alt={user?.name} className='w-10 h-10 rounded-full' title={user?.name} />
                      ) : (
                        <FaRegCircleUser/>
                      )
                    }
              </div>
                  )
                }
               
                 {
                  menuDisplay && (
                    <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded-md'>
                      <nav>
                        {
                          user?.role === ROLE.ADMIN && (
                            <Link to={"/admin-panel"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2'>Admin Panel</Link>
                          )
                        }
                        
                      </nav>
                    </div>

                  )
                 }
            </div>

              <div className='text-3xl relative'>
                <span><TiShoppingCart/></span>
                <div className='bg-red-700 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p className='text-sm'>0</p>
                </div>
              </div>

                <div>
                  {
                    user?._id ?(
                      <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700' onClick={handleLogout}>Logout</button>
                    ): (
                      <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>LogIn</Link>
                    )
                  }
                    
                </div>
              </div>
          </div>





    </header>
  )
}

export default Header