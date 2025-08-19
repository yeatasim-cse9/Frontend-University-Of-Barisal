import { motion } from "framer-motion";
import { researchAreas } from "../../data/dummyData";
import {
  Brain,
  Code,
  Shield,
  Database,
  Users,
  Smartphone,
  ArrowRight,
  User,
  Search,
} from "lucide-react";

const icons = { Brain, Code, Shield, Database, Users, Smartphone };

export default function ResearchAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              RESEARCH FOCUS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-600">Research Areas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge research across diverse domains of computer science
              and engineering
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, idx) => {
            const Icon = icons[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Area Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Search className="w-4 h-4" />
                          {area.projects} Projects
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {area.faculty.length} Faculty
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                      {area.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {area.description}
                    </p>

                    {/* Keywords */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 text-sm mb-3">
                        Research Keywords:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.keywords.map((keyword, keyIdx) => (
                          <span
                            key={keyIdx}
                            className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Faculty */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">
                        Lead Faculty:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {area.faculty.map((faculty, fIdx) => (
                          <li key={fIdx}>• {faculty}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Research
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
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
