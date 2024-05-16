import React, { useState } from 'react'

interface Product{
    id:number,
    name:string,
    price:string,
    quantity:number
}
export default function Ex2()  {
    const [product,]=useState<Product>({
        id:1,
        name:'hehehehe',
        price:'100000000000',
        quantity: 10
    })
    
  return (
    <div>
    <p>ID: {product.id}</p>
    <p>Name: {product.name}</p>
    <p>Price: {product.price}</p>
    <p>Quantity: {product.quantity}</p>
  </div>
  )
}