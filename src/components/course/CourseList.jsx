<<<<<<< HEAD
import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
=======
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { GrChapterAdd } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd

const CourseList = ({ course }) => {
  const star = 5;
  const stars = Array.from({ length: 7 }, (_, index) => {
    const halfNumber = index + 0.5;

    return (
      <span key={index} className="text-[#ffb900] text-[.25rem] mr-1">
        {star >= index + 1 ? (
          <BsStarFill size="14px" />
        ) : star >= halfNumber ? (
          <BsStarHalf size="14px" />
        ) : (
          <BsStar size="14px" />
        )}
      </span>
    );
  });
  return (
    <div className="bg-[#f5f1eb] md:mt-16 px-32 py-9">
      <div className="grid md:grid-cols-3 gap-4 justify-center">
        {course.map((item) => (
<<<<<<< HEAD
          <Link to={`/course-details/${item["_id"]}`}>
            <section
              key={item["_id"]}
              className="w-[350px] hover:shadow-xl transition duration-600 cursor-pointer"
            >
=======
          <Link key={item["_id"]} to={`/course-details/${item["_id"]}`}>
            <section className="w-[350px] hover:shadow-xl transition duration-600 cursor-pointer">
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail.map((url) => url.url)}
                  alt=""
                  className="h-64 w-full hover:scale-110 transition duration-500 cursor-pointer"
                />
                <span className="absolute top-2 right-3 bg-[#F8B720] p-1 px-2 text-white rounded-sm flex items-center justify-center font-semibold gap-1">
                  <CiClock2 size="15px" /> 3 Weeks
                </span>
              </div>

              <div className="bg-white px-4 py-3">
                {/* <p className="bg-green-50 inline p-2 rounded-md text-green-600 font-semibold">
                Beginner
              </p> */}
                <h1 className="text-xl text-slate-700 font-bold my-3 hover:text-green-300  transition duration-200">
                  {item["title"]}
                </h1>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">{stars}</div>{" "}
<<<<<<< HEAD
                  <span className="font-semibold tracking-wide">
                    (5.0/7 Ratings)
                  </span>
=======
                  <span className="font-semibold tracking-wide">(5.0/7 Ratings)</span>
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
                </div>
                <p className="text-red-400 font-bold">${item["price"]}</p>
                <div className="flex items-center gap-8 my-4">
                  <span className="flex items-center justify-center gap-2">
                    <GrChapterAdd /> 8 Lessons
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <PiStudent /> 20 Students
                  </span>
                </div>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
