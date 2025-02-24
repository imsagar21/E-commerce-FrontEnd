import React, { useContext } from 'react'
import { ECommerceContext } from '../context/Context'
import CartTile from '../components/CartTile';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const navigate =  useNavigate()
    const {cartItems} = useContext(ECommerceContext)
    
  return (
    <div className='flex justify-between gap-30 px-30 mt-20'>
        <div className=''>
            {
                cartItems?.length ? 
                cartItems.map((singleCartItem,index)=>{
                    return <CartTile key={index} singleCartItem={singleCartItem}/>
                })
                :<h1 className='font-extrabold text-2xl '>Cart Items Empty please add cart items</h1>
            }
        </div>
        <div className=' mt-10'> 
        <h1 className='text-center font-bold text-2xl'>Order Summary</h1>
        <h1 className='py-4 font-bold'>Total Price:$ {
                cartItems.reduce((acc,item)=>acc+item.totalPrice,0).toFixed(2)
            }</h1>
        <div className='flex gap-3 mt-4'>
            <button className='px-3 py-2 bg-gray-900 text-white transition-all duration-300 cursor-pointer hover:transform hover:scale-105' >Checkout</button>
            <button 
            onClick={()=>navigate('/')}
            className='px-3 py-2 bg-gray-900 text-white transition-all duration-300 cursor-pointer hover:transform hover:scale-105' >Continue Shopping</button>

        </div>
        </div>
    </div>
  )
}

export default Cart
