import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Products from './pages/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const BASE_URL = "https://fakestoreapi.com/products";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addInput, setAddInput] = useState("");
  const [price, setPrice] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = () => {
    if (addInput.trim() === "" || price.trim() === "") {
      toast.error("Please fill all fields!");
      return;
    }
    const newProduct = {
      id: uuidv4(),
      title: addInput,
      price: price,
    };
    setData([...data, newProduct]);
    toast.success("Product Added!");
    setAddInput("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    const updatedData = data.filter((prod) => prod.id !== id);
    setData(updatedData);
    toast.success("Product Deleted!");
  };

  const reset = () => {
    setData([]);
    toast.info("All Products Reset!");
  };

  const openEditModal = (product) => {
    setEditInput(product.title);
    setEditPrice(product.price);
    setEditId(product.id);
    setEditModal(true);
  };

  const saveEdit = () => {
    const updatedProducts = data.map((prod) =>
      prod.id === editId ? { ...prod, title: editInput, price: editPrice } : prod
    );
    setData(updatedProducts);
    setEditModal(false);
    toast.success("Product Updated!");
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="container my-4">
          <div className="d-flex gap-2 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Product Title"
              value={addInput}
              onChange={(e) => setAddInput(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button className='add_btn' variant="success" onClick={addProduct}>Add</button>
            <button className='reset_btn' variant="danger" onClick={reset}>Reset</button>
          </div>

          <Products data={data} onDelete={deleteProduct} onEdit={openEditModal} />

          <Modal show={editModal} onHide={() => setEditModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                className="form-control mb-3"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer> 
              <button className='cancel_btn' variant="secondary" onClick={() => setEditModal(false)}>Cancel</button>
              <button className='save_btn' variant="primary" onClick={saveEdit}>Save Changes</button>
            </Modal.Footer>
          </Modal>

          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
