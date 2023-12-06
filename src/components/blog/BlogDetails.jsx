<<<<<<< HEAD
import image from "../../assets/about-banner.jpg";
import BlogSidebar from "./BlogSidebar";
import { Textarea, Button } from "keep-react";
=======
import { Button, Textarea } from "keep-react";
import image from "../../assets/about-banner.jpg";
import BlogSidebar from "./BlogSidebar";
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd

const BlogDetails = () => {
  return (
    <div className="pt-20 px-5 md:px-32 bg-[#f8f8fa]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="p-5 bg-white rounded-md">
            <h1 className="text-4xl text-black pb-3">
<<<<<<< HEAD
              how to hide a div and when hover then show div content tailwind
              CSS reac
=======
              how to hide a div and when hover then show div content tailwind CSS reac
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
            </h1>
            <div className="flex gap-3 pb-3">
              <img src={image} alt="" className="rounded-full w-5" />
              <span>Date</span>
              <span>Comments</span>
              <span>Reading time</span>
            </div>
            <img src={image} alt="" className="w-full pb-3" />
            <p>
<<<<<<< HEAD
              how to hide a div and when hover then show div content tailwind
              CSS reac how to hide a div and when hover then show div content
              tailwind CSS reac how to hide a div and when hover then show div
              content tailwind CSS reac
            </p>
            <br />
            <p>
              how to hide a div and when hover then show div content tailwind
              CSS reac how to hide a div and when hover then show div content
              tailwind CSS reac how to hide a div and when hover then show div
              content tailwind CSS reac
=======
              how to hide a div and when hover then show div content tailwind CSS reac how to hide a div and
              when hover then show div content tailwind CSS reac how to hide a div and when hover then show
              div content tailwind CSS reac
            </p>
            <br />
            <p>
              how to hide a div and when hover then show div content tailwind CSS reac how to hide a div and
              when hover then show div content tailwind CSS reac how to hide a div and when hover then show
              div content tailwind CSS reac
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
            </p>
          </div>
          {/* author */}
          <div className="grid grid-cols-3 my-5 bg-white p-5 gap-5 rounded-md">
            <img src={image} alt="" />
            <div className="col-span-2">
              <h1 className="text-black text-xl">Rasel Kibria</h1>
              <p className="pb-5 text-black ">
                how to hide a div and when hover then show div content tailwind
              </p>
              <Button size="xs" type="outlinePrimary">
                View All Posts
              </Button>
            </div>
          </div>
          {/* comments */}
          <div className=" my-5 bg-white p-5 rounded-md">
            <h1>Write a Comment</h1>
            <br />
            <form action="">
<<<<<<< HEAD
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                rows={4}
              ></Textarea>
=======
              <Textarea id="comment" placeholder="Leave a comment..." rows={4}></Textarea>
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
              <div className="pt-5">
                <button className="btn bg-sky-500 hover:bg-sky-700 border-none text-white">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
