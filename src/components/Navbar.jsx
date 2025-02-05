import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const authData = useContext(AuthContext);
  console.log(authData);
  return (
    <div className="flex justify-center items-center space-x-6 py-4 bg-white shadow-md">
      <NavLink to="/" className={"text-gray-800 font-medium"}>
        Home
      </NavLink>
      <NavLink to="/add-schedule" className={"text-gray-800 font-medium"}>
        Add Schedule
      </NavLink>
      <NavLink to="/all-schedule" className={"text-gray-800 font-medium"}>
        All Schedule
      </NavLink>
      <NavLink to="/sign-in" className={"text-gray-800 font-medium"}>
        Sign In
      </NavLink>
    </div>
  );
};

export default Navbar;
