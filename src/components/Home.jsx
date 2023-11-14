import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import { FcHome, FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import Customer from "./Customer";
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
      {/* About Us */}
      <div>
        <h1 className="  text-center mx-10 border-4 p-2 border-purple-400 my-5  text-xl md:text-5xl font-bold text-purple-400 rounded-xl">
          About Us
        </h1>
        <div className="mx-5 lg:mx-20 mb-5 text-clip gap-20 grid grid-flow-row md:grid-flow-col  justify-between">
          <p className="indent-2">
            <span className="text-purple-400 text-3xl border-l-2 border-l-purple-400 pl-2">
              R
            </span>
            HR Tech, our mission is to empower individuals and businesses with
            cutting-edge technology that enhances their lives and drives
            innovation.Founded in 2022 , RHR Tech was born out of a passion for
            technology and a desire to provide high-quality solutions to tech
            enthusiasts.Our core values revolve around innovation,
            customer-centricity, quality, and sustainability.We are committed to
            delivering products known for their reliability, performance, and
            durability. Quality is at the heart of everything we doOur product
            philosophy centers on user experience, affordability, and staying at
            the forefront of technological advancements. We are committed to
            sustainability through eco-friendly packaging and responsible
            sourcing. Our commitment extends to community support, with a
            focus.RHR Tech is proud to partner with industry leaders such as to
            provide you with the latest technology.
          </p>
          <div className="my-auto">
            <img
              className="w-full h-[320px]"
              src="https://i.ibb.co/VY7XqMr/download-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="p-2 bg-base-300" />
      {/* Customers Review */}
      <h1 className="  text-center mx-10 border-4 p-2 border-purple-400 my-5  text-xl md:text-5xl font-bold text-purple-400 rounded-xl">
        Customers Review
      </h1>
      <div>
        <Customer />
      </div>

      <hr className="p-2 bg-base-300" />
      {/* Contact Us */}
      <h1 className="  text-center mx-10 border-4 p-2 border-purple-400 my-5  text-xl md:text-5xl font-bold text-purple-400 rounded-xl">
        Contact Us !
      </h1>
      <div className="flex flex-col md:flex-row justify-around  bg-purple-400 rounded-2xl  mb-5 mx-1 lg:mx-20 py-8">
        {/* left side */}
        <div className=" flex py-5 rounded-xl  justify-center    bg-purple-400 ">
          <div className="card px-0 md:px-10  max-w-sm md:max-w-2xl shadow-2xl bg-base-100">
            <div className="card-body px-4 md:px-8">
              <h2 className=" underline underline-offset-4 text-center text-2xl font-medium text-purple-400">
                Visit Us !
              </h2>
              <div className="form-control">
                <div className="py-6 flex gap-3">
                  <span className="pt-2">
                    <FcHome className="text-3xl"></FcHome>
                  </span>
                  <div>
                    <p className="text-xl">Buttonwood, California.</p>
                    <p className="">Rosemead, CA 91770</p>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <div className="py-6 flex gap-3">
                  <span className="pt-2">
                    <FcPhone className="text-3xl"></FcPhone>
                  </span>
                  <div>
                    <p className="text-xl">+880 178 554 8761</p>
                    <p className="">Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <div className="py-6 flex gap-3">
                  <span className="pt-2">
                    <MdEmail className="text-3xl text-red-500"></MdEmail>
                  </span>
                  <div>
                    <p className="text-xl ">support@tech-shop.com</p>
                    <p className="">Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* message us */}
        <div className=" flex py-5 rounded-xl  justify-center    bg-purple-400">
          <div className="card   max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <h2 className=" underline underline-offset-4 text-center text-2xl font-medium text-purple-400">
                Message Us !
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Questions</span>
                </label>
                <textarea
                  className="textarea outline outline-purple-400 outline-offset-0 outline-1"
                  placeholder="Write here..."
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-xs md:btn-md normal-case border-purple-400   text-purple-400">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <hr className="p-2 bg-base-300 " />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
