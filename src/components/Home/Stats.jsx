import { stats } from "../../data/dummyData";
import { Users, User, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const icons = { Users, User, BookOpen, Award };

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              OUR ACHIEVEMENTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success in Numbers
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Building excellence through continuous growth and outstanding
              achievements
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = icons[stat.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium text-lg">
                    {stat.label}
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
