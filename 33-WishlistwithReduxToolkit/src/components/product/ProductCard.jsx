import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProductCard = ({ image, title, price }) => {
  return (
    <Card className="shadow-lg border-0 rounded" style={{ transition: 'transform 0.2s ease-in-out' }}>
      <Card.Img variant="top" src={image} height="250" style={{ objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">${price}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button 
            variant="primary" 
            className="w-75" 
            style={{ transition: 'background-color 0.3s ease' }} 
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0069d9'}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
