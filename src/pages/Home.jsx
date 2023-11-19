import Navbar from "../components/Navbar.jsx";
import Landing from "../components/Landing.jsx";
import Card from "../components/Card.jsx";
import WhyLearn from "../components/WhyLearn.jsx";
import SectionLast from "../components/SectionLast.jsx";

const Home = () => {

  return (
    <div className='overflow-hidden md:overflow-hidden lg:overflow-hidden sm:w-[390px] lg:w-full md:w-[1024px]'>

   <div>
       <Navbar />

       <Landing />

       <Card />

       <WhyLearn />

       <SectionLast />

   </div>





    </div>
  );
};

export default Home;
