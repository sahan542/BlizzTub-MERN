import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoCloseSharp } from "react-icons/io5";
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const ChangeUserRole = ({name,email,role,userId,onClose,callFunc}) => {
    const [userRole, setUserRole] = useState(role)
    const handleOnChangeSelect = (e)=>{
        setUserRole(e.target.value)
        console.log(e.target.value)
    }
    const updateUserRole = async() =>{
        const fetchResponse = await fetch(SummaryApi.update_User.url, {
            method : SummaryApi.update_User.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                userId : userId,
                role : userRole
            }
            )
        })

        const responseData = await fetchResponse.json();

        if(responseData.success){
            toast.success(responseData.message);
            onClose()
            callFunc()
        }
        
        if(responseData.error){
            toast.error(responseData.message);
        }

        console.log("role updated   -",responseData)
    }
  return (
    <div className='fixed w-full h-full z-10 flex justify-between items-center top-0 bottom-0 right-0 left-0 bg-slate-200 bg-opacity-60'>
        <div className='w-full mx-auto bg-white shadow-md p-4 max-w-sm'>
            <button className='block ml-auto cursor-pointer' onClick={onClose}>
                <IoCloseSharp />
            </button>
            <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <div className='flex items-center justify-between my-4'>
                <p>Role</p>
                <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}> 
                    {
                        Object.values(ROLE).map(el =>{
                            return(
                                <option value={el} key={el}>{el}</option>
                            )
                        })
                    }
                </select>
            </div>
            <button className='w-fit mx-auto block border py-1 px-3 rounded-full bg-green-400 text-white hover:bg-green-800' onClick={updateUserRole}>
            Change Role
            </button>
        </div>

    </div>
  )
}

export default ChangeUserRole