import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { getToken, removeSession } from "../../utility/SessionHelper";
import logo from "./../../assets/Frame.svg";

const Navbar = () => {
  const handleLogout = () => {
    removeSession();
  };

  return (
    <nav className="w-full md:w-full lg:w-screen h-[66px] bg-slate-50 pl-1 md:pl-10 lg:pl-36 md:pr-10 lg:pr-36 flex items-center justify-between fixed top-0 z-40">
      <div className="flex items-center overflow-hidden">
        {/* Mobile View */}
        <div className="drawer drawer-mobile md:hidden pl-1 overflow-auto">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="drawer-button">
              <RiMenu2Fill className="text-blue-600" size={25} />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
            <ul
              className="nav2 items-center gap-6 text-[16px] font-[1000] lg:flex menu p-4 pt-10 w-80 min-h-full bg-slate-200"
              style={{ fontFamily: "Saira" }}>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-400" : "text-black")}>
                Home
              </NavLink>
              <div className="dropdown dropdown-hover dropdown-end">
                <label className="btn btn-ghost font-normal" style={{ fontFamily: "Saira" }}>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) => (isActive ? "text-blue-400" : "text-black")}>
                    Courses
                  </NavLink>
                  <MdOutlineKeyboardArrowDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu menu-compact bg-white shadow rounded text-1xl font-bold text-black pt-4 pb-5">
                  <li>
                    <a href="#">TestOne</a>
                  </li>
                </ul>
              </div>
              <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-blue-400" : "text-black")}>
                Blogs
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="nav1 flex items-center md:gap-4 gap-2 pl-1 lg:pl-2 md:pl-0 md:pr-0 pr-16 animate-fade">
          <Link to="/">
            <img className="md:w-[40px] md:h-[60px] w-[28px] h-[40px]" src={logo} alt="logo" />
          </Link>
          <Link to="/">
            <h1
              className="text-1xl font-bold text-black "
              style={{ fontFamily: "Revalia", color: "#04016C" }}>
              EDU<span style={{ color: "#2AAA94" }}>JAR</span>
            </h1>
          </Link>
        </div>
      </div>
      {/* Computer View */}
      <ul
        className="nav2 items-center font-medium lg:gap-6 md:gap-2 md:text-[15px] lg:text-[16px] text-black hidden md:flex"
        style={{ fontFamily: "Saira" }}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-400" : "text-black hover:text-blue-400")}>
          Home
        </NavLink>
        <div className="dropdown dropdown-hover dropdown-end">
          <label className="btn btn-ghost font-normal" style={{ fontFamily: "Saira" }}>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "text-blue-400" : "text-black hover:text-blue-400")}>
              Courses
            </NavLink>
            <MdOutlineKeyboardArrowDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu menu-compact bg-white shadow rounded text-1xl font-bold text-black pt-4 pb-5">
            <li>
              <a href="#">TestOne</a>
            </li>
          </ul>
        </div>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "text-blue-400" : "text-black hover:text-blue-400")}>
          Blogs
        </NavLink>
      </ul>
      {/* Account */}
      <div className="flex md:gap-5 gap-2 items-center">
        {getToken() ? (
          <>
            <Link
              to="/profile"
              className="text-black font-bold hover:text-blue-400"
              style={{ fontFamily: "Saira" }}>
              <CgProfile size={25} />
            </Link>
            <span
              onClick={handleLogout}
              className="text-black font-bold hover:text-blue-400 cursor-pointer"
              style={{ fontFamily: "Saira" }}>
              Logout
            </span>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-black font-bold hover:text-blue-400"
              style={{ fontFamily: "Saira" }}>
              Login
            </Link>
            <div>
              <Link to="/registration">
                <button
                  className="btn1 text-white font-semibold w-20 h-10 md:mr-0 mr-3 md:w-[105px] md:h-[44px] text-[15px]"
                  style={{ fontFamily: "Saira" }}>
                  Sign Up
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
