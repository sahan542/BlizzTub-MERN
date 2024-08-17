import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import AdminEditProduct from './AdminEditProduct';
import displayDollerCurrency from '../helpers/displayCurrency';


const AdminProductCard = ({data,fetchdata}) => {
    const [editProduct, setEditProduct] = useState(false)


    console.log("data - ", data);

  return (
        <div className='bg-white p-4 rounded-lg'>
            <div className='w-40'>
              <div className='w-32 h-32 flex justify-center items-center'>
                <img src={data?.productImage[0]} width={120} height={120} alt='' className='mx-auto object-fill h-full' />
              </div>

                <h1 className='text-ellipsis line-clamp-2'>{data?.productName}</h1>

                <div>
                    <p className='font-semibold'>
                      {displayDollerCurrency(data.sellingPrice)}
                    </p>
                    <div className='w-fit ml-auto p-2 bg-green-400 text-white hover:bg-green-600 rounded-full cursor-pointer' 
                        onClick={()=>setEditProduct(true)} >
                        <FaEdit />
                    </div>
                </div>
            </div>



{/* Edit Product Model */}
{editProduct && (
        <AdminEditProduct 
          productData={data} 
          onClose={() => setEditProduct(false)} 
          fetchData={fetchdata}
        />
      )}

        </div>
  )
}

export default AdminProductCard