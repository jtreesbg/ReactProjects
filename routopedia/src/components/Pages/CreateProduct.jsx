import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
  const navigate = useNavigate();

  return (
    <div>
      <span>Create Product</span>
      <button onClick={() => navigate(-1)}>Return</button>
    </div>
  )
}

export default CreateProduct