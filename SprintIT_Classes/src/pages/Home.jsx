
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import WhyChooseUs from "../components/WhyChooseUs";
import CareerRoadmap from "../components/CareerRoadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerRoadmap />
      <Stats />
      <Courses />
      <WhyChooseUs />
    </>
  );
}
