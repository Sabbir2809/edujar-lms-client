import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/Frame.svg";
import Icon1 from "./../assets/Icon1.svg";
import Icon2 from "./../assets/Icon2.svg";
import Icon3 from "./../assets/Icon3.svg";

const Navbar1 = () => {
  return (
    <div>
      {/*Logo And Name*/}
      <div className="w-full md:w-full lg:w-screen h-[66px] bg-white pl-1 md:pl-10 lg:pl-36 md:pr-10 lg:pr-36 flex items-center justify-between">
        <div className="flex items-center overflow-hidden">
          <div className="drawer drawer-mobile md:hidden pl-1 overflow-auto">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side ">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
              <ul
                className="nav2  items-center gap-6 text-[16px] font-[1000]  lg:flex menu p-4 pt-10 w-80 min-h-full bg-base-200 text-base-content"
                style={{ fontFamily: "Saira" }}>
                <NavLink to="/" activeClassName="active" exact className="nav-link text-blue-400">
                  Home
                </NavLink>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label className="btn btn-ghost" tabIndex={0}>
                    <li className="font-bold text-white text-[16px] "> Courses</li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none">
                      <path
                        d="M10.0238 0.735L9.5175 0.22875C9.45 0.16125 9.37125 0.1275 9.28125 0.1275C9.19125 0.1275 9.1125 0.16125 9.045 0.22875L5.0625 4.21125L1.08 0.22875C1.0125 0.16125 0.93375 0.1275 0.84375 0.1275C0.75375 0.1275 0.675 0.16125 0.6075 0.22875L0.10125 0.735C0.03375 0.8025 0 0.875625 0 0.954375C0 1.03312 0.03375 1.10625 0.10125 1.17375L4.82625 5.89875C4.89375 5.96625 4.9725 6 5.0625 6C5.1525 6 5.23125 5.96625 5.29875 5.89875L10.0238 1.17375C10.0913 1.10625 10.125 1.03312 10.125 0.954375C10.125 0.875625 10.0913 0.8025 10.0238 0.735Z"
                        fill="#2AAA94"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu menu-compact bg-white shadow rounded text-1xl font-bold text-black pt-4 pb-5">
                    <li>
                      <a href="#">TestOne</a>
                    </li>
                    <li>
                      <a href="#">TestTwo</a>
                    </li>
                  </ul>
                </div>
                <NavLink to="/blog" activeClassName="active" exact className="nav-link">
                  Blog
                </NavLink>
                <NavLink to="/event" activeClassName="active" exact className="nav-lin">
                  Event
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="nav1 flex items-center md:gap-4 gap-2 pl-1 lg:pl-2 md:pl-0 md:pr-0 pr-16">
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

        {/*List Item*/}
        <div>
          <ul
            className=" nav2  items-center font-medium lg:gap-6 md:gap-2  md: text-[15px] lg:text-[16px] font-[1000] text-black hidden md:flex"
            style={{ fontFamily: "Saira" }}>
            <NavLink to="/" activeClassName="active" exact className="nav-link text-blue-400">
              Home
            </NavLink>
            <div className="dropdown dropdown-hover dropdown-end">
              <label className="btn btn-ghost" tabIndex={0}>
                <li className="text-black text-[16px] "> Courses</li>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path
                    d="M10.0238 0.735L9.5175 0.22875C9.45 0.16125 9.37125 0.1275 9.28125 0.1275C9.19125 0.1275 9.1125 0.16125 9.045 0.22875L5.0625 4.21125L1.08 0.22875C1.0125 0.16125 0.93375 0.1275 0.84375 0.1275C0.75375 0.1275 0.675 0.16125 0.6075 0.22875L0.10125 0.735C0.03375 0.8025 0 0.875625 0 0.954375C0 1.03312 0.03375 1.10625 0.10125 1.17375L4.82625 5.89875C4.89375 5.96625 4.9725 6 5.0625 6C5.1525 6 5.23125 5.96625 5.29875 5.89875L10.0238 1.17375C10.0913 1.10625 10.125 1.03312 10.125 0.954375C10.125 0.875625 10.0913 0.8025 10.0238 0.735Z"
                    fill="#2AAA94"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu menu-compact bg-white shadow rounded text-1xl font-bold text-black pt-4 pb-5">
                <li>
                  <a href="#">TestOne</a>
                </li>
                <li>
                  <a href="#">TestTwo</a>
                </li>
              </ul>
            </div>
            <NavLink to="/blog" activeClassName="active" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/event" activeClassName="active" className="nav-link">
              Event
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center lg:gap-6 md:gap-4 gap-2 lg:w-8 md:h-0 w-4 h-4 mr-14 md:mr-0">
          <img src={Icon1} />
          <img src={Icon2} />
          <img src={Icon3} />
        </div>

        {/*Login / Register*/}
        <div className="flex md:gap-5 gap-2">
          <button className="text-black font-bold hover:text-[#2AAA94]" style={{ fontFamily: "Saira" }}>
            <Link to="/login">Login</Link>
          </button>
          <button
            className=" btn1 text-white font-semibold w-20 h-8 md:mr-0 mr-3 md:w-[105px] md:h-[44px] text-[15px] hover:text-[#2AAA94]"
            style={{ fontFamily: "Saira" }}
            type="submit">
            <Link to="/registration">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
