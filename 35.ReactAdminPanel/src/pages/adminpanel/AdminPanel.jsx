import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProducts, deleteProducts } from "../../redux/features/productSlice";
import TransitionsModal from "../../utils/modal/Modal";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { allproducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({ image: "", title: "", category: "", price: "", description: "" });
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = () => {
    dispatch(addProducts(formData));
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <h1>Admin Panel</h1>
      <Button variant="success" className="create-btn" onClick={handleOpen}>
        Create
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {allproducts &&
            allproducts.map((item) => (
              <tr key={item.id} style={{ textAlign: "center", verticalAlign: "middle" }}>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "10rem", height: "12rem", cursor: "pointer" }}
                  />
                </td>
                <td>{item.title.slice(0, 20) + "..."}</td>
                <td>$ {item.price}</td>
                <td>{item.category}</td>
                <td>
                  <div className="remove-buttons">
                    <Button variant="danger" onClick={() => handleDelete(item.id)}>
                      Remove
                    </Button>
                    <Button variant="warning">Edit</Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <TransitionsModal
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        formData={formData}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default AdminPanel;
