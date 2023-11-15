import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import Brand from "./Brand";
const Home = () => {
  const loadedBrands = useLoaderData();
  return (
    <div className="bg-base-200">
      {/* Banner */}
      <div className="carousel carousel-center ">
        <div className="carousel-item w-full h-[270px] md:h-[480px]  ">
          <img
            src=" https://i.ibb.co/5FQshKY/6355883.jpg"
            alt="Banner"
          />
        </div>
      </div>
      <hr className="p-2 bg-base-300" />
      {/* product card */}
      <div>
        <h1 className="  text-center mx-10 border-4 p-2 border-purple-400 my-5  text-xl md:text-5xl font-bold text-purple-400 rounded-xl">
          Brands
        </h1>
        {/* <Card />; */}
        <div className="mx-5 md:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mx-auto my-10">
            {loadedBrands.map((brands, idx) => (
              <Brand key={idx} brands={brands}></Brand>
            ))}
          </div>
        </div>
      </div>
      <hr className="p-2 bg-base-300" />
      
      {/* footer */}
      <div>
        <hr className="p-2 bg-base-300 " />
        <Footer />
      </div>
    </div>
  );
};

export default Home;



/***
 * https://i.ibb.co/W0NZ9R7/download-3.png
https://i.ibb.co/FxKdNP8/images-8.png
https://i.ibb.co/SDjqm4N/download-2.png
https://i.ibb.co/kQfK7th/intel-600.png
https://i.ibb.co/56c7kzf/62dec0259f18b71442a15966-Apple-Logo.png
https://i.ibb.co/YBm1s0Z/download.jpg
 */