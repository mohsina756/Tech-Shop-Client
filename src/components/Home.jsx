import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Home = () => {
    const brands = useLoaderData();
    return (
        <>
          <div className='m-20'>
          <h1 className='text-5xl text-gray-600 text-center my-20'>Brands</h1>
          <div className='grid md:grid-cols-3 gap-3'>
          {
            brands.map(branded => 
            <BrandCard 
            key={branded._id}
            
            branded={branded}
            >
            </BrandCard>)
          }
          </div>
          </div>
        </>
      )
};

export default Home;