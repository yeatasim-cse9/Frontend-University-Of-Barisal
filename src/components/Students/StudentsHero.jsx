import { motion } from "framer-motion";
import { Users, BookOpen, Calendar, Award } from "lucide-react";

export default function StudentsHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-48 translate-y-48 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-6 mt-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <span className="text-purple-200 font-semibold flex items-center gap-2">
              <Users className="w-5 h-5" />
              Student Life & Resources
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Student
            <span className="block bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto font-light">
            Everything you need to thrive in your academic journey and beyond
          </p>

          <div className="grid mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                value: "500+",
                label: "Active Students",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                icon: Calendar,
                value: "100+",
                label: "Annual Events",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: Users,
                value: "15+",
                label: "Student Clubs",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Award,
                value: "200+",
                label: "Alumni Network",
                gradient: "from-cyan-500 to-teal-500",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-purple-200 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
