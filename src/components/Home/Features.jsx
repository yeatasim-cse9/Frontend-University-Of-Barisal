import { features } from "../../data/dummyData";
import { GraduationCap, Brain, Building, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const icons = { GraduationCap, Brain, Building, Monitor };

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in <span className="text-blue-600">CSE Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class education with modern facilities and
              industry connections
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-10 -mt-10"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
