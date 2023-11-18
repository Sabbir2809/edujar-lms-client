import Navbar from "../components/Navbar.jsx";
import Landing from "../components/Landing.jsx";
import Card from "../components/Card.jsx";

const Home = () => {

  return (
    <div className='overflow-hidden md:overflow-hidden lg:overflow-hidden sm:w-[390px] lg:full md:w-[1024px]'>

   <div>
       <Navbar />


       <Landing />

       <Card />
   </div>





    </div>
  );
};

export default Home;
