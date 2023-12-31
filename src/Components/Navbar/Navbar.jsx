import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-10 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              <li >Home</li>
            </NavLink>
            <NavLink
              to={`/donation`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              <li>Donation</li>
            </NavLink>
            <NavLink
              to={`/statistics`} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
              
            >
              <li>Statistics</li>
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img src="./Logo.png" alt="logo" /></a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="style menu menu-horizontal mx-4">
          <NavLink to={`/`} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }>
            <li>Home</li>
          </NavLink>
          <NavLink to={`/donation`} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }>
            <li>Donation</li>
          </NavLink>
          <NavLink to={`/statistics`} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }>
            <li>Statistics</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
