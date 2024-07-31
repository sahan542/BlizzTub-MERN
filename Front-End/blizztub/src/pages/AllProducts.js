import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploaProduct] = useState(false);


  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Products</h2>
        <button className='border-2 py-2 px-4 rounded-full bg-green-500 text-white shadow-md hover:bg-purple-700 transition'
                onClick={() => setOpenUploaProduct(true)}
                >Upload Product</button>
      </div>

      {/*upload product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={() =>setOpenUploaProduct(false)} />
        )
      }


    </div>
  )
}

export default AllProducts