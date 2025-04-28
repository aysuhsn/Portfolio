import React from 'react';
import Table from 'react-bootstrap/Table';
import style from './Products.module.css';
import Product from '../../components/product/Product';

const Products = ({ data, onDelete, onEdit }) => {
  return (
    <div className={style.table}>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <Product
              key={product.id}
              product={product}
              deleteProd={() => onDelete(product.id)}
              editProd={() => onEdit(product)}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
