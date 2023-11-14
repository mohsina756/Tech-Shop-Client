import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
const Details = () => {
  const product = useLoaderData();
  const { name, photo, brand, price, description, rating, type } = product;
  const newProduct = { name, photo, brand, price, description, rating, type };
  const handleCart = (newProduct) => {
    fetch("http://localhost:5000/added", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thank you!",
            text: `${name} added to Cart`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sorry!",
            text: `you have already added ${name} to Cart`,
            footer: '<a href="/">please choose another one !</a>',
          });
        }
      });
  };
  return (
    <div>
      <div className="mx-5 md:mx-20 mt-8 grid md:grid-cols-2">
        <div>
          <img className=" w-2/3 mx-auto" src={photo} alt="" />
          <div className="text-center w-full">
            <h1 className="text-5xl font-bold">{name}</h1>
          </div>
        </div>

        <div>
          <div className=" text-center md:text-left">
            <h1 className="py-2">
              Brand:
              <span className="text-xl font-bold capitalize"> {brand}</span>
            </h1>
            <p className="pb-6">
              Price: <span className=" font-bold capitalize">{price}</span>$
            </p>
            {/* Rating */}
            <div className="rating rating-md">
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
            <p className="py-6">{description}</p>
            <div>
              <button
                onClick={() => handleCart(newProduct)}
                className="btn  bg-cyan-500 text-white hover:text-black hover:bg-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
