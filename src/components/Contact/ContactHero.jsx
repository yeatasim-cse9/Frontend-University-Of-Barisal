import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full translate-x-48 translate-y-48 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mt-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <span className="text-emerald-200 font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Contact
            <span className="block bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-4xl mx-auto font-light">
            We're here to help with your questions, applications, and any
            assistance you need
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "+880431-2176860",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "info@cse.bu.ac.bd",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "Kornokathi, Barishal",
                gradient: "from-teal-500 to-cyan-500",
              },
              {
                icon: Clock,
                label: "Office Hours",
                value: "Sun-Thu: 9AM-5PM",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 mb-10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-emerald-200 text-sm font-medium mb-1">
                    {contact.label}
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {contact.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
