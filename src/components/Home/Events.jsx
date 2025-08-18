import { events } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function Events() {
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
              UPCOMING EVENTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest <span className="text-blue-600">Events & Activities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in exciting events, competitions, and learning
              opportunities
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">BU Campus</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
