import { motion } from "framer-motion";
import { Crown, Award, Mail, Phone } from "lucide-react";

export default function DepartmentLeadership() {
  const chairman = {
    name: "Dr. Rahat Hossain Faisal",
    designation: "Associate Professor & Chairman",
    phone: "+8801733977761",
    email: "rhfaisal@bu.ac.bd",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop",
    specialization: "Machine Learning, Data Mining",
    education: "PhD in Computer Science",
    message:
      "Leading the department with vision for excellence in computer science education and research innovation.",
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              DEPARTMENT LEADERSHIP
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our <span className="text-yellow-300">Chairman</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent"></div>
                </div>
                {/* Crown Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {chairman.name}
                </h3>
                <p className="text-yellow-300 font-semibold text-lg mb-4">
                  {chairman.designation}
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-blue-100">{chairman.education}</span>
                </div>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="text-yellow-200 font-medium">
                    {chairman.specialization}
                  </span>
                </div>

                <p className="text-blue-100 leading-relaxed mb-8 text-lg italic">
                  "{chairman.message}"
                </p>

                {/* Contact */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={`mailto:${chairman.email}`}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    <Mail className="w-5 h-5 text-yellow-300" />
                    <span className="text-white font-medium">
                      {chairman.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${chairman.phone}`}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    <Phone className="w-5 h-5 text-yellow-300" />
                    <span className="text-white font-medium">
                      {chairman.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
