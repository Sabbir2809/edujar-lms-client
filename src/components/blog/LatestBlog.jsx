import { FaRegComments } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import blog1 from "../../assets/about-banner.jpg";

const LatestBlog = () => {
  return (
    <div className="pt-10 pb-52 md:pt-20 mt-6 blog-section">
      <div className="text-center pb-5">
        <p>LATEST ARTICLES</p>
        <h1 className="text-5xl text-black font-bold">Get News With Eduweb</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 md:gap-5 gap-5 px-16 md:px-32 md:py-7">
        <section className=" rounded-md bg-slate-500 relative">
          <div className="overflow-hidden rounded w-full">
            <img
              src={blog1}
              className="hover:scale-110 transition-all duration-500 cursor-pointer hover:opacity-25"
            />
          </div>

          <div className="absolute top-40 left-4 z-10">
            <div className="max-w-[320px] bg-white p-5 rounded-lg shadow-xl">
              <p>ONLINE</p>
              <h1 className="text-xl text-slate-600 hover:text-green-400 cursor-pointer">
                Become A Better Blogger: Content Planning
              </h1>
              <div className="flex gap-3 py-5 items-center">
                <SlCalender className="text-green-500" />
                <span>Oct 10, 2021</span>
                <FaRegComments className="text-green-500" />
                <span>Com 09</span>
              </div>
              <p>Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestBlog;
