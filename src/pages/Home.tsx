import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import  Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs/>
      <Services />
      <Footer/>
    </div>
  );
};

export default Home;