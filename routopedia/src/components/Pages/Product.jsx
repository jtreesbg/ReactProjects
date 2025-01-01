import React, { use } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useState } from 'react';

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false
  });

  return (
    <div>
      <span>Product</span>
      <button onClick={() => navigate('/product/create')}>Add Product</button>
      <Link to='/product/details/5'>
        <button onClick={() => navigate('/product/create')}>Navigate to Product Details 5</button>
      </Link>

      {
        goToProduct && <Navigate to='/product/details/3'></Navigate>
      }
      <button onClick={() => setGoToProduct({ goToProduct: true })}>Navigate to product 3 (UseState)</button>

    </div>
  )
}

export default Product