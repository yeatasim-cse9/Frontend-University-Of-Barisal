import ResearchHero from "../components/Research/ResearchHero";
import ResearchAreas from "../components/Research/ResearchAreas";
import OngoingProjects from "../components/Research/OngoingProjects";
import ResearchPublications from "../components/Research/ResearchPublications";

export default function Research() {
  return (
    <main className="pt-20">
      <ResearchHero />
      <ResearchAreas />
      <OngoingProjects />
      <ResearchPublications />
    </main>
  );
}
