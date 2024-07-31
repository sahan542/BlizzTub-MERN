import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";

const UploadProduct = ({onClose}) => {
    const [data, setData] = useState({
        productName : "",
        brandName : "",
        category : "",
        productImage : "",
        description : "",
        price : "",
        sellingPrice : ""

    })
    const handleOnChange = (e) =>{

    }
  return (
    <div className='fixed w-full h-full z-10 flex justify-between items-center top-0 bottom-0 right-0 left-0 bg-slate-200 bg-opacity-60'>
        <div className='w-full mx-auto bg-white shadow-md p-4 max-w-2xl h-full max-h-[80%] rounded-md'>
            <div className='flex justify-between p-4'>
                <h2 className='font-bold text-lg'>Upload Product</h2>
                <div className='w-fit ml-auto text-lg font-bold cursor-pointer hover:text-red-500' onClick={onClose}>
                    <IoCloseSharp />
                </div>
            </div>

            <form className='grid p-4 gap-2'>
                <label htmlFor='productName' >Product Name :</label>
                <input type='text' id='productName' placeholder='enter product name' 
                        value={data.productName} 
                        name='productName' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md'  />

                <label htmlFor='brandName' >Brand Name :</label>
                <input type='text' id='brandName' placeholder='enter brand name' 
                        value={data.brandName} 
                        name='brandName' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md'  />

                <label htmlFor='category' >Category :</label>
                <input type='text' id='category' placeholder='enter category' 
                        value={data.category} 
                        name='category' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md'  />

                <label htmlFor='productName' >Product Name :</label>
                <input type='text' id='productName' placeholder='enter product name' 
                        value={data.productName} 
                        name='productName' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md'  />

                <label htmlFor='productName' >Product Name :</label>
                <input type='text' id='productName' placeholder='enter product name' 
                        value={data.productName} 
                        name='productName' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md'  />
                
            </form>
        </div>
    </div>
  )
}

export default UploadProduct