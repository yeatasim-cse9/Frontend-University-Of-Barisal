import { motion } from "framer-motion";
import { GraduationCap, Users, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-indigo-800"
      aria-label="About our department hero section"
    >
      {/* Layer: vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0)_60%)]" />

      {/* Layer: soft noise texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Layer: gradient orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-400/25 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      />

      {/* Layer: subtle grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.08]"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-5xl"
        >
          {/* Pill */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex justify-center"
          ></motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            About Our{" "}
            <span className="block bg-gradient-to-r from-blue-200 via-sky-200 to-purple-200 bg-clip-text text-transparent">
              Department
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-3xl text-lg font-light text-blue-100/90 md:text-2xl"
          >
            Building tomorrow&apos;s technology leaders through innovative
            education, cutting-edge research, and strong industry partnerships.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#programs"
              className="group inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/90 px-6 py-3 font-semibold text-indigo-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Programs
              <svg
                className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-2 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <StatCard
              icon={<GraduationCap className="h-6 w-6" />}
              label="Students"
              value="500+"
            />
            <StatCard
              icon={<Users className="h-6 w-6" />}
              label="Faculty"
              value="9"
            />
            <StatCard
              icon={<Award className="h-6 w-6" />}
              label="Years"
              value="11"
            />
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            variants={fadeUp}
            href="#mission"
            className="group mx-auto mt-10 inline-flex items-center gap-2 text-blue-200/80 transition hover:text-white"
            aria-label="Scroll to mission"
          >
            <span className="text-sm">Learn about our mission</span>
            <svg
              className="h-5 w-5 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/** --- Small presentational component --- */
function StatCard({ icon, label, value }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left backdrop-blur"
      role="group"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-blue-200">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold leading-none text-white">
          {value}
        </div>
        <div className="text-xs tracking-wide text-blue-200/90">{label}</div>
      </div>
    </motion.div>
  );
}
