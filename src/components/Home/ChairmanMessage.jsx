import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { facultyMembers } from "../../data/dummyData";

function InitialAvatar({ name }) {
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 3)
        .toUpperCase(),
    [name]
  );
  return (
    <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center shadow-xl">
      <span className="text-white font-bold text-4xl">{initials}</span>
    </div>
  );
}

function ChairmanPhoto({ name, src }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-48 h-48 rounded-3xl border border-white/30 bg-white/10 backdrop-blur-sm shadow-2xl grid place-items-center overflow-hidden">
      {src && !errored ? (
        <img
          src={src}
          alt={`${name} portrait`}
          className="w-40 h-40 rounded-2xl object-cover"
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <InitialAvatar name={name} />
      )}
    </div>
  );
}

export default function ChairmanMessage() {
  // Try to find the chairman from your data; fallback to sensible defaults
  const chairman = useMemo(() => {
    const byTitle =
      facultyMembers.find((f) =>
        String(f.designation || "")
          .toLowerCase()
          .includes("chairman")
      ) || facultyMembers[0];

    return (
      byTitle || {
        name: "Department Chair",
        designation: "Associate Professor & Chairman",
        image: "",
      }
    );
  }, []);

  const name = chairman?.name || "Department Chair";
  const designation = chairman?.designation || "Associate Professor & Chairman";
  const image = chairman?.image || "";

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-20"
      aria-labelledby="chairman-message-title"
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-white"
        >
          <div className="mb-8 flex justify-center">
            <a
              href="/about#chairman"
              className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-sm hover:bg-white/15"
              id="chairman-message-title"
            >
              MESSAGE FROM CHAIRMAN
            </a>
          </div>

          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <ChairmanPhoto name={name} src={image} />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative mb-8">
                <Quote
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 h-12 w-12 text-blue-200/50"
                />
                <blockquote className="pl-8 text-lg italic leading-relaxed text-blue-50 md:text-xl">
                  <p>
                    “Welcome to the Department of Computer Science &amp;
                    Engineering at University of Barishal. Our department is
                    committed to providing world-class education that combines
                    theoretical knowledge with practical skills. We strive to
                    nurture innovative minds who will shape the future of
                    technology and contribute meaningfully to society.
                  </p>
                  <br />
                  <p>
                    We believe in fostering creativity, critical thinking, and
                    ethical responsibility among our students while maintaining
                    the highest standards of academic excellence.”
                  </p>
                </blockquote>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h4 className="mb-1 text-2xl font-bold">{name}</h4>
                <p className="text-lg font-medium text-blue-200">
                  {designation}
                </p>
                <p className="mt-1 text-sm text-blue-100">
                  Department of Computer Science &amp; Engineering
                </p>
                <p className="text-sm text-blue-100">University of Barishal</p>

                <a
                  href="/about#chairman"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
