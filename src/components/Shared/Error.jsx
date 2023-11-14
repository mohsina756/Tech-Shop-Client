import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="hero min-h-screen bg-cyan-500">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Sorry!</h1>
        </div>
        <div className="card flex-shrink-0 w-3/5 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center space-y-5 ">
              <p className="text-xl font-semibold">
                The Page you are looking is not available now
              </p>
            </div>
          </div>
          <Link
            to="/"
            className=" mb-2 mx-2 btn btn-outline normal-case  border-none  hover:bg-slate-400 hover:text-black"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
