import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ChairmanMessage() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20">
            MESSAGE FROM CHAIRMAN
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Chairman Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-4xl">RHF</span>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 text-left"
            >
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200/50" />
                <blockquote className="text-lg md:text-xl leading-relaxed text-blue-50 pl-8 italic">
                  "Welcome to the Department of Computer Science & Engineering
                  at University of Barishal. Our department is committed to
                  providing world-class education that combines theoretical
                  knowledge with practical skills. We strive to nurture
                  innovative minds who will shape the future of technology and
                  contribute meaningfully to society.
                  <br />
                  <br />
                  We believe in fostering creativity, critical thinking, and
                  ethical responsibility among our students while maintaining
                  the highest standards of academic excellence."
                </blockquote>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h4 className="text-2xl font-bold mb-2">
                  Dr. Rahat Hossain Faisal
                </h4>
                <p className="text-blue-200 font-medium text-lg">
                  Associate Professor & Chairman
                </p>
                <p className="text-blue-100 text-sm mt-1">
                  Department of Computer Science & Engineering
                </p>
                <p className="text-blue-100 text-sm">University of Barishal</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
