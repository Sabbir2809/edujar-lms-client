import Categories from "../components/Categories.jsx";
import Course from "../components/Course.jsx";
import Landing from "../components/Landing.jsx";
// import SectionLast from "../components/SectionLast.jsx";
// import TestimonialSlide from "../components/TestimonialSlide.jsx";
import WhyLearn from "../components/WhyLearn.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <Landing />
      <Course />
      <Categories />
      <WhyLearn />
      {/* <SectionLast /> */}
      {/* 
      <TestimonialSlide /> */}
    </MainLayout>
  );
};

export default HomePage;
