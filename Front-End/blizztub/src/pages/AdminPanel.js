import React from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
  return (
    <div className='min-h-[calc(100vh-120px)] flex py-1 md:flex hidden'>
        <aside className='h-full w-full max-w-60 customShadow'>
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
                <p className='pb-3'>{user?.role}</p>
            </div>

            {/***navigation part */}
            <div>
                <nav className='grid p-4 pt-9'>
                    <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-200'>All Users</Link>
                    <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-200'>Products</Link>
                    <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-200'>All Users</Link>
                    <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-200'>All Users</Link>
                </nav>
            </div>

        </aside>
        <main className='bg-slate-200 w-full h-full p-2 min-h-[calc(100vh-120px)]'>
                    <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel