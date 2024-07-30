import React from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
  return (
    <div className='min-h-[calc(100vh-120px)] flex py-1'>
        <aside className='bg-red-400 min-h-full w-full max-w-60 customShadow'>
            <div className='h-32 flex justify-center items-center flex-col pt-24'>
                <div className='text-5xl cursor-pointer relative flex justify-center'>
                    {
                        user?.profilepic ? (
                          <img src={user?.profilepic} alt={user?.name} className='w-20 h-20 rounded-full' title={user?.name} />
                        ) : (
                          <FaRegCircleUser/>
                        )
                    }
                </div>
                <p className='capitalize text-lg font-semibold pt-3'>
                    {user?.name}
                </p>
                <p>{user?.role}</p>
            </div>

        </aside>
        <main className='bg-blue-600 w-full'>
                    Main
        </main>
    </div>
  )
}

export default AdminPanel