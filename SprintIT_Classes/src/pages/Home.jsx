
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CoursesPreview from "../components/CoursesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import CareerRoadmap from "../components/CareerRoadmap";
import AICourseSuggestion from "../components/AICourseSuggestion";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerRoadmap />
      <AICourseSuggestion />
      <Stats />
      <CoursesPreview />
      <WhyChooseUs />
    </>
  );
}
