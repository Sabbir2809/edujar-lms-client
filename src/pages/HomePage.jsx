import Categories from "../components/Categories.jsx";
import Course from "../components/course/Course.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import Landing from "../components/Landing.jsx";
import WhyLearn from "../components/WhyLearn.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <Landing />
      <Course />
      <Categories />
      <WhyLearn />
      <CourseCard />
    </MainLayout>
  );
};

export default HomePage;
