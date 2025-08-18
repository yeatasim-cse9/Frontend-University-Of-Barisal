// src/components/Programs/ProgramOverview.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { detailedPrograms } from "../../data/dummyData";
import { Clock, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

function clsx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProgramOverview() {
  // keep the keys so we can create stable URLs later
  const programs = Object.entries(detailedPrograms);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              DEGREE PROGRAMS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your{" "}
              <span className="text-emerald-600">Academic Path</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive degree programs designed to meet
              industry demands and academic excellence.
            </p>
          </motion.div>
        </div>

        {/* Programs */}
        <div className="space-y-16">
          {programs.map(([key, program], idx) => {
            const {
              image,
              title,
              shortTitle,
              duration,
              seats,
              establishment,
              description,
              credits,
              highlights = [],
            } = program || {};

            const href = `/programs/${slugify(key)}`;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={clsx(
                    "grid items-center gap-12 lg:grid-cols-2",
                    idx % 2 === 1 && "lg:grid-flow-col-dense"
                  )}
                >
                  {/* Program Image */}
                  <div
                    className={clsx(
                      "relative",
                      idx % 2 === 1 && "lg:col-start-2"
                    )}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                      {/* Image or fallback */}
                      {image ? (
                        <img
                          src={image}
                          alt={title || shortTitle || "Program cover image"}
                          loading="lazy"
                          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="h-80 w-full bg-gradient-to-br from-emerald-200 to-teal-200" />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />

                      <div className="absolute bottom-6 left-6 text-white drop-shadow">
                        <h3 className="mb-2 text-2xl font-bold">
                          {shortTitle || title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          {duration && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {duration}
                            </span>
                          )}
                          {typeof seats !== "undefined" && (
                            <span className="inline-flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {seats} Seats
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Content */}
                  <div
                    className={clsx(
                      idx % 2 === 1 && "lg:col-start-1 lg:row-start-1"
                    )}
                  >
                    <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 transition-all duration-500 group-hover:shadow-xl">
                      <div className="mb-4 flex items-center gap-3">
                        {establishment && (
                          <>
                            <Award className="h-6 w-6 text-emerald-600" />
                            <span className="text-sm font-semibold text-emerald-600">
                              EST. {establishment}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 md:text-3xl">
                        {title}
                      </h3>

                      {description && (
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                          {description}
                        </p>
                      )}

                      {/* Program Stats */}
                      <div className="mb-6 grid grid-cols-3 gap-4">
                        {duration && (
                          <div className="rounded-xl bg-white/70 p-3 text-center">
                            <div className="text-2xl font-bold text-emerald-600">
                              {duration}
                            </div>
                            <div className="text-xs text-gray-600">
                              Duration
                            </div>
                          </div>
                        )}
                        {credits && (
                          <div className="rounded-xl bg-white/70 p-3 text-center">
                            <div className="text-2xl font-bold text-emerald-600">
                              {credits}
                            </div>
                            <div className="text-xs text-gray-600">Credits</div>
                          </div>
                        )}
                        {typeof seats !== "undefined" && (
                          <div className="rounded-xl bg-white/70 p-3 text-center">
                            <div className="text-2xl font-bold text-emerald-600">
                              {seats}
                            </div>
                            <div className="text-xs text-gray-600">Seats</div>
                          </div>
                        )}
                      </div>

                      {/* Highlights */}
                      {highlights.length > 0 && (
                        <div className="mb-8">
                          <h4 className="mb-3 font-semibold text-gray-800">
                            Program Highlights:
                          </h4>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {highlights.map((highlight, i) => (
                              <div
                                key={`${highlight}-${i}`}
                                className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        to={href}
                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl"
                        aria-label={`Learn more about ${title || shortTitle}`}
                      >
                        Learn More About This Program
                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
