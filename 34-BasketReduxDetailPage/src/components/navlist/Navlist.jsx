import React from "react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.basket);

  let basketCount = products.reduce((sum, product) => sum + product.count, 0);

  return (
    <ul
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <li>
        <Link
          to={"/"}
          style={{
            color: "inherit",
            fontSize: "1.3rem",
            textDecoration: "none",
            border: "none",
          }}
        >
          Home
        </Link>
      </li>

      <Link to={"/wishlist"}>
        <FaHeart
          style={{ cursor: "pointer", fontSize: "1.5rem", color: "white" }}
        />
        <sup style={{ fontSize: "1.3rem", color: "white" }}>
          {wishlist.length}
        </sup>
      </Link>

      <Link to={"/basket"}>
        <FaShoppingBag
          style={{ cursor: "pointer", fontSize: "1.5rem", color: "white" }}
        />
        <sup style={{ fontSize: "1.3rem", color: "white" }}>{basketCount}</sup>
      </Link>
    </ul>
  );
};

export default Navlist;
