import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Landing from "../components/Landing.jsx";
import MainLayout from "../components/MainLayout.jsx";
import SectionLast from "../components/SectionLast.jsx";
import WhyLearn from "../components/WhyLearn.jsx";

const Home = () => {
  return (
    <MainLayout>
      <Landing />
      <Card />
      <WhyLearn />
      <Categories />
      <SectionLast />
    </MainLayout>
  );
};

export default Home;
