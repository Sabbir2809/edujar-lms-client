import CourseList from "./CourseList";
import MainLayout from "../../layout/MainLayout";
import { ALL_COURSE_API_REQUEST } from "../../apiRequest/API";
import { useEffect, useState } from "react";
const AllCourses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ALL_COURSE_API_REQUEST();
      setCourse(result);
    })();
  }, []);

  return (
    <MainLayout>
      <div className="grid">
        <div className="w-32">
          <h1>kjfgfkjhn</h1>
        </div>
        <div className="">
          <CourseList course={course} />
        </div>
      </div>
    </MainLayout>
  );
};

export default AllCourses;
