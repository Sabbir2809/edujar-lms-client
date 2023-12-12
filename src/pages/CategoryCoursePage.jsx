import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COURSE_BY_CATEGORY_API_REQUEST } from "../apiRequest/API";
import CourseSkeleton from "../components/common/CourseSkeleton";
import CourseList from "../components/course/CourseList";
import MainLayout from "./../layout/MainLayout";

const CategoryCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    (async () => {
<<<<<<< HEAD
      const data = await COURSE_BY_CATEGORY_REQUEST(id);
=======
      const data = await COURSE_BY_CATEGORY_API_REQUEST(id);
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
      setCourse(data);
    })();
  }, []);
  console.log(course);
  if (course.length === 0) {
    return (
      <MainLayout>
        <CourseSkeleton />
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <CourseList course={course} />
      </MainLayout>
    );
  }
};

export default CategoryCoursePage;
