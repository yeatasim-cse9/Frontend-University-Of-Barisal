import { facultyMembers } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function FacultyShowcase() {
  // Show only first 4 faculty members for homepage
  const featuredFaculty = facultyMembers.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR EXPERT FACULTY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our{" "}
              <span className="text-blue-600">Distinguished Faculty</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from experienced educators and researchers who are shaping
              the future of technology
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredFaculty.map((faculty, idx) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full -mr-10 -mt-10"></div>

                {/* Faculty Image */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {faculty.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>

                <div className="text-center flex-1 flex flex-col">
                  {/* Name - Fixed height */}
                  <div className="h-14 flex items-center justify-center mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight text-center">
                      {faculty.name}
                    </h3>
                  </div>

                  {/* Designation - Fixed height */}
                  <div className="h-12 flex items-center justify-center mb-4">
                    <p className="text-blue-600 font-medium text-sm leading-tight text-center">
                      {faculty.designation}
                    </p>
                  </div>

                  {/* Contact Info - Fixed height */}
                  <div className="space-y-2 text-xs text-gray-600 mt-auto">
                    <div className="h-8 flex items-center justify-center">
                      {faculty.email && (
                        <div className="flex items-center justify-center gap-2 group/email cursor-pointer">
                          <Mail className="w-3 h-3 flex-shrink-0" />
                          <span className="group-hover/email:text-blue-600 transition-colors truncate max-w-32">
                            {faculty.email.length > 20
                              ? faculty.email.substring(0, 20) + "..."
                              : faculty.email}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="h-4 flex items-center justify-center">
                      {faculty.phone && (
                        <div className="flex items-center justify-center gap-2 group/phone cursor-pointer">
                          <Phone className="w-3 h-3 flex-shrink-0" />
                          <span className="group-hover/phone:text-blue-600 transition-colors">
                            {faculty.phone}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Faculty Button */}
        <div className="text-center">
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Faculty Members
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
