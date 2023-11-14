/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Brands = ({ product }) => {
  const { _id, name, brand, photo, rating, type, price } = product;
  return (
    <div>
      {/* Product Card */}
      <div className="card  text-white flex-col  bg-cyan-500 shadow-xl">
        <figure>
          <img
            className="w-full h-80 md:h-72 lg:h-56 p-2 rounded-t-2xl"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body py-3 text-center h-80 md:h-60 lg:h-72 ">
          <h2 className="card-title justify-center "> {name}</h2>
          <h2 className="capitalize">Brand: {brand}</h2>
          {/* <p>{description}</p> */}
          <p className="capitalize">Type: {type}</p>
          <p>Price: {price} $</p>
          {/* Rating */}

          <div className="rating flex rating-md mb-2 justify-center">
            <input
              type="radio"
              name="rating-1"
              disabled
              defaultChecked={rating === "1"}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              defaultChecked={rating === "2"}
              disabled
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              defaultChecked={rating === "3"}
              disabled
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              defaultChecked={rating === "4"}
              disabled
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              defaultChecked={rating === "5"}
              disabled
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

          <div className="flex gap-2 flex-col md:flex-row justify-center">
            <NavLink to={`/card/update/${_id}`}>
              <button className="btn  bg-cyan-500 text-white hover:text-black hover:bg-white">
                Update
              </button>
            </NavLink>
            <NavLink to={`/card/brand/${_id}`}>
              <button className="btn  bg-cyan-500 text-white hover:text-black hover:bg-white">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
