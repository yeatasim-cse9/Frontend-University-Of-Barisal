import StudentsHero from "../components/Students/StudentsHero";
import ClassRoutines from "../components/Students/ClassRoutines";
import StudentClubs from "../components/Students/StudentClubs";
import CampusLife from "../components/Students/CampusLife";
import StudentSupport from "../components/Students/StudentSupport";
import AlumniNetwork from "../components/Students/AlumniNetwork";

export default function Students() {
  return (
    <main className="pt-20">
      <StudentsHero />
      <ClassRoutines />
      <StudentClubs />
      <CampusLife />
      <StudentSupport />
      <AlumniNetwork />
    </main>
  );
}
