import { Link } from "react-router-dom";

import logo from '../../public/logo.jpeg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    
  const {handleLogout, user} = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/'  className="btn btn-ghost normal-case text-xl"> <img className="w-12" src={logo} alt="" /> Promotion Dept</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
            <li><Link to='/addBrand'>Add Product</Link></li>
            <li><Link to='/myCart'>My Cart</Link></li>
            {
          user ? <>
          <li>

          <button onClick={handleLogout}>LogOut</button>
          <img className="w-12 rounded-full mx-3" src={user.photoURL} alt="" />
          <p className="text-xs md:text-xl">{user?.displayName}</p>
          </li>
          </>
          :
          <li>

              <Link to="/login">Login</Link>
          </li>
        }
    
    </ul>
  </div>
</div>
    );
};

export default Navbar;