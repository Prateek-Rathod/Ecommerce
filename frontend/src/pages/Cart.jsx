import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            })
          }
        }
      }
      setCartData(tempData)
    }

  }, [cartItems, products])

  return (
    <div className='border-t pt-14 px-4'>
      <div className='text-2xl mb-3'>
        <Tittle text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.length === 0 ? (
        <div className='text-center py-20 text-gray-600'>
          <p className='text-lg mb-6'>Your cart is currently empty. Start exploring our collection and add something you love!</p>
          <button
            onClick={() => navigate('/collection')}
            className='bg-black text-white px-8 py-3 text-sm rounded hover:bg-gray-800 transition-all'
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <>
          <div>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id)
              if (!productData) return null
              return (
                <div
                  key={index}
                  className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
                >
                  <div className='flex items-start gap-6'>
                    <img src={productData.image[0]} alt='' className='w-16 sm:w-20' />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>
                          {currency}
                          {productData.price}
                        </p>
                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                      </div>
                    </div>
                  </div>
                  <input
                    type='number'
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      e.target.value === '' || e.target.value === '0'
                        ? null
                        : updateQuantity(item._id, item.size, Number(e.target.value))
                    }
                    className='border max-w-20 px-1 sm:px-2 py-1'
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='w-4 mr-4 sm:w-5 cursor-pointer'
                    src={assets.bin_icon}
                    alt='Remove'
                  />
                </div>
              )
            })}
          </div>

          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button
                  onClick={() => navigate('/place-order')}
                  className='bg-black text-white text-sm my-8 px-8 py-3'
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
