import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../../redux/features/wishlist.Slice";

function ProductCard({ product }) {
  const [color, setColor] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const findProduct = wishlist.find((item) => item.id === product.id);
    setColor(!!findProduct);
  }, [wishlist, product.id]);

  const handleWishlist = () => {
    dispatch(updateWishlist(product));
  };

  return (
    <div className="col-sm-12 col-lg-3">
      <Card style={{ width: "16rem", position: "relative" }}>
        {color ? (
          <FaHeart
            onClick={handleWishlist}
            size={23}
            style={{
              position: "absolute",
              cursor: "pointer",
              top: "10px",
              right: "10px",
              color: "red",
              transition: "0.3s",
            }}
          />
        ) : (
          <FaRegHeart
            onClick={handleWishlist}
            size={23}
            style={{
              position: "absolute",
              cursor: "pointer",
              top: "10px",
              right: "10px",
              color: "gray",
              transition: "0.3s",
            }}
          />
        )}

        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "17rem", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title>{product.title.slice(0, 20)}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary" style={{ width: "100%" }}>
            Add Basket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
