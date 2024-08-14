import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common';

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
                onClick={() => setOpenUploaProduct(true)}
                >Upload Product</button>
      </div>
      
      {/*All Products*/}
      <div>
        {
          allProducts.map((product,index)=>{
            return(
              <div>
                <img src={product?.productImage[0]} width={100} height={100} alt='' />
              </div>
            )

          })
        }
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