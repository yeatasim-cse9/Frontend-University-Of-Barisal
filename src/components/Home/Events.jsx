import { useMemo } from "react";
import { events } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseEventDate(d) {
  // Supports formats like "September 15, 2025"
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? null : dt;
}

function formatEventDate(d) {
  const dt = parseEventDate(d);
  if (!dt) return d; // fallback to original
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Events({ limit = 6 }) {
  const today = new Date();

  const upcoming = useMemo(() => {
    return events
      .map((e) => ({ ...e, _date: parseEventDate(e.date) }))
      .filter((e) => !e._date || e._date >= new Date(today.toDateString())) // keep if date missing or in the future
      .sort((a, b) => {
        if (!a._date && !b._date) return 0;
        if (!a._date) return 1;
        if (!b._date) return -1;
        return a._date - b._date;
      })
      .slice(0, limit);
  }, [limit]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {upcoming.map((event, idx) => {
            const href = `/events/${event.id ?? slugify(event.title)}`;
            const dateText = formatEventDate(event.date);
            const location = event.location || "BU Campus";

            return (
              <motion.a
                key={event.id ?? event.title}
                href={href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group block"
                aria-label={`Learn more about ${event.title}`}
              >
                <article className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  {/* Media */}
                  <div className="relative h-48 bg-gray-100">
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center text-gray-400">
                        <Calendar className="w-8 h-8" />
                      </div>
                    )}

                    {/* Overlay & category */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-90" />
                    {event.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                          {event.category}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {dateText}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {event.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{location}</span>
                      </div>

                      <span className="flex items-center gap-2 text-blue-600 font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </motion.a>
            );
          })}
        </div>

        {/* Optional: View all */}
        <div className="mt-12 text-center">
          <motion.a
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            View All Events
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
