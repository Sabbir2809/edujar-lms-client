import React from 'react';

const Landing = () => {
    return (
        <div>

            <div className="w-full h-[900px] bg-gradient-to-r from-violet-800 via-violet-500 to-violet-800 flex" >
                <section className="ml-36 mr-40">
                    <div className=" text-gray-100 text-3xl font-bold tracking-widest"  style={{fontFamily: "Saira", }}>
                        <h1 className="pt-32">
                            Successful coaches are visionaries
                        </h1>
                    </div>

                    <div>
                        <h1 className="pt-10 text-12xl font-semibold text-white tracking-normal" style={{fontFamily: "Rowdies",}}>
                            Good <span className="text-[#4BE5CA]">coaching </span> is <br/> good teaching & <br/> nothing else.
                        </h1>
                    </div>

                    <div className="pt-10">
                        <button className=" border-2 rounded-[8px] border-white text-white text-[18px] font-bold mt-12 mb-40 p-3 pl-10 pr-10 tracking-widest" style={{fontFamily: "Saira",}} type="submit">View Courses</button>
                        <button className="ml-8 text-[17px] text-white font-semibold" style={{fontFamily: "Saira",}} type="submit"> Get Free Consultation </button>
                    </div>

                    <div className="search pt-10">
                        <input  type="text" placeholder="What do you want to learn?" className=" input input-bordered w-[500px] h-[75px] bg-white text-black text-[17px] font-bold p-7" style={{fontFamily: "Saira",}}  />

                        <button className="btn5 btn ml-8 text-[15px] text-white border-2 rounded-[8px] border-white tracking-normal" style={{ fontFamily: "Inter" }} type="submit">
                            <img src="./src\styles\assets\Vector.png" alt="Search Icon" className="mr-2" /> Search
                        </button>


                    </div>
                </section>

                <section >

                   <div className='ml-24 mt-0 '>
                       <img className='object-cover' src="./src\styles\assets\Girl.png" />
                   </div>

                </section>

            </div>
            
        </div>
    );
};

export default Landing;