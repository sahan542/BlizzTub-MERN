import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common';
import AdminProductCard from '../components/AdminProductCard';

const AllProducts = () => {
  const [openUploadProduct, setOpenUploaProduct] = useState(false);
  const [allProducts, setAllProducts] = useState([])

  const fetchAllProducts = async() =>{
    const response = await fetch(SummaryApi.get_Product.url)
    const dataResponse = await response.json()

    setAllProducts(dataResponse?.data || [])
    console.log("data-response :",dataResponse)
  }

  useEffect(()=>{
    fetchAllProducts()
  },[])


  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Products</h2>
        <button className='border-2 py-2 px-4 rounded-full bg-green-500 text-white shadow-md hover:bg-purple-700 transition'
                onClick={() => setOpenUploaProduct(false)}
                >Upload Product</button>
      </div>
      
      {/*All Products*/}
      <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
        {
          allProducts.map((product,index)=>{
            return(
              <AdminProductCard data={product} fetchdata={fetchAllProducts}/>
            )

          })
        }
      </div>

      {/*upload product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={() =>setOpenUploaProduct(false)} fetchData={fetchAllProducts}/>
        )
          
      }


    </div>
  )
}

export default AllProducts