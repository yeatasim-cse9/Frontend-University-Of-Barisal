import { motion } from "framer-motion";
import { studentServices } from "../../data/dummyData";
import {
  GraduationCap,
  Briefcase,
  Heart,
  DollarSign,
  Settings,
  BookOpen,
  Mail,
} from "lucide-react";

const icons = {
  GraduationCap,
  Briefcase,
  Heart,
  DollarSign,
  Settings,
  BookOpen,
};

export default function StudentSupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              STUDENT SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We're Here to <span className="text-blue-300">Support You</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Comprehensive support services designed to help you succeed
              academically and personally
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentServices.map((service, idx) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-blue-100 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <a
                    href={`mailto:${service.contact}`}
                    className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group/contact p-3 rounded-xl hover:bg-white/10"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {service.contact}
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              24/7 Emergency Support
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              For urgent matters and emergencies, our support team is available
              round the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+8804312176860"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Emergency: +880431-2176860
              </a>
              <a
                href="mailto:emergency@bu.ac.bd"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Email: emergency@bu.ac.bd
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
