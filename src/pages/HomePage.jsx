import Categories from "../components/Categories.jsx";
import Course from "../components/course/Course.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import Landing from "../components/Landing.jsx";
import SectionLast from "../components/SectionLast.jsx";
import TestimonialSlide from "../components/TestimonialSlide.jsx";
import WhyLearn from "../components/WhyLearn.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <Landing />
      <Course />
      <Categories />
      <WhyLearn />
<<<<<<< HEAD
      <CourseCard />
=======
      <SectionLast />
      <TestimonialSlide />
>>>>>>> bd0c9f2582f3fd344a80a30e8b219eac930909d1
    </MainLayout>
  );
};

export default HomePage;
