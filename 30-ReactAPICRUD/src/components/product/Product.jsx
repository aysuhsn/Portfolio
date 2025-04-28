import React from 'react';
import style from './Product.module.css'
import { RxCross2 } from "react-icons/rx";
import { RiEdit2Fill } from "react-icons/ri";

const Product = ({ product, deleteProd, editProd }) => {
  const { title, price } = product;

  return (
    <tr>
      <td>{title}</td>
      <td>${price}</td>
      <td style={{ cursor: 'pointer' }}>
        <RxCross2 size={25} onClick={deleteProd} className={style.delete_btn}/>
        <RiEdit2Fill size={25} onClick={editProd} className={style.edit_btn}/>
      </td>
    </tr>
  );
};

export default Product;
