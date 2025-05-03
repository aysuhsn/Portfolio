import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import ProductCard from "../components/card/ProductCard";

const Home = () => {
  let { allproducts } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  return (
    <div className="container">
      <div
        className="row"
        style={{ marginTop: "2rem", gap: "20px 0", width: "100%" }}
      >
        {allproducts &&
          allproducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
