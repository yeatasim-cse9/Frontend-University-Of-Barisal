import { memo, useState } from "react";
import { facultyMembers } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

function Avatar({ name, src, size = 80 }) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src && !errored) {
    return (
      <img
        src={src}
        alt={`${name} portrait`}
        width={size}
        height={size}
        className="w-20 h-20 rounded-2xl object-cover"
        onError={() => setErrored(true)}
      />
    );
  }
  return (
    <div
      className="w-20 h-20 rounded-2xl bg-blue-600 text-white grid place-items-center font-bold"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.06 },
  }),
};

function FacultyCard({ faculty, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="group h-full"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Accent bubble (very subtle) */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-blue-500/10" />
        <div className="mx-auto mb-4 flex-shrink-0">
          <Avatar name={faculty.name} src={faculty.image} />
        </div>

        <div className="flex min-h-0 flex-1 flex-col text-center">
          {/* Name */}
          <h3 className="mb-2 line-clamp-2 h-[3.5rem] text-lg font-bold leading-snug text-gray-900 group-hover:text-blue-600">
            {faculty.name}
          </h3>

          {/* Designation */}
          <p className="mb-4 line-clamp-2 h-12 text-sm font-medium text-blue-600">
            {faculty.designation}
          </p>

          {/* Contact */}
          <div className="mt-auto space-y-2 text-xs text-gray-700">
            {faculty.email && (
              <a
                href={`mailto:${faculty.email}`}
                className="mx-auto flex max-w-[12rem] items-center justify-center gap-2 truncate hover:text-blue-600"
                title={faculty.email}
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{faculty.email}</span>
              </a>
            )}
            {faculty.phone && (
              <a
                href={`tel:${faculty.phone.replace(/\s+/g, "")}`}
                className="mx-auto flex items-center justify-center gap-2 hover:text-blue-600"
                title={faculty.phone}
              >
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{faculty.phone}</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

const MemoFacultyCard = memo(FacultyCard);

export default function FacultyShowcase({ limit = 4 }) {
  const featuredFaculty = facultyMembers.slice(0, limit);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              OUR EXPERT FACULTY
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Meet Our{" "}
              <span className="text-blue-600">Distinguished Faculty</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Learn from experienced educators and researchers who are shaping
              the future of technology
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredFaculty.map((f, idx) => (
            <MemoFacultyCard key={f.id} faculty={f} index={idx} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <motion.a
            href="/faculty"
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="View all faculty members"
          >
            View All Faculty Members
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
