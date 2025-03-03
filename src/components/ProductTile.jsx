import React  from 'react'
import { useNavigate } from 'react-router-dom'
import formatPrice from '../Utils/formatPrice'


const ProductTile = ({singleProductItem}) => {
  const navigate =   useNavigate()

    function handleNavigation(getId){
        navigate(`/product-details/${getId}`)
    }

  return (
    <div className='border m-4 py-5 px-3'>
        <img  src={singleProductItem.image} className='h-[200px] w-[300px] object-cover'/>
        <h1 className='text-ellipsis overflow-hidden whitespace-nowrap'>{singleProductItem.title}</h1>
        <p className=''>{formatPrice(singleProductItem.price)}</p>
        <button onClick={()=>handleNavigation(singleProductItem.id)}
        className='text-center font-semibold  cursor-pointer w-full py-2 bg-gray-900 text-white'>View Details</button>
    </div>
  )
}

export default ProductTile
