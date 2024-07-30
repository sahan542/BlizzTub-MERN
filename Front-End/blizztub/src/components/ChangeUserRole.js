import React from 'react'
import ROLE from '../common/role'

const ChangeUserRole = () => {
  return (
    <div className='fixed w-full h-full z-10 flex justify-between items-center top-0 bottom-0 right-0 left-0'>
        <div className='w-full mx-auto bg-white shadow-md p-4 max-w-sm'>
            <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>
            <p>Name : Amit Prathiraja</p>
            <p>Email : amit@gmail.com</p>
            <div className='flex items-center justify-between my-4'>
                <p>Role</p>
                <select className='border px-4 py-1'>
                    {
                        Object.values(ROLE).map(el =>{
                            return(
                                <option value={el} key={el}>{el}</option>
                            )
                        })
                    }
                </select>
            </div>
            <button className='w-fit mx-auto block border py-1 px-3 rounded-full bg-green-400 text-white hover:bg-green-800 '>
            Change Role
            </button>
        </div>

    </div>
  )
}

export default ChangeUserRole