import { motion } from "framer-motion";
import { Users, Award, GraduationCap } from "lucide-react";

export default function FacultyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-48 translate-y-48 blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 mt-6 border border-white/20">
            <span className="text-purple-200 font-semibold flex items-center gap-2">
              <Users className="w-5 h-5" />
              Our Expert Faculty
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Meet Our
            <span className="block bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Faculty Members
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto font-light">
            Experienced educators and researchers dedicated to excellence in
            computer science education
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 mb-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
              <GraduationCap className="w-8 h-8 text-purple-300" />
              <div className="text-left">
                <div className="text-2xl font-bold">9</div>
                <div className="text-purple-200 text-sm">Faculty Members</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
              <Award className="w-8 h-8 text-purple-300" />
              <div className="text-left">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-purple-200 text-sm">Research Papers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
