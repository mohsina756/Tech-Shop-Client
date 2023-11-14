/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Brand = ({ brands }) => {
  const { brand, image } = brands;
  return (
    <div>
      <Link to={`/card/${brand}`}>
        <div className="card h-[232px] md:h-72 bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full" src={image} alt="Google Logo" />
          </figure>
          <div className="card-body mx-auto">
            <h2 className="card-title capitalize">{brand}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
