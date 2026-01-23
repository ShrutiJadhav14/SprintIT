
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import CareerRoadmap from "../components/CareerRoadmap";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CareerRoadmap />
      <Stats />
      <Courses />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
