import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Landing from "../components/Landing.jsx";
import SectionLast from "../components/SectionLast.jsx";
import TestimonialSlide from "../components/TestimonialSlide.jsx";
import WhyLearn from "../components/WhyLearn.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <Landing />
      <Card />
      <WhyLearn />
      <Categories />
      <SectionLast />
      <TestimonialSlide />
    </MainLayout>
  );
};

export default HomePage;
