import FacultyHero from "../components/Faculty/FacultyHero";
import DepartmentLeadership from "../components/Faculty/DepartmentLeadership";
import FacultyGrid from "../components/Faculty/FacultyGrid";

export default function Faculty() {
  return (
    <main className="pt-20">
      <FacultyHero />
      <DepartmentLeadership />
      <FacultyGrid />
    </main>
  );
}
