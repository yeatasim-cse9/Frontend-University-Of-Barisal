import Hero from "../components/Home/Hero";
import QuickNotice from "../components/Home/QuickNotice";
import Features from "../components/Home/Features";
import Stats from "../components/Home/Stats";
import ChairmanMessage from "../components/Home/ChairmanMessage";
import FacultyShowcase from "../components/Home/FacultyShowcase";
import Notice from "../components/Home/Notice";
import Testimonials from "../components/Home/Testimonials";
import Events from "../components/Home/Events";
import Achievements from "../components/Home/Achievements";
import LabFacilities from "../components/Home/LabFacilities";

export default function Home() {
  return (
    <main className="pt-20">
      <QuickNotice />
      <Hero />
      <Features />
      <Stats />
      <ChairmanMessage />
      <FacultyShowcase />
      <Notice />
      <Testimonials />
      <Events />
      <Achievements />
      <LabFacilities />
    </main>
  );
}
