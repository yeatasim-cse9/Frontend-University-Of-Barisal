import { useState } from "react";
import { motion } from "framer-motion";
import { quickContacts } from "../../data/dummyData";
import {
  AlertTriangle,
  BookOpen,
  Monitor,
  Phone,
  Copy,
  Check,
} from "lucide-react";

const icons = { AlertTriangle, BookOpen, Monitor };

const accents = {
  AlertTriangle: {
    chip: "bg-red-100 text-red-800",
    icon: "text-red-500",
    ring: "ring-red-100",
    gradient: "from-red-50 to-rose-50",
  },
  BookOpen: {
    chip: "bg-blue-100 text-blue-800",
    icon: "text-blue-600",
    ring: "ring-blue-100",
    gradient: "from-blue-50 to-cyan-50",
  },
  Monitor: {
    chip: "bg-emerald-100 text-emerald-800",
    icon: "text-emerald-600",
    ring: "ring-emerald-100",
    gradient: "from-emerald-50 to-green-50",
  },
};

export default function QuickContacts() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (phone) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(phone);
      }
      setCopied(phone);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // Clipboard may be blocked; we silently ignore
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Quick&nbsp;<span className="text-emerald-600">Contacts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-gray-600 max-w-xl mx-auto mt-3"
          >
            Essential phone numbers for immediate assistance.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickContacts.map((group, idx) => {
            const Icon = icons[group.icon] || AlertTriangle;
            const accent = accents[group.icon] || accents.AlertTriangle;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow ring-1 ${accent.ring} overflow-hidden`}
              >
                {/* Soft gradient wash */}
                <div
                  className={`pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent.gradient}`}
                />

                <div className="relative">
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`h-9 w-9 rounded-lg bg-white shadow-inner flex items-center justify-center ${accent.icon}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${accent.chip}`}
                    >
                      {group.category}
                    </span>
                  </div>

                  {/* Contacts list */}
                  <div className="divide-y divide-gray-200">
                    {group.contacts.map((c) => {
                      const isCopied = copied === c.phone;
                      return (
                        <div
                          key={`${c.title}-${c.phone}`}
                          className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                        >
                          <div className="min-w-0">
                            <p className="text-gray-800 font-medium truncate">
                              {c.title}
                            </p>
                            {c.note ? (
                              <p className="text-xs text-gray-500 mt-0.5">
                                {c.note}
                              </p>
                            ) : null}
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={`tel:${c.phone}`}
                              aria-label={`Call ${c.title} at ${c.phone}`}
                              className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700 text-sm font-semibold hover:bg-emerald-100 transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              {c.phone}
                            </a>

                            <button
                              type="button"
                              onClick={() => handleCopy(c.phone)}
                              aria-live="polite"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                              title="Copy number"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-600" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  Copy
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Screen reader feedback container */}
        <span className="sr-only" aria-live="polite">
          {copied ? `Copied ${copied} to clipboard` : ""}
        </span>
      </div>
    </section>
  );
}
