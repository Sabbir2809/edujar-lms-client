import React from 'react';

const Landing = () => {
    return (
        <div>

            <div className="w-full md:h-[900px] h-[820px] bg-gradient-to-r from-violet-800 via-violet-500 to-violet-800 md:flex overflow-hidden " >
                <section className="md:ml-36 ml-6 md:mr-40 mr-2">
                    <div className=" text-gray-100 text-3xl font-bold tracking-widest"  style={{fontFamily: "Saira", }}>
                        <h1 className="md:pt-32  pt-9">
                            Successful coaches are visionaries
                        </h1>
                    </div>

                    <div>
                        <h1 className="pt-10 md:text-12xl text-10xl font-semibold text-white tracking-normal" style={{fontFamily: "Rowdies",}}>
                            Good <span className="text-[#4BE5CA]">coaching </span> is <br/> good teaching & <br/> nothing else.
                        </h1>
                    </div>

                    <div className="md:pt-10 pt-9">
                        <button className=" border-2 rounded-[8px] border-white text-white md:text-[18px] text-[14px] p-3 font-bold md:mt-12 md:mb-40 md:p-3 md:pl-10 md:pr-10 tracking-widest" style={{fontFamily: "Saira",}} type="submit">View Courses</button>
                        <button className="ml-8 md:text-[17px] text-[13px] text-white font-semibold" style={{fontFamily: "Saira",}} type="submit"> Get Free Consultation </button>
                    </div>

                    <div className="search md:pt-10 pt-14 md:absolute flex items-center">
                        <input  type="text" placeholder="What do you want to learn?" className=" input input-bordered md:w-[500px] md:h-[75px] w-96 h-12  bg-white text-black md:text-[17px] text-[13px] font-semibold md:font-bold p-7" style={{fontFamily: "Saira",}}  />

                        <button className="btn5 btn ml-8 text-[15px] text-white border-2 rounded-[8px] border-white tracking-normal md:flex hidden" style={{ fontFamily: "Inter" }} type="submit">
                            <img src="./src\styles\assets\Vector.png" alt="Search Icon" className="mr-2" /> Search
                        </button>


                           <button className='btn btn-secondary ml-5 text-[15px] text-white border-2 rounded-[8px] tracking-normal md:hidden' style={{ fontFamily: "Inter" }} type='submit'>
                               <img  src="./src\styles\assets\Vector.png" alt="Search Icon" className="mr-2" />
                               Search
                           </button>

                    </div>
                </section>

                <section >

                   <div className='ml-24 mt-0 hidden md:flex '>
                       <img className='object-cover' src="./src\styles\assets\Girl.png" />
                   </div>

                </section>

            </div>
            
        </div>
    );
};

export default Landing;