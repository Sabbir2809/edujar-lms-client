import CategoriesPage from "./CategoriesPage.jsx";
import Card from "../components/Card.jsx";
import Landing from "../components/Landing.jsx";
import MainLayout from "../components/MainLayout.jsx";
import SectionLast from "../components/SectionLast.jsx";
import WhyLearn from "../components/WhyLearn.jsx";
import TestimonialSlide from "../components/TestimonialSlide.jsx";
const Home = () => {
  return (
    <MainLayout>
      <Landing />
      <Card />
        <CategoriesPage/>
      <WhyLearn />
      <SectionLast />
        <TestimonialSlide/>
    </MainLayout>
  )
};

export default Home;
