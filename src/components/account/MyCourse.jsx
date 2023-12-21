import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ENROLL_COURSE_API_REQUEST } from "../../apiRequest/API";

const MyCourse = () => {
  const [enrollCourses, setEnrollCourses] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await GET_ENROLL_COURSE_API_REQUEST();
      setEnrollCourses(result);
    })();
  }, []);

  return (
    <div>
      {enrollCourses.length === 0 ? (
        <h1>Please Enroll Course</h1>
      ) : (
        <>
          {enrollCourses.map((enrollCourse) => (
            <div
              key={enrollCourse._id}
              className="card w-[100%] lg:w-96  shadow-xl mt-10 border-2 rounded-lg ">
              <div className="card-body">
                <img src={enrollCourse?.thumbnail.map((url) => url.url)} />
                <h2 className="card-title text-2xl text-black">{enrollCourse.title}</h2>
                <div className="card-actions">
                  <button className="btn btn-success text-white w-full font-bold text-[14px] ">
                    <Link to="/my-course">Continue </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MyCourse;
