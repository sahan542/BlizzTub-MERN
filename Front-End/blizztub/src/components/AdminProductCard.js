import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import AdminEditProduct from './AdminEditProduct';
import displayDollerCurrency from '../../../../Back-End/helpers/displayCurrency';


const AdminProductCard = ({data,fetchdata}) => {
    const [editProduct, setEditProduct] = useState(false)


    console.log("data - ", data);

  return (
        <div className='bg-white p-4 rounded-lg'>
            <div className='w-40'>
                <img src={data?.productImage[0]} width={120} height={120} alt='' className='w-fit mx-auto' />
                <h1>{data?.productName}</h1>

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