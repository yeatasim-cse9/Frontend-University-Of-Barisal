import { motion } from "framer-motion";
import { researchPublications } from "../../data/dummyData";
import {
  FileText,
  ExternalLink,
  Quote,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function ResearchPublications() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm text-teal-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              RESEARCH OUTPUT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Recent <span className="text-teal-300">Publications</span>
            </h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Our faculty's contributions to the global knowledge base through
              peer-reviewed research
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {researchPublications.map((publication, idx) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm text-teal-200 px-2 py-1 rounded-full text-xs font-medium border border-white/30">
                        {publication.type}
                      </span>
                      <div className="flex items-center gap-1 text-teal-300 text-sm">
                        <Calendar className="w-4 h-4" />
                        {publication.year}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors leading-tight">
                  {publication.title}
                </h3>

                {/* Authors */}
                <div className="mb-4">
                  <p className="text-teal-100 text-sm">
                    <span className="font-semibold">Authors: </span>
                    {publication.authors.join(", ")}
                  </p>
                </div>

                {/* Journal */}
                <div className="mb-4">
                  <p className="text-teal-100 text-sm">
                    <span className="font-semibold">Published in: </span>
                    <span className="text-teal-200 font-medium">
                      {publication.journal}
                    </span>
                  </p>
                </div>

                {/* Abstract */}
                <div className="mb-6 flex-grow">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-teal-400/50" />
                    <p className="text-teal-100 text-sm leading-relaxed pl-4 italic">
                      {publication.abstract}
                    </p>
                  </div>
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, keyIdx) => (
                      <span
                        key={keyIdx}
                        className="bg-white/10 backdrop-blur-sm text-teal-200 px-2 py-1 rounded-full text-xs border border-white/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-1 text-teal-300">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {publication.citations} citations
                    </span>
                  </div>

                  <motion.a
                    href={publication.link}
                    className="flex items-center gap-2 text-teal-200 hover:text-white transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Paper
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Research Impact
            </h3>

            <div className="grid sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300 mb-2">50+</div>
                <div className="text-teal-100 text-sm">Total Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-2">
                  1,200+
                </div>
                <div className="text-teal-100 text-sm">Total Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">25</div>
                <div className="text-teal-100 text-sm">Journal Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-300 mb-2">
                  15
                </div>
                <div className="text-teal-100 text-sm">Conference Papers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
