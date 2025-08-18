import AboutHero from "../components/About/AboutHero";
import VisionMission from "../components/About/VisionMission";
import WhyChooseUs from "../components/About/WhyChooseUs";
import History from "../components/About/History";
import Infrastructure from "../components/About/Infrastructure";
import FutureGoals from "../components/About/FutureGoals";

export default function About() {
  return (
    <main className="pt-20">
      <AboutHero />
      <VisionMission />
      <WhyChooseUs />
      <History />
      <Infrastructure />
      <FutureGoals />
    </main>
  );
}
