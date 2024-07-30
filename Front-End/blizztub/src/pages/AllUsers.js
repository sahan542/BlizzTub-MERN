import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { BiEditAlt } from "react-icons/bi";
import ChangeUserRole from '../components/ChangeUserRole';


const AllUsers = () => {

  const [allUser, setAllUser] = useState([])

  const fetchAllUsers = async() =>{
    const fetchData = await fetch(SummaryApi.all_users.url, {
      method : SummaryApi.all_users.method,
      credentials : "include"
    })
    const dataResponse = await fetchData.json()

    if(dataResponse.success){
      setAllUser(dataResponse.data)
    }
    if(dataResponse.error){
      toast.error(dataResponse.message)
    }
    console.log(dataResponse);
    
  }


  useEffect(()=>{
    fetchAllUsers()
  }, [])

  return (
    <div className='bg-white pb-4'>
      <table className='w-full userTable'>
        <thead>
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Actions</th>
        </thead>
        <tbody className=''>
          {
            allUser.map((el,index) => {
              return(
                <tr>
                    <td>{index+1}</td>
                    <td>{el?.name}</td>
                    <td>{el?.email}</td>
                    <td>{el?.role}</td>
                    <td>{moment(el?.createdAt).format('LL')}</td>
                    <td>
                        <button className='bg-green-200 p-2 rounded-full cursor-pointer hover:bg-green-400 hover:text-white'>
                          <BiEditAlt />
                        </button>
                    </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <ChangeUserRole/>
    </div>
  )
}

export default AllUsers