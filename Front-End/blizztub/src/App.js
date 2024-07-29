import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import context from './context';
import userSlice, { setUserDetails } from './store/userSlice';



function App() {
    const dispatch = useDispatch()

    const fetchUserDetails = async() =>{
        const dataResponse = await fetch(SummaryApi.current_user.url, {
            method : SummaryApi.current_user.method,
            credentials : 'include'
        })
        
        const dataApi = await dataResponse.json()
        if(dataApi.success){
            dispatch(setUserDetails(dataApi.data))
        }
        console.log("data-user",dataResponse)
    }
    useEffect(() =>{
        /*user details */
        fetchUserDetails();

    },[])


    return (
    <>
        <context.Provider value={{
            fetchUserDetails   //user detail fetch
        }}>
         <ToastContainer position='top-center' />

            <Header/>
                <main className='min-h-[calc(100vh-100px)]'>
                    <Outlet/>
                </main>
            <Footer/>



        
        
    
            </context.Provider>
    </>
    )

}
export default App