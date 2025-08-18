// src/components/Programs/CareerProspects.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { careerProspects } from "../../data/dummyData";
import {
  Code,
  BarChart,
  Brain,
  Shield,
  Users,
  Server,
  Building,
  ArrowRight,
} from "lucide-react";

const icons = { Code, BarChart, Brain, Shield, Users, Server };

export default function CareerProspects() {
  return (
    <section className="relative isolate overflow-hidden py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/30" />
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-96 w-96 -translate-x-48 -translate-y-48 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-96 w-96 translate-x-48 translate-y-48 rounded-full bg-purple-400/20 blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-sm">
              CAREER OPPORTUNITIES
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Your <span className="text-blue-300">Career Awaits</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-100">
              Explore diverse career paths and opportunities in the ever-growing
              technology industry.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {careerProspects.map((career, idx) => {
            const Icon = icons[career.icon] ?? Code;

            return (
              <motion.article
                key={`${career.title}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="group h-full"
                aria-label={`${career.title} career card`}
              >
                <div className="flex h-full flex-col rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/40 hover:bg-white/20 hover:shadow-2xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                    {career.title}
                  </h3>

                  <p className="mb-6 flex-grow leading-relaxed text-blue-100">
                    {career.description}
                  </p>

                  <div className="mb-6">
                    {career.salary && (
                      <>
                        <div className="mb-2 text-2xl font-bold text-green-300">
                          {career.salary}
                        </div>
                        <div className="text-sm text-blue-200">
                          Expected Salary Range
                        </div>
                      </>
                    )}
                  </div>

                  {Array.isArray(career.companies) &&
                    career.companies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold text-white">
                          Top Companies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.companies.map((company, companyIdx) => (
                            <span
                              key={`${company}-${companyIdx}`}
                              title={company}
                              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-blue-200 backdrop-blur-sm"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Primary CTA — route to Programs (adjust href as needed) */}
                  <Link
                    to="/programs"
                    className="group/btn mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                    aria-label={`Explore ${career.title} path`}
                  >
                    Explore This Career
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
            <Building
              className="mx-auto mb-4 h-12 w-12 text-blue-300"
              aria-hidden="true"
            />
            <h3 className="mb-4 text-2xl font-bold text-white">
              Ready to Start Your Journey?
            </h3>
            <p className="mb-6 leading-relaxed text-blue-100">
              Join our CSE program and unlock endless possibilities in the world
              of technology. Our graduates work at top companies worldwide and
              lead innovative projects.
            </p>
            <Link
              to="/programs"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-emerald-600 hover:to-teal-600 hover:shadow-2xl"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
