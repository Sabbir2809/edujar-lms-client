<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import MainLayout from "./../layout/MainLayout";
import CourseList from "../components/course/CourseList";
import { useParams } from "react-router-dom";
import { COURSE_BY_CATEGORY_REQUEST } from "../apiRequest/API";
import CourseSkalaton from "../components/common/CourseSkalaton";
=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COURSE_BY_CATEGORY_REQUEST } from "../apiRequest/API";
import CourseSkeleton from "../components/common/CourseSkeleton";
import CourseList from "../components/course/CourseList";
import MainLayout from "./../layout/MainLayout";
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd

const CategoryCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
<<<<<<< HEAD
=======

>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
  useEffect(() => {
    (async () => {
      const { data } = await COURSE_BY_CATEGORY_REQUEST(id);
      setCourse(data);
<<<<<<< HEAD
      console.log(data);
    })();
  }, [0]);
  if (course.length === 0) {
    return (
      <MainLayout>
        <CourseSkalaton />
=======
    })();
  }, []);
  if (course.length === 0) {
    return (
      <MainLayout>
        <CourseSkeleton />
>>>>>>> 509bba576d4523ef9edc15853d4d4816aef8afcd
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
