// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Products from "./pages/Products";
// import AddProduct from "./pages/AddProduct";
// import EditProduct from "./pages/EditProduct";
// import ProtectedRoute from "./components/ProtectedRoute";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />

//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <Products />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/add"
//           element={
//             <ProtectedRoute>
//               <AddProduct />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/edit/:id"
//           element={
//             <ProtectedRoute>
//               <EditProduct />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Products from "./pages/Products";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* PUBLIC ROUTE */}
//         <Route path="/" element={<Login />} />

//         {/* PROTECTED ROUTE */}
//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <Products />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
