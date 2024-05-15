import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const[data, setData] = useState({
      name : "",
      email : "",
      password : "",
      confirmpassword : "",
      profilepic : ""
  })

  const navigate = useNavigate()

  const handleOnChange = (e) => {
      const { name, value } = e.target
      setData((preve) =>{
          return{
              ...preve,
              [name] : value      
           }
      })
  }

  const handleLoadPic = async(e) =>{
      const file = e.target.files[0]

      const imagePic = await imageTobase64(file)
      setData((preve)=>{
        return{
            ...preve,
            profilepic : imagePic
        }
      })
  }
  const handleSubmit = async(e)=>{
      e.preventDefault()

      if(data.password === data.confirmpassword){
        const dataResponse = await fetch(SummaryApi.signUp.url,{
            method : SummaryApi.signUp.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
          const dataApi = await dataResponse.json()

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }
          if(dataApi.error){
            toast.error(dataApi.message)
          }
          console.log("data",dataApi)

         
      }
      else{
        console.log("Please check confirm password & password")
      }



      }

      
  return (
    <section id='signup'>
    <div className='mx-auto container p-4 mt-6'>
        <div className='bg-white p-2 w-full max-w-md mx-auto border-lg pt-4'>
            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                    <img src={data.profilepic || loginIcons} alt='login-icons' />
                </div>
                <form>
                  <label>
                  <div className='text-xs bg-opacity-75 mt-3 bg-slate-200 pt-1 pb-2 text-center absolute bottom-0 w-full cursor-pointer'>
                      Upload Photo
                  </div>
                    <input type='file' className='hidden' onChange={handleLoadPic} />
                  </label>

                </form>

            </div>
            <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid p-2 mt-2'>
                    <label className='py-2'>Name :</label>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <input 
                            type='text' 
                            placeholder='enter Name here' 
                            name='name'
                            value={data.name}
                            onChange={handleOnChange}
                            required
                            className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='grid p-2'>
                    <label className='py-2'>Email :</label>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <input 
                            type='email' 
                            placeholder='enter email here' 
                            name='email'
                            value={data.email}
                            onChange={handleOnChange}
                            required
                            className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='grid p-2'>
                    <label className='py-2'>Password :</label>
                    <div className='bg-slate-200 p-2 flex rounded-lg'>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name='password'
                            placeholder='enter password here' 
                            onChange={handleOnChange}
                            value={data.password}
                            required
                            className='w-full h-full outline-none bg-transparent' />    
                        <div className='cursor-pointer text-xl' 
                             onClick={()=>setShowPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showPassword ? (
                                        <FaEyeSlash/>
                                    ):
                                    (
                                       <FaEye/>
                                    )
                                }
                                
                            </span>
                        </div>
                    </div>

                </div>
                
                <div className='grid p-3'>
                    <label className='py-2'>Confirm Password :</label>
                    <div className='bg-slate-200 p-2 flex rounded-lg'>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            name='confirmpassword'
                            placeholder='Re-enter the password here' 
                            onChange={handleOnChange}
                            value={data.confirmpassword}
                            required
                            className='w-full h-full outline-none bg-transparent' />    
                        <div className='cursor-pointer text-xl' 
                             onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showConfirmPassword ? (
                                        <FaEyeSlash/>
                                    ):
                                    (
                                       <FaEye/>
                                    )
                                }
                                
                            </span>
                        </div>
                    </div>

                </div>
                <button className='bg-red-600 hover:bg-red-800 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 align-right transition-all mx-auto mt-4 mb-4 block'>Signup</button>
            </form>
            <div className='flex'>
            <p className='my-3 p-2'>Already have an account? <Link to={"/login"} className='text-red-600 hover:text-red-800 hover:underline'>LogIn</Link> </p>
            </div>
        </div>

    </div>
</section>
  )
}

export default SignUp