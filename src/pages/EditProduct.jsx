import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
      }),
    });

    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        
     
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Edit Product</h1>

         
          <button
            onClick={submitHandler}
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Update
          </button>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Title
            </label>
            <input
              type="text"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
