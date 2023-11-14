/* eslint-disable react/prop-types */
import { useContext } from "react";
import { context } from "./ContextProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(context);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-spinner text-purple-400 mt-36 pt-36 pl-36"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default Private;
