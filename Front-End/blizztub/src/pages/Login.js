import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from './../common';
import { toast } from 'react-toastify';
import context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const[data, setData] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()
    const { fetchUserDetails } = useContext(context)




    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((preve) =>{
            return{
                ...preve,
                [name] : value      
             }
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/home")
            fetchUserDetails()

        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }


    }
    console.log("data login",data)
  return (
    <section id='login'>
        <div className='mx-auto container p-4 mt-6'>
            <div className='bg-white p-2 w-full max-w-md mx-auto border-lg'>
                <div className='w-20 h-20 mx-auto py-4'>
                    <img src={loginIcons} alt='login-icons' />
                </div>
                <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid p-3 mt-4'>
                        <label className='py-2'>Email :</label>
                        <div className='bg-slate-200 p-2 rounded-lg'>
                            <input 
                                type='email' 
                                placeholder='enter email here' 
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div className='grid p-3'>
                        <label className='py-2'>Password :</label>
                        <div className='bg-slate-200 p-2 flex rounded-lg'>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name='password'
                                placeholder='enter password here' 
                                onChange={handleOnChange}
                                value={data.password}
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
                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-800 text-xs'>
                                Forgot Password?
                            </Link>
                    </div>
                    <button className='bg-red-600 hover:bg-red-800 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 align-right transition-all mx-auto mt-4 mb-4 block'>Login</button>
                </form>
                <div className='flex'>
                <p className='my-3 p-2'>Don't have account? <Link to={"/sign-up"} className='text-red-600 hover:text-red-800 hover:underline'>Sign up</Link> </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Login