import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { productID } = useParams();

  return (
    <div>
      <h4>ProductDetails</h4>
      <p>Product ID: {productID}</p>
    </div>
  )
}

export default ProductDetails