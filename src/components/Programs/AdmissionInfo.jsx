// src/components/Programs/AdmissionInfo.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckSquare,
  FileText,
  Clock,
  Users,
  GraduationCap,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

import { admissionRequirements } from "../../data/dummyData";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

function BulletList({ items, bullet = "dot", className = "" }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((text, idx) => (
        <li
          key={`${text}-${idx}`}
          className="flex items-start gap-2 text-sm text-gray-700"
        >
          {bullet === "check" ? (
            <CheckSquare className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
          ) : (
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
          )}
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedSteps({ steps, accent = "emerald" }) {
  const color =
    accent === "blue"
      ? "bg-blue-600"
      : accent === "purple"
      ? "bg-purple-600"
      : "bg-emerald-600";
  return (
    <div className="space-y-3">
      {steps.map((s, i) => (
        <div key={`${s}-${i}`} className="flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${color}`}
          >
            {i + 1}
          </div>
          <span className="text-sm text-gray-700">{s}</span>
        </div>
      ))}
    </div>
  );
}

export default function AdmissionInfo() {
  const levels = useMemo(
    () => [
      {
        key: "undergraduate",
        label: "Undergraduate",
        icon: Users,
        accent: "emerald",
      },
      {
        key: "postgraduate",
        label: "Postgraduate",
        icon: GraduationCap,
        accent: "blue",
      },
    ],
    []
  );

  const [active, setActive] = useState("undergraduate");
  const activeData = admissionRequirements?.[active];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              ADMISSION INFORMATION
            </div>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
              How to <span className="text-emerald-600">Apply</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need to know about admission requirements and the
              application process.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-8 flex w-full max-w-2xl items-center justify-center">
          <div className="flex w-full rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
            {levels.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Level Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="group mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {/* Column 1 — Eligibility */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
            <div className="mb-6 flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  active === "undergraduate"
                    ? "bg-gradient-to-br from-emerald-500 to-teal-500"
                    : "bg-gradient-to-br from-blue-500 to-indigo-500"
                }`}
              >
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Eligibility</h3>
                <p className="text-sm text-gray-600">Who can apply</p>
              </div>
            </div>
            <BulletList items={activeData.eligibility} bullet="dot" />
          </div>

          {/* Column 2 — Process */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Application Process
                </h3>
                <p className="text-sm text-gray-600">Step-by-step guide</p>
              </div>
            </div>
            <NumberedSteps
              steps={activeData.process}
              accent={active === "undergraduate" ? "emerald" : "blue"}
            />
          </div>

          {/* Column 3 — Documents */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Required Documents
                </h3>
                <p className="text-sm text-gray-600">
                  Prepare these before applying
                </p>
              </div>
            </div>
            <BulletList items={activeData.documents} bullet="check" />
          </div>
        </motion.div>

        {/* CTA Row */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-stretch justify-between gap-4 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <h4 className="text-lg font-semibold text-emerald-900">
              Ready to apply?
            </h4>
            <p className="text-sm text-emerald-800">
              Submit your application online or learn more about admission
              timelines and fees.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://bu.ac.bd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Apply Now <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              Ask Admissions
              <HelpCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Optional: Quick FAQ (edit or remove as you like) */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h5 className="mb-4 text-base font-semibold text-gray-900">
              Quick FAQs
            </h5>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-medium text-gray-800">
                  Can I apply before I receive final results?
                </p>
                <p className="text-sm text-gray-600">
                  Yes. You may apply with provisional documents and submit final
                  transcripts later as per the university’s deadline.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Is there any application fee waiver?
                </p>
                <p className="text-sm text-gray-600">
                  Fee waivers may be available for eligible applicants. Contact
                  the admissions office for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
