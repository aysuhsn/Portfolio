import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import ProductCard from "../components/card/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { allproducts, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "2rem", gap: "20px 0", width: "100%" }}>
        {allproducts &&
          allproducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
