import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";


const UploadProduct = ({onClose}) => {
    const [data, setData] = useState({
        productName : "",
        brandName : "",
        category : "",
        productImage : [],
        description : "",
        price : "",
        sellingPrice : ""

    })
    const [uploadProductImageInput, setUploadProductImageInput] = useState({})
    const handleOnChange = (e) =>{

    }

    const handleUploadProduct = (e) =>{
        const file = e.target.files[0]
        console.log("file", file)
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

            <form className='grid p-4 gap-2 overflow-y-auto h-full pb-3'>
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
                <select value={data.category} className='p-2 bg-slate-100 border rounded'>
                        {
                            productCategory.map((el,index) =>{
                                return(
                                    <option value={el.value} key={el.value+index}>{el.label}</option>
                                )
                            })
                        }
                </select>

                <label htmlFor='productImage' className='mt-3'>Product Image :</label>
                <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center'>
                    <label htmlFor='uploadImageInput'>
                        <div className='text-slate-500 flex items-center justify-center flex-col gap-2'>
                            <span className='text-3xl'><FaCloudUploadAlt /></span>
                            <p className='text-xm'>Upload Product Image</p>
                            <input type='file' id='uploadImageInput' className='hidden' onChange={handleOnChange} />
                        </div>
                    </label>
                </div>
                <div>
                    <img src='' width={80} height={80} className='bg-slate-100 border' />
                </div>

                
            </form>
        </div>
    </div>
  )
}

export default UploadProduct