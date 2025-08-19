import { motion } from "framer-motion";
import { alumniStories } from "../../data/dummyData";
import { Award, ExternalLink } from "lucide-react";

export default function AlumniNetwork() {
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
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Alumni Network</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Inspiring success stories from our graduates who are making their
              mark in the global tech industry
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {alumniStories.map((alumni, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {alumni.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm">
                      {alumni.position}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {alumni.company} • {alumni.batch}
                    </p>
                  </div>
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                  "{alumni.story}"
                </blockquote>

                <div className="border-t border-green-200 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="font-semibold text-gray-800 text-sm">
                      Key Achievement:
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{alumni.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alumni Network CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Alumni Network
            </h3>
            <p className="text-green-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Connect with fellow graduates, share experiences, and contribute
              to the growth of our university community. Together, we can
              achieve more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register as Alumni
                <ExternalLink className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Alumni Directory
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
