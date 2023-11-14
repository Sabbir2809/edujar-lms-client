import React from 'react';



const Navbar = () => {
    return (
        <div>

            {/*Logo And Name*/}

            <div className="w-full h-[66px] bg-white pl-36 pr-36 flex items-center justify-between">
                <div className="nav1 flex items-center gap-4 ">
                    <img className='w-[40px] h-[60px]' src="./src/styles/assets/Frame.svg" />
                    <h1 className='text-1xl font-bold text-black ' style={{ fontFamily: "Revalia" , color : "#04016C"}}>EDU<span style={{ color: "#2AAA94" }}>JAR</span></h1>
                </div>

                {/*List Item*/}

                <div>
                    <ul className=' nav2 flex items-center gap-6 text-[16px] font-[1000] text-black' style={{fontFamily: "Saira",}}>
                        <li>Home</li>
                        <div className='dropdown dropdown-hover dropdown-end'>
                            <label className="btn btn-ghost" tabIndex={0}>
                                <li className='font-bold text-black text-[16px] '> Courses</li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                                    <path d="M10.0238 0.735L9.5175 0.22875C9.45 0.16125 9.37125 0.1275 9.28125 0.1275C9.19125 0.1275 9.1125 0.16125 9.045 0.22875L5.0625 4.21125L1.08 0.22875C1.0125 0.16125 0.93375 0.1275 0.84375 0.1275C0.75375 0.1275 0.675 0.16125 0.6075 0.22875L0.10125 0.735C0.03375 0.8025 0 0.875625 0 0.954375C0 1.03312 0.03375 1.10625 0.10125 1.17375L4.82625 5.89875C4.89375 5.96625 4.9725 6 5.0625 6C5.1525 6 5.23125 5.96625 5.29875 5.89875L10.0238 1.17375C10.0913 1.10625 10.125 1.03312 10.125 0.954375C10.125 0.875625 10.0913 0.8025 10.0238 0.735Z" fill="#2AAA94"/>
                                </svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu menu-compact bg-white shadow rounded text-1xl font-bold text-black pt-4 pb-5">
                                <li>
                                    <a href="#">TestOne</a>
                                </li>
                                <li>
                                    <a href="#">TestTwo</a>
                                </li>
                                <li>
                                    <a href="#">TestThree</a>
                                </li>
                                <li>
                                    <a href="#">TestThree</a>
                                </li>
                            </ul>
                        </div>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Pages</li>
                        <li>Events</li>
                    </ul>
                </div>

                {/*Image*/}

                <div className='flex items-center gap-6'>
                    <img src="./src/styles/assets/Icon.svg" />
                    <img src="./src/styles/assets/Icon (1).svg" />
                    <img src="./src/styles/assets/Icon (2).svg" />
                </div>

                {/*Login / Register*/}

                <div className='flex gap-5 '>
                    <button className='text-black font-bold hover:text-[#2AAA94]' style={{fontFamily: "Saira",}}>Login</button>
                    <button className=" btn1 text-white font-semibold w-[108px] h-[44px] text-[15px] hover:text-[#2AAA94]" style={{fontFamily: "Saira"}} type="submit">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;