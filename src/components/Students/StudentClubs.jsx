import { motion } from "framer-motion";
import { studentClubs } from "../../data/dummyData";
import { Users, ArrowRight, Calendar } from "lucide-react";

export default function StudentClubs() {
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
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              STUDENT ORGANIZATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Student{" "}
              <span className="text-purple-600">Clubs & Activities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our vibrant community of student organizations and enhance
              your university experience
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studentClubs.map((club, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Club Image */}
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 relative overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-800">
                      <Users className="w-4 h-4" />
                      {club.members} members
                    </div>
                  </div>
                </div>

                {/* Club Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {club.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {club.description}
                  </p>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      Key Activities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {club.activities.map((activity, activityIdx) => (
                        <span
                          key={activityIdx}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Join Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join This Club
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Start a New Club?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have an idea for a new student organization? We support student
              initiatives and help you create communities around your interests
              and passions.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a New Club
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
