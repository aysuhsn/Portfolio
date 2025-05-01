import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productSlice'
import ProductCard from '../components/product/ProductCard'
import { Row, Col } from 'react-bootstrap'

const Home = () => {
  const { Allproduct } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <div className="container my-5">
      <Row>
        {Allproduct && Allproduct.length > 0 ? (
          Allproduct.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item.id} className="mb-4">
              <ProductCard 
                id={item.id} 
                image={item.image} 
                title={item.title} 
                price={item.price} 
              />
            </Col>
          ))
        ) : (
          <p>No products available</p>
        )}
      </Row>
    </div>
  )
}

export default Home
