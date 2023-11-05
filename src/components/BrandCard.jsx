import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const BrandCard = ({ branded }) => {
  const { name,brand,  type, price, rating, description, category, photo } =
    branded;

  console.log(brand);
  return (
   <Link to={`/brand/${brand}`}>
     <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 h-48" src={photo} alt="Album" />
      </figure>
      <div className="flex justify-center w-full pr-2">
        <div>
        <h2 className="card-title  pt-4"> {name}</h2>
        
        </div>
  
      </div>
    </div>
   </Link>
  );
};
//  all is yours. ummmmah
export default BrandCard;
