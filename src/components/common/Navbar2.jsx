import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/Frame.svg";
import { getToken, removeSession } from "../../utility/SessionHelper";
import { CgProfile } from "react-icons/cg";

const Navbar2 = () => {

    const handleLogout = () => {
        removeSession();
    };

    return (
        <div>

            <div className="navbar bg-white text-black fixed z-[1] rounded-3xl md:rounded-md shadow-sm">
                <div className="navbar-start mx-auto max-w-7xl ">

                    <div className="drawer md:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button"> <svg  xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 drawer-button" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-slate-200 pt-20">
                                {/* Sidebar content here */}
                                <li className="btn btn-ghost text-xl text-black font-bold "><a>Sidebar Item 1</a></li>
                                <li className="btn btn-ghost text-xl text-black font-bold "><a>Sidebar Item 1</a></li>
                                <li className="btn btn-ghost text-xl text-black font-bold "><a>Sidebar Item 1</a></li>
                                <li className="btn btn-ghost text-xl text-black font-bold "><a>Sidebar Item 1</a></li>

                            </ul>
                        </div>
                    </div>


                        {/*<a className="btn btn-ghost text-xl">daisyUI</a>*/}
<div className="flex items-center justify-between  gap-2 md:gap-6 mx-auto md:pr-10 pr-8">

    <div className="flex items-center gap-2 md:gap-6 ">

        <Link className="w-8" to="/">
            <img className="md:w-[40px] md:h-[60px] w-[28px] h-[40px] " src={logo} alt="logo" />
        </Link>
        <Link to="/">
            <h1
                className="text-1xl font-bold text-black "
                style={{ fontFamily: "Revalia", color: "#04016C" }}>
                EDU<span style={{ color: "#2AAA94" }}>JAR</span>
            </h1>
        </Link>
    </div>


    <div className=' '>
        <ul className="md:flex hidden gap-6 text-black text-[16px] font-medium ml-20" style={{ fontFamily: "Saira" }}>

            <NavLink className={({ isActive }) => (isActive ? "text-blue-400 hover:text-green-600 cursor-pointer hover:scale-110 transition duration-300" : "text-black hover:text-green-600 cursor-pointer hover:scale-110 transition duration-300" )} to="/"><a>Home</a> </NavLink>
            <div className="dropdown">
                <li tabIndex={0} className="hover:text-green-600 cursor-pointer hover:scale-110 transition duration-300"><a>Courses  🠟</a></li>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <NavLink className={({ isActive }) => (isActive ? "text-blue-400 hover:text-green-600 cursor-pointer hover:scale-110 transition duration-300" : "text-black hover:text-green-600 cursor-pointer hover:scale-110 transition duration-300" )} to="/about"><a>About</a> </NavLink>

        </ul>
    </div>

</div>




                </div>

                <div className="navbar-end md:pr-12 ">

                    {getToken() ? (
                        <>
                            <div className=" md:flex flex md:gap-5 gap-1 md:mr-5 mr-2" >
                               <Link to="/profile">
                                   <button className="btn btn-ghost btn-circle text-black md:text-[16px] font-medium" style={{ fontFamily: "Saira" }}>
                                       <CgProfile />
                                   </button>
                               </Link>

                                <Link to="/my-courses">
                                    <button className="btn btn-ghost btn-circle text-black md:text-[16px] font-medium" style={{ fontFamily: "Saira" }}>
                                        My Courses
                                    </button>
                                </Link>

                                <button onClick={ handleLogout } className="btn btn-ghost btn-circle text-black md:text-[16px] font-medium " style={{ fontFamily: "Saira" }}>
                                    Logout
                                </button>
                            </div>
                        </>


                    ):( <>
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <div className=" md:flex flex md:gap-5 gap-1 md:mr-5 mr-2" >
                           <Link to="/login" >
                               <button className="btn btn-ghost btn-circle text-black md:text-[16px] font-medium"  style={{ fontFamily: "Saira" }}>
                                   Login
                               </button>
                           </Link>
                            <div>
                                <Link to="/register">
                                    <button className="btn btn-ghost btn-circle text-black md:text-[16px] font-medium " style={{ fontFamily: "Saira" }}>
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </> )}

                </div>
            </div>

        </div>
    );
};

export default Navbar2;