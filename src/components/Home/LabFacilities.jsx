import { labFacilities } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Code, Network, Cpu, Lightbulb, Users } from "lucide-react";

const icons = { Code, Network, Cpu, Lightbulb };

export default function LabFacilities() {
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
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              STATE-OF-THE-ART
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modern <span className="text-blue-600">Lab Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Well-equipped laboratories with latest technology for hands-on
              learning
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {labFacilities.map((lab, idx) => {
            const Icon = icons[lab.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full -mr-10 -mt-10"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {lab.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{lab.capacity}</span>
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
