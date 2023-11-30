import Girl from "./../assets/Girl.png";

const Landing = () => {
    return (
        <section className="w-full 2xl:h-[100vh] lg:h-[100vh] md:h-[100vh] bg-gradient-to-l from-sky-500 to-indigo-700 md:flex overflow-hidden ">
            <div className="mx-auto 2xl:max-w-screen-xl lg:pl-16 md:pl-10 pl-10 animate-fade-right animate-duration-[2000ms] animate-delay-500 ">
                <div className=" text-slate-100 text-2xl font-bold tracking-widest" style={{ fontFamily: "Saira" }}>
                    <h1 className="2xl:pt-24 lg:pt-36 md:pt-32 pt-16">Successful coaches are visionaries</h1>
                </div>
                <div className="2xl:w-[100%] lg:w-[100%] md:w-[100%] z-0">
                    <h1
                        className="2xl:text-[6vh] lg:text-[5vh] md:text-[5vh] text-[4vh] font-semibold text-white tracking-normal "
                        style={{ fontFamily: "Rowdies" }}>
                        Good <span className="text-[#4BE5CA]">coaching </span> is good teaching
                        <br /> and nothing else.
                    </h1>
                </div>
                <div className="md:pt-8 md:pb-0 pb-10">
                    <button
                        className=" border-2 rounded-[8px] border-white text-white md:text-[18px] text-[14px] p-3 font-bold md:mt-12 md:mb-40 md:p-3 md:pl-10 md:pr-10 tracking-widest  hover:bg-white hover:text-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-11 duration-300"
                        style={{ fontFamily: "Saira" }}
                        type="submit">
                        View Courses
                    </button>
                </div>
            </div>
            <div className="2xl:ml-72 lg:ml-72 2xl:mr-32 lg:mr-10 mt-0 hidden md:flex animate-jump animate-duration-[2000ms]">
                <img
                    className="object-cover 2xl:h-[100vh] 2xl:w-[100%] lg:h-[100vh] lg:w-[80%] md:h-[100%] md:w-[100%]"
                    src={Girl}
                    alt="Features Img"
                />
            </div>
        </section>
    );
};

export default Landing;