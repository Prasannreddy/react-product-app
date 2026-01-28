// import { useState } from "react";
// import { addProduct } from "../services/productService";
// import { useNavigate } from "react-router-dom";
// const AddProduct = () => {
//   const [title, setTitle] = useState("");
//   const navigate = useNavigate();
//   const handleAdd = () => {
//     addProduct({ title, price: 100 }).then(() => {
//       alert("Product added");
//       navigate("/products");
//     });
//   };
//   return (
//     <div style={{ padding: 30 }}>
//       <h2>Add Product</h2>
//       <input
//         placeholder="Product title"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <br /><br />
//       <button onClick={handleAdd}>Save</button>
//     </div>
//   );
// };
// export default AddProduct;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/productService";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct({
      title,
      price,
      image,
    });

    navigate("/products");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Add Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="save-button"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
