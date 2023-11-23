import Girl from "./../assets/Girl.png";
import Vector from "./../assets/Vector.png";

const Landing = () => {
  return (
    <div>
      <div className="w-full 2xl:h-[90vh] lg:h-[80vh] md:h-[80vh] bg-gradient-to-r from-violet-800 via-violet-500 to-violet-800 md:flex overflow-hidden ">
        <section className="mx-auto 2xl:max-w-screen-xl lg:pl-16 md:pl-10 pl-10 animate-fade-right animate-duration-[2000ms] animate-delay-500">
          <div className=" text-gray-100 text-2xl font-bold tracking-widest  " style={{ fontFamily: "Saira" }}>
            <h1 className="2xl:pt-24 lg:pt-36 md:pt-32 pt-16">Successful coaches are visionaries</h1>
          </div>

          <div className='2xl:w-[100%] lg:w-[100%] md:w-[100%]'>
            <h1
              className=" 2xl:text-[6vh] lg:text-[5vh] md:text-[5vh] text-[4vh] font-semibold text-white tracking-normal"
              style={{ fontFamily: "Rowdies" }}>
              Good <span className="text-[#4BE5CA]">coaching </span> is <br /> good teaching & <br /> nothing
              else.
            </h1>
          </div>

          <div className="md:pt-8 pt-9 md:pb-0 pb-10">
            <button
              className=" border-2 rounded-[8px] border-white text-white md:text-[18px] text-[14px] p-3 font-bold md:mt-12 md:mb-40 md:p-3 md:pl-10 md:pr-10 tracking-widest"
              style={{ fontFamily: "Saira" }}
              type="submit">
              View Courses
            </button>
            <button
              className="2xl:ml-8 lg:ml-4 md:ml-4 ml-2 2xl:text-[17px] lg:text-[15px] md:text-[13px] text-[13px] text-white font-semibold"
              style={{ fontFamily: "Saira" }}
              type="submit">
              {" "}
              Get Free Consultation{" "}
            </button>
          </div>
        </section>

        <section>
          <div className="2xl:ml-72 lg:ml-72 2xl:mr-32 lg:mr-10  mt-0 hidden md:flex animate-jump animate-duration-[2000ms]">
            <img className="object-cover 2xl:h-[91vh] 2xl:w-[100%] lg:h-[95vh] lg:w-[80%] md:h-[100%] md:w-[100%]" src={Girl} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
