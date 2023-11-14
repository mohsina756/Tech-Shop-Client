import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const Updates = () => {
  const product = useLoaderData();
  const { _id } = product;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const updatedProducts = { name, brand, type, price, photo, rating };

    fetch(`https://promotion-dept-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Congratulations !",
            text: `${name} updated successfully!`,
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="  bg-purple-400">
        <div className=" hero-content flex-col md:mx-10">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-2xl md:text-5xl font-bold">
              Update your product!
            </h1>
          </div>
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control md:flex-row w-full gap-7">
                {/* Name */}
                <div className="md:w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product's Name..."
                    name="name"
                    defaultValue={product.name}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                {/* Brand */}
                <div className="md:w-1/2">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <select
                    name="brand"
                    defaultValue={product.brand}
                    className="select select-bordered w-full max-w-xl"
                  >
                    <option>Which Brand product?</option>
                    <option value="google">Google</option>
                    <option value="apple">Apple</option>
                    <option value="intel">Intel</option>
                    <option value="sony">Sony</option>
                    <option value="samsung">Samsung</option>
                    <option value="xiaomi">Xiaomi</option>
                  </select>
                </div>
              </div>
              <div className="form-control md:flex-row w-full gap-7">
                {/* select option */}
                <div className="md:w-1/2">
                  <label className="label">
                    <span className="label-text">Types</span>
                  </label>
                  <select
                    name="type"
                    defaultValue={product.type}
                    className="select select-bordered w-full max-w-xl"
                  >
                    <option>Type of product?</option>
                    <option value="phone">Phone</option>
                    <option value="laptop">Laptop</option>
                    <option value="headphone">Headphone</option>
                    <option value="device">Smart Device</option>
                    <option value="computer">Computer</option>
                  </select>
                </div>
                {/* price */}
                <div className="md:w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product's Price"
                    name="price"
                    defaultValue={product.price}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control md:flex-row w-full gap-7">
                {/* photo */}
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product's Photo URL..."
                    name="photo"
                    defaultValue={product.photo}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              {/* Ratings */}
              <div className="form-control ">
                <div className="mx-auto ">
                  <label className="label ">
                    <span className="label-text ">Ratings of Product</span>
                  </label>
                  <div className="rating rating-lg">
                    <input
                      type="radio"
                      name="rating"
                      value="1"
                      defaultChecked={product.rating === "1"}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating"
                      value="2"
                      defaultChecked={product.rating === "2"}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating"
                      value="3"
                      defaultChecked={product.rating === "3"}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating"
                      value="4"
                      defaultChecked={product.rating === "4"}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating"
                      value="5"
                      defaultChecked={product.rating === "5"}
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>

              <div className="form-control md:mx-28 mt-6">
                <button className="btn text-white hover:text-black bg-purple-400 normal-case">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
