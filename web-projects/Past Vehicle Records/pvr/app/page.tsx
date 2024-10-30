import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Pricing/>
      <Footer/>
    </>
  );
}
