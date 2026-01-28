import { useParams, useNavigate } from "react-router-dom";
import { updateProduct } from "../services/productService";
import { useState } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateProduct(id, { title }).then(() => {
      alert("Product updated");
      navigate("/products");
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Edit Product</h2>

      <input
        placeholder="New title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditProduct;
