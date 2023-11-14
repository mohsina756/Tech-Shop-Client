import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App;
