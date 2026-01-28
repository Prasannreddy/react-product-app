// import { useEffect, useState } from "react";
// import { getProducts, deleteProduct } from "../services/productService";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     getProducts().then((res) => setProducts(res.data));
//   }, []);
//   const handleDelete = (id) => {
//     deleteProduct(id).then(() => {
//       setProducts(products.filter((p) => p.id !== id));
//     });
//   };
//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };
//   return (
//     <div className="products-container">
//       <div className="header">
//         <h1>Products</h1>
//         <div>
//           <button onClick={() => navigate("/add")}>Add Product</button>
//           <button onClick={logout} className="logout">
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="product-grid">
//         {products.map((p) => (
//           <div className="product-card" key={p.id}>
//             <img src={p.image} alt={p.title} />
//             <h4>{p.title}</h4>
//             <p className="price">₹ {p.price}</p>

//             <div className="actions">
//               <button onClick={() => navigate(`/edit/${p.id}`)}>
//                 Edit
//               </button>
//               <button
//                 className="delete"
//                 onClick={() => handleDelete(p.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
// import { useEffect, useState } from "react";
// import { getProducts } from "../services/productService";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     const res = await getProducts();
//     setProducts(res.data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Products
//       </h1>

//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <Card
//             key={product.id}
//             className="hover:shadow-xl transition duration-300"
//           >
//             <CardContent className="p-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-40 w-full object-contain mb-4"
//               />

//               <h2 className="font-semibold text-sm line-clamp-2">
//                 {product.title}
//               </h2>

//               <p className="text-gray-700 font-bold mt-2">
//                 ${product.price}
//               </p>

//               <Button className="w-full mt-3">
//                 View Details
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";

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
    <div className="page-container">
      {/* HEADER */}
      <div className="page-header">
        <h1 className="primary-title">Products</h1>
      </div>

      {/* 👇 PRODUCT GRID (THIS IS WHERE) */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img
              src={p.image}
              alt={p.title}
              className="product-image"
            />

            <h4 className="product-title">{p.title}</h4>
            <p className="product-price">₹ {p.price}</p>

            {/* 👇 BUTTONS ARE HERE */}
            <div className="product-actions">
              <button
                onClick={() => navigate(`/edit/${p.id}`)}
                className="edit-button"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p.id)}
                className="delete-button"
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
