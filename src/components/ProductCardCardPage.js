import React from 'react'
import './ProductCardCardPage.css'
import { add, remove, decreaseCount } from '../stores/cartSlice';
import { useDispatch } from 'react-redux';

export default function ProductCardCardPage({ product }) {
  const dispatch = useDispatch();

  function IncreaseQuantity() {
    dispatch(add(product));
  }

  function DecreaseQuantity() {
    if (product.quantity > 1) {
      dispatch(decreaseCount(product));
    }
    else {
      dispatch(remove(product));
    }
  }

  function RemoveProduct() {
    dispatch(remove(product));
  }

  return (

    <div class="flex  items-center hover:bg-gray-100  py-5">
         
      <div class="flex w-1/5  items-center justify-center">
        <div class="w-20">
          <img class="h-2" src={product.image} alt={product.name} />
        </div>
    
      </div>
      <span class="font-bold text-sm w-1/5">{product.title}</span>
      <div class="flex justify-center w-1/5">
        <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={DecreaseQuantity}>
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input class="mx-2 focus:outline-none text-center w-8 rounded " type="text" value={product.quantity} readonly="readonly"/>

        <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={IncreaseQuantity}>
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">${product.price}</span>
      <span class="text-center w-1/5 font-semibold text-sm">${product.quantity * product.price}</span>
      <button class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={RemoveProduct}>Remove</button>
    </div>


    
  )
}
