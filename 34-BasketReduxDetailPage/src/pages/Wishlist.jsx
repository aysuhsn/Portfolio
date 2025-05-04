import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../redux/features/wishlist.Slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((item) => (
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
                <td>${item.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      toast.success("product removed from wishlist");
                      dispatch(updateWishlist(item));
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
