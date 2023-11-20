<<<<<<< HEAD
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="">
      <Navbar />
    </div>
=======
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
>>>>>>> 950c259c0fb317cfbbc88f42e3f96e655e1e0d1f
  );
};

export default Home;
