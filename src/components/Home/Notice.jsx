import { notices } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Calendar, Bell, ArrowRight } from "lucide-react";

export default function Notice() {
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
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LATEST UPDATES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Important <span className="text-blue-600">Announcements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, events and important notices
              from our department
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {notices.map((notice, idx) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16"></div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Bell className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {notice.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {notice.date}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                        {notice.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold rounded-full capitalize border border-blue-200">
                          {notice.type}
                        </span>

                        <div className="flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Notices
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
