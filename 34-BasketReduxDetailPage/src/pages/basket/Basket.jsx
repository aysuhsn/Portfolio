import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Basket.css";
import {
  decrement,
  increment,
  removeBasket,
} from "../../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Basket = () => {
  const { products } = useSelector((state) => state.basket);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let totalPrice = products.reduce(
    (sum, product) => sum + product.count * product.price,
    0
  );

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr
                style={{ textAlign: "center", verticalAlign: "middle" }}
                key={item.id}
              >
                <td>
                  <img
                    onClick={() => navigate(`/detailpage/${item.id}`)}
                    src={item.image}
                    alt=""
                    style={{
                      width: "10rem",
                      height: "12rem",
                      cursor: "pointer",
                    }}
                  />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td style={{ padding: "1.5rem" }}>
                  <div className="count-area">
                    <button
                      className="minus-btn"
                      disabled={item.count === 1}
                      onClick={() => dispatch(decrement(item.id))}
                    >
                      -
                    </button>
                    <p className="count">{item.count}</p>
                    <button
                      className="plus-btn"
                      onClick={() => dispatch(increment(item.id))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      toast.success("product removed from cart");
                      dispatch(removeBasket(item.id));
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="total">
        <p>Total Price: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Basket;
