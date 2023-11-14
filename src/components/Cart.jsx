import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
const Cart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/added/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Successfully Deleted!",
                "Your product has been deleted from your cart.",
                "success"
              );
            }
          });
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      }
    });
  };
  return (
    <div>
      <h1 className="  text-center mx-10 border-4 p-2 border-cyan-500 my-5    text-xl md:text-3xl font-bold text-cyan-500 rounded-xl">
        My Added products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {products.length>0 ? products.map((product) => (
          <div key={product._id}>
            <div className=" m-5 md:m-10 bg-base-200 rounded-2xl ">
              <div className="hero-content flex-col lg:flex-row  justify-normal">
                <div>
                  <img
                    src={product.photo}
                    className=" h-60 rounded-lg shadow-2xl "
                  />
                </div>
                <div className="text-center w-1/2">
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <h1 className="py-2">
                    Brand:
                    <span className="text-xl font-medium capitalize">
                      {product.brand}
                    </span>
                  </h1>
                  <p className="pb-6">Price: {product.price}$</p>
                  
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn normal-case bg-cyan-500 text-white hover:text-black hover:bg-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )): <div className="text-center text-red-600"><p>Please add to cart to see here</p></div>}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
