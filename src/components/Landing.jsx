import HeroBanner1 from "../assets/hero-banner-1.jpg";
import HeroBanner2 from "../assets/hero-banner-2.jpg";
import HeroBG from "../assets/hero-bg.svg";
import HeroShape from "../assets/hero-shape-1.svg";
import HeroShape2 from "../assets/hero-shape-2.png";

const Landing = () => {
  return (
    <section
      className="w-[100%] md:h-screen h-[50%] bg-no-repeat bg-cover object-cover grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundImage: `url(${HeroBG})` }}>
      <div className="mx-auto py-40">
        <h1
          className="text-10xl font-semibold tracking-wide text-black md:block hidden"
          style={{ fontFamily: "League Spartan" }}>
          The Best Program <br /> to <span className="text-red-400">Enroll</span> for <br /> Exchange
        </h1>

        <h1
          className="text-8xl font-bold tracking-wide text-black md:hidden"
          style={{ fontFamily: "League Spartan" }}>
          The Best Program to <span className="text-red-400">Enroll</span> for Exchange
        </h1>

        <p className="md:text-[18px] text-[14px] font-light text-black " style={{ fontFamily: "Poppins" }}>
          Excepteur sint occaecat cupidatat non proident sunt in <br /> culpa qui officia deserunt mollit.
        </p>

        <button className="border-2 rounded-[8px] border-black text-black p-3 font-bold mt-6 tracking-widest hover:bg-black hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-11 duration-300">
          View Courses
        </button>
      </div>
      <div>
        <div className="md:w-[85%] md:h-[60%] my-44 mr-20  md:block hidden">
          <img className="object-cover" src={HeroShape2} alt="Features Img" />
        </div>

        <div className="w-80 h-80 my-44 mr-44 border-radius md:block hidden">
          <img
            className=" md:absolute object-cover md:top-52 md:left-50 rounded-tr-[65px] rounded-bl-[80px]"
            src={HeroBanner1}
            alt="Features Img"
          />
        </div>

        <div className="md:block hidden">
          <img
            className="md:absolute object-cover md:top-[35%] md:left-[72%] rounded-tl-[65px] rounded-br-[80px]"
            src={HeroBanner2}
            alt="Features Img"
          />
        </div>

        <div className="md:block hidden">
          <img
            className="absolute object-cover top-[65%] left-[55%] rounded-tl-[65px] rounded-br-[80px]"
            src={HeroShape}
            alt="Features Img"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
