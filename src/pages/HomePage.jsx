import AboutUs from "../components/AboutUs.jsx";
import Categories from "../components/Categories.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import TestimonialSlide from "../components/TestimonialSlide.jsx";
import Repotation from "../components/Repotation.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import LatestBlog from "../components/blog/LatestBlog.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <CourseCard />
      <Categories />
      <AboutUs />
      <Repotation />
      <LatestBlog />
      <TestimonialSlide />
    </MainLayout>
  );
};

export default HomePage;
