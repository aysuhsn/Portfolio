import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import {
  addBasket,
  decrement,
  increment,
} from "../../redux/features/basketSlice";
import { toast } from "react-toastify";

const DetailPage = () => {
  let { id } = useParams();
  let { allproducts } = useSelector((state) => state.products);
  let { products: basket } = useSelector((state) => state.basket);
  let findProduct = allproducts.find((product) => product.id == id);
  let basketProduct = basket.find((item) => item.id == id);
  let dispatch = useDispatch();

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="row">
        <div className="product-container">
          <div className="product-image">
            <img src={findProduct.image} alt="" />
          </div>

          <div className="product-details">
            <h3>{findProduct.title}</h3>
            <p>Category: {findProduct.category}</p>
            <h4>$ {findProduct.price}</h4>
            <p>{findProduct.description}</p>

            <div className="product-rating">
              <span
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <FaStar size={25} style={{ color: "yellow " }} /> ${" "}
                {findProduct.rating.rate}
              </span>
              <span>($ {findProduct.rating.count} reviews)</span>
            </div>

            <div className="quantity-selector">
              <button
                disabled={!basketProduct || basketProduct.count === 1}
                className="btn-minus"
                onClick={() => dispatch(decrement(findProduct.id))}
              >
                -
              </button>
              <p className="count">{basketProduct?.count ?? 0}</p>
              <button
                className="btn-plus"
                onClick={() => dispatch(increment(findProduct.id))}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-danger add-to-cart-btn"
              onClick={() => {toast.success("Product added to cart"); dispatch(addBasket(findProduct))}}
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
