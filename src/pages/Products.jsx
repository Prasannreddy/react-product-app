import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="products-container">
      <div className="header">
        <h2>Products</h2>
        <div>
          <button onClick={() => navigate("/add")}>Add Product</button>
          <button onClick={logout} className="logout">
            Logout
          </button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p className="price">₹ {p.price}</p>

            <div className="actions">
              <button onClick={() => navigate(`/edit/${p.id}`)}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
