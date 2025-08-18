import { useState, memo } from "react";
import { testimonials } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

function Avatar({ name, src, size = 48 }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src && !error) {
    return (
      <img
        src={src}
        alt={`${name} portrait`}
        width={size}
        height={size}
        className="h-12 w-12 rounded-full object-cover shadow"
        loading="lazy"
        onError={() => setError(true)}
      />
    );
  }
  return (
    <div className="h-12 w-12 rounded-full bg-blue-600 text-white grid place-items-center font-bold shadow">
      {initials}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const TestimonialCard = memo(function TestimonialCard({ t, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="group"
    >
      <article className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-blue-500/10" />

        {/* Rating */}
        <div
          className="mb-4 flex items-center gap-2"
          aria-label="Alumni 5 star rating"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <div className="relative mb-6">
          <Quote
            className="absolute -left-2 -top-2 h-8 w-8 text-blue-200"
            aria-hidden="true"
          />
          <p className="pl-6 text-lg italic leading-relaxed text-gray-700">
            “{t.message}”
          </p>
        </div>

        {/* Person */}
        <div className="flex items-center gap-4">
          <Avatar name={t.name} src={t.image} />
          <div>
            <h4 className="font-bold text-gray-900">{t.name}</h4>
            <p className="text-sm font-medium text-blue-600">{t.designation}</p>
            {t.batch && <p className="text-xs text-gray-500">{t.batch}</p>}
          </div>
        </div>
      </article>
    </motion.div>
  );
});

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              SUCCESS STORIES
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              What Our <span className="text-blue-600">Alumni</span> Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Hear from our successful graduates who are making their mark in
              the tech industry
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.id ?? idx} t={t} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
