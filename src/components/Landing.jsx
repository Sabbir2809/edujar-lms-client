import Girl from "./../assets/Girl.png";
import Vector from "./../assets/Vector.png";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-[100%] bg-gradient-to-r from-violet-800 via-violet-500 to-violet-800 md:flex overflow-hidden ">
        <section className="2xl:ml-56 lg:ml-36 ml-6 2xl:mr-[20vh] lg:mr-5 md:mr-5 mr-2">
          <div className=" text-gray-100 text-3xl font-bold tracking-widest" style={{ fontFamily: "Saira" }}>
            <h1 className="2xl:pt-52 lg:pt-52 md:pt-32 pt-16">Successful coaches are visionaries</h1>
          </div>

          <div className='2xl:w-full lg:w-[100%] md:w-[100%]'>
            <h1
              className="pt-20 2xl:text-[8vh] lg:text-[6vh] md:text-[5vh] text-[4vh] font-semibold text-white tracking-normal"
              style={{ fontFamily: "Rowdies" }}>
              Good <span className="text-[#4BE5CA]">coaching </span> is <br /> good teaching & <br /> nothing
              else.
            </h1>
          </div>

          <div className="md:pt-10 pt-9 md:pb-0 pb-10">
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
          <div className="ml-24 mt-24 hidden md:flex ">
            <img className="object-cover 2xl:h-[100%] 2xl:w-[100%] lg:h-[100%] lg:w-[100%] md:h-[100%] md:w-[100%]" src={Girl} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
