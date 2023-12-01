import React, { useEffect, useState } from "react";
import MainLayout from "./../layout/MainLayout";
import CourseList from "../components/course/CourseList";
import { useParams } from "react-router-dom";
import { COURSE_BY_CATEGORY_REQUEST } from "../apiRequest/API";
import CourseSkalaton from "../components/common/CourseSkalaton";

const CategoryCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await COURSE_BY_CATEGORY_REQUEST(id);
      setCourse(data);
      console.log(data);
    })();
  }, [0]);
  if (course.length === 0) {
    return (
      <MainLayout>
        <CourseSkalaton />
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
