import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
        .then(result => {
          alert(`${result.user}Logged In Successfully !`)
        })
        .catch(error => {
          console.error(error)
        })
    }
  const { signIn, handleGoogleLogin } = useContext(AuthContext);
  const location = useLocation()?.state?.path || "/";
  const navigate = useNavigate();
//   console.log(location);
  const googleLoginHandler = () => {
    handleGoogleLogin().then((user) => {
      alert(`${user?.userName}Successfully Logged In and Registered`)
      navigate(location);
    });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center"> please Login </h2>
        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have a account{" "}
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
        </p>
      </div>
      <div className="card-actions justify-center my-5">
        <button onClick={googleLoginHandler} className="btn btn-primary">
          Login using google
        </button>
      </div>
    </div>
  );
};

export default Login;
