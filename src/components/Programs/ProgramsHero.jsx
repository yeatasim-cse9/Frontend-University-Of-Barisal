// src/components/Programs/ProgramsHero.jsx
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

export default function ProgramsHero() {
  return (
    <section className="relative isolate min-h-[70svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 pt-24 md:pt-28">
      {/* Background Effects (decorative only) */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-48 -translate-y-48 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-48 translate-y-48 rounded-full bg-cyan-400/20 blur-3xl" />
      {/* subtle floating blob */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-2xl"
        initial={{ y: -10, opacity: 0.9 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="flex items-center gap-2 font-semibold text-emerald-200">
              <BookOpen className="h-5 w-5" />
              Academic Programs
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Our Academic
            <span className="block bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-xl font-light text-emerald-100 md:text-2xl">
            Comprehensive computer science education designed to prepare you for
            tomorrow&apos;s technological challenges
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              {
                icon: GraduationCap,
                value: "2",
                label: "Degree Programs",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Users,
                value: "70",
                label: "Total Seats",
                gradient: "from-teal-500 to-cyan-500",
              },
              {
                icon: Award,
                value: "11",
                label: "Years Experience",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: BookOpen,
                value: "160+",
                label: "Course Credits",
                gradient: "from-blue-500 to-indigo-500",
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl">
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium text-emerald-200">
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
