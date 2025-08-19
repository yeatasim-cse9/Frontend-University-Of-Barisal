import { motion } from "framer-motion";
import { officeHours, socialMediaLinks } from "../../data/dummyData";
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

const socials = { Facebook, Linkedin, Youtube, Twitter };

const brandStyles = {
  Facebook: {
    gradient: "from-blue-500 to-blue-600",
    ring: "ring-blue-400/30",
  },
  Twitter: {
    gradient: "from-sky-500 to-sky-600",
    ring: "ring-sky-400/30",
  },
  Youtube: {
    gradient: "from-red-500 to-rose-600",
    ring: "ring-red-400/30",
  },
  Linkedin: {
    gradient: "from-sky-600 to-blue-700",
    ring: "ring-sky-500/30",
  },
};

// naive match: highlights a row if today's short day name is inside the text, e.g., "Sun", "Mon"
function isTodayRow(daysStr) {
  try {
    const short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      new Date().getDay()
    ];
    return new RegExp(`\\b${short}\\b`, "i").test(daysStr || "");
  } catch {
    return false;
  }
}

export default function ContactInfo() {
  const mapsHref =
    "https://maps.google.com/?q=University+of+Barishal,+Kornokathi,+Barishal+8254";

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 relative z-10">
        {/* office hours + address */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Office Hours */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-emerald-50/40 p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Office Hours</h3>
            </div>

            <div className="divide-y divide-gray-200 rounded-xl border border-emerald-100 bg-white/70 backdrop-blur-sm">
              {Object.values(officeHours).map((o) => {
                const active = isTodayRow(o.days);
                return (
                  <div
                    key={`${o.days}-${o.time}`}
                    className={`flex items-center justify-between px-4 py-3 ${
                      active ? "bg-emerald-50/80" : ""
                    }`}
                  >
                    <span
                      className={`${
                        active
                          ? "font-semibold text-emerald-900"
                          : "text-gray-700"
                      }`}
                    >
                      {o.days}
                    </span>
                    <span
                      className={`${
                        active
                          ? "text-emerald-700 font-semibold"
                          : "text-gray-800 font-medium"
                      }`}
                    >
                      {o.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <p className="mt-3 text-xs text-gray-500">
              Rows highlighted indicate today’s schedule.
            </p>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50/40 p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Visit Us</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              University of Barishal
              <br />
              Kornokathi, Barishal 8254
              <br />
              Bangladesh
            </p>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-2 text-blue-700 transition-colors hover:bg-blue-50"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="font-medium">View on Google Maps</span>
            </a>
          </div>
        </motion.div>

        {/* social follow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="self-start"
        >
          <h3 className="mb-6 text-xl font-semibold">Follow Us</h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {socialMediaLinks.map((s, idx) => {
              const Icon = socials[s.icon] || Facebook;
              const brand = brandStyles[s.icon] || brandStyles.Facebook;

              return (
                <motion.a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 p-4 shadow-sm ring-1 ring-gray-200 backdrop-blur"
                >
                  {/* glow */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur transition-opacity group-hover:opacity-100 ${brand.ring}`}
                  />
                  {/* gradient wash on hover */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100 ${brand.gradient}`}
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-inner">
                      <Icon className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 group-hover:text-white transition-colors">
                        {s.platform}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-white/90 transition-colors">
                        Stay updated with news & events
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
