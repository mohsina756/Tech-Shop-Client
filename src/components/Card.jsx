import { useLoaderData, useParams } from "react-router-dom";
import Brands from "./Brands";
import Slider from "./Shared/Slider";
import Footer from "./Shared/Footer";

const Card = () => {
  const products = useLoaderData();
  const brand = useParams();
  return (
    <div>
      <Slider></Slider>
      <h1 className="  text-center mx-10 border-4 p-2 border-purple-400 my-5  text-xl md:text-5xl font-bold text-purple-400 rounded-xl capitalize">
        {brand.brand} products
      </h1>
      {products.length !== 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-8 mx-8 md:mx-20 gap-10">
            {products.map((product) => (
              <Brands key={product._id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="text-center my-10">
            <p className="text-4xl text-red-500 font-bold">Sorry !</p>
            <p className="text-2xl text-red-500 font-semibold">
              This Brand Products are out of stock now !
            </p>
            <p className="text-xl text-red-500 font-semibold">
              It will restock soon !
            </p>
            <p className="text-purple-400 text-lg">Happy Shopping !</p>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Card;
