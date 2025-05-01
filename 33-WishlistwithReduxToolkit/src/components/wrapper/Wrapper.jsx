import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Wrapper = () => {
  const navigate = useNavigate()

  return (
    <div className="d-flex gap-3">
      <FaHeart
        role="button"
        onClick={() => navigate('/wishlist')}
        className="text-danger fs-5"
      />
      <FaShoppingCart
        role="button"
        className="fs-5"
      />
    </div>
  )
}

export default Wrapper