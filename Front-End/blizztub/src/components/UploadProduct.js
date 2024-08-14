import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from './../common/index';
import { toast } from 'react-toastify';



const UploadProduct = ({ onClose }) => {
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: ""
    });

    const [openFullScreenImage, setOpenFullScreenImage] = useState(false)

    const [fullScreenImage, setFullScreenImage] = useState("")

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUploadProduct = async(e) => {
        const file = e.target.files[0];
        const uploadImageCloudinary = await uploadImage(file)
        setData((preve)=>{
            return{
                ...preve,
                productImage : [ ...preve.productImage, uploadImageCloudinary.url]
            }
        })
    };

    const handleDeleteProductImage = async(index) =>{
        console.log("image index",index);

        const newProductImage = [...data.productImage]
        newProductImage.splice(index,1)
        setData((preve)=>{
            return{
                ...preve,
                productImage : [...newProductImage]
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log("data : ",data)
        const response = await fetch(SummaryApi.upload_Product.url,{
            method : SummaryApi.upload_Product.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const responseData = await response.json();
        if(responseData.success){
            toast.success(responseData?.message)
            onClose(true)
        }
        if(responseData.error){
            toast.error(responseData?.message)
        }
    }


    return (
        <div className='fixed w-full h-full z-10 flex justify-between items-center top-0 bottom-0 right-0 left-0 bg-slate-200 bg-opacity-60'>
            <div className='w-full mx-auto bg-white shadow-md p-4 max-w-2xl h-full max-h-[80%] rounded-md overflow-y-auto pb-8'>
                <div className='flex justify-between p-4'>
                    <h2 className='font-bold text-lg'>Upload Product</h2>
                    <div className='w-fit ml-auto text-lg font-bold cursor-pointer hover:text-red-500' onClick={onClose}>
                        <IoCloseSharp />
                    </div>
                </div>

                <form className='grid p-4 gap-2 h-full pb-3 mb-6' onSubmit={handleSubmit}>
                    <label htmlFor='productName'>Product Name :</label>
                    <input type='text' id='productName' placeholder='Enter product name'
                        value={data.productName}
                        name='productName' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md' />

                    <label htmlFor='brandName'>Brand Name :</label>
                    <input type='text' id='brandName' placeholder='Enter brand name'
                        value={data.brandName}
                        name='brandName' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md' required/>

                    <label htmlFor='category'>Category :</label>
                    <select value={data.category} name='category' className='p-2 bg-slate-100 border rounded' onChange={handleOnChange} required>
                        <option value={""}>Select category</option>
                        {productCategory.map((el, index) => {
                            return (
                                <option value={el.value} key={el.value + index}>{el.label}</option>
                            )
                        })}
                    </select>

                    <label htmlFor='productImage' className='mt-3'>Product Image :</label>
                    <label htmlFor='uploadImageInput'>
                    <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center'>

                            <div className='text-slate-500 flex items-center justify-center flex-col gap-2 cursor-pointer'>
                                <span className='text-3xl'><FaCloudUploadAlt /></span>
                                <p className='text-xm'>Upload Product Image</p>
                                <input type='file' id='uploadImageInput' className='hidden cursor-pointer' onChange={handleUploadProduct} />
                            </div>
                    </div>
                    </label>
                    <div className='py-6 flex flex-row gap-3'>
                        {
                            data?.productImage[0] ? (
                                data.productImage.map((el,index)=>{
                                    return(
                                       <div className='relative group bg-slate-400'>
                                            <img src={el} width={75} height={75} 
                                                className='bg-slate-100 border cursor-pointer items-center justify-center' 
                                                alt={el} 
                                                onClick={()=>{setOpenFullScreenImage(true) 
                                                    setFullScreenImage(el)
                                                }}
                                            />
                                            <div className='absolute bottom-0 right-0 p-1 mb-1 mr-1 text-white bg-red-600 rounded-full hidden group-hover:block' onClick={()=> handleDeleteProductImage(index)} >
                                                <MdDelete />

                                            </div>
                                       </div>
                                    )
                                })
                            ) : (
                                <p className='text-red-600 font-normal text-sm pb-4'>*Please Upload Product Image</p>
                            )
                        }
                    
                    </div>
                    <label htmlFor='price'>Price :</label>
                    <input type='number' id='price' placeholder='Enter price'
                        value={data.price}
                        name='price' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md' required/>

                    <label htmlFor='sellingPrice'>Selling Price :</label>
                    <input type='number' id='sellingPrice' placeholder='Enter Selling Price'
                        value={data.sellingPrice}
                        name='sellingPrice' onChange={handleOnChange}
                        className='p-2 bg-slate-100 border py-2 rounded-md' required/>

                    <label htmlFor='description'>Description :</label>
                    <textarea className='h-28 bg-slate-100 border resize-none p-2' placeholder='Enter product description' value={data.description} name='description' id='description' onChange={handleOnChange} typeof='text' required>

                    </textarea>


                    <button className='px-3 bg-purple-600 shadow-md rounded-full py-2 mb-5 text-white hover:bg-purple-800'>
                        Upload Product
                    </button>
                </form>
            </div>

            {/**display image full screen  */}
            {
                openFullScreenImage && (
                    <DisplayImage onClose={()=>setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
                )
            }
        </div>
    )
}

export default UploadProduct
