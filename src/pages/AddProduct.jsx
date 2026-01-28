import { useState } from "react";
import { addProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    addProduct({ title, price: 100 }).then(() => {
      alert("Product added");
      navigate("/products");
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Add Product</h2>

      <input
        placeholder="Product title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAdd}>Save</button>
    </div>
  );
};

export default AddProduct;
