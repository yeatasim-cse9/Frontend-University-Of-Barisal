import ProgramsHero from "../components/Programs/ProgramsHero";
import ProgramOverview from "../components/Programs/ProgramOverview";
import AdmissionInfo from "../components/Programs/AdmissionInfo";
import CareerProspects from "../components/Programs/CareerProspects";

export default function Programs() {
  return (
    <main className="pt-20">
      <ProgramsHero />
      <ProgramOverview />
      <AdmissionInfo />
      <CareerProspects />
    </main>
  );
}
