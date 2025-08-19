import { useMemo, useState } from "react";
import { events } from "../data/dummyData";

/* ---- helpers ---- */
const parseDate = (d) => {
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? null : dt;
};
const fmt = (d) =>
  parseDate(d)?.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }) || d;

const isUpcoming = (d) => {
  const dt = parseDate(d);
  if (!dt) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dt.setHours(0, 0, 0, 0);
  return dt >= today;
};

export default function EventsPage() {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("all"); // all | upcoming | past
  const [category, setCategory] = useState("all");

  // derive categories
  const categories = useMemo(() => {
    const set = new Set();
    events.forEach((e) => e.category && set.add(e.category));
    return ["all", ...Array.from(set)];
  }, []);

  // chronological (undated last)
  const sorted = useMemo(() => {
    return [...events]
      .map((e) => ({ ...e, _date: parseDate(e.date) }))
      .sort((a, b) => {
        if (!a._date && !b._date) return 0;
        if (!a._date) return 1;
        if (!b._date) return -1;
        return a._date - b._date;
      });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return sorted.filter((e) => {
      if (scope === "upcoming" && e._date && !isUpcoming(e._date)) return false;
      if (scope === "past" && e._date && isUpcoming(e._date)) return false;

      if (
        category !== "all" &&
        (e.category || "").toLowerCase() !== category.toLowerCase()
      ) {
        return false;
      }

      if (!q) return true;
      const hay = [e.title, e.description, e.location]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [sorted, scope, category, query]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* header */}
        <div className="text-center mt-10 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Events & Activities
          </h1>
          <p className="text-gray-600 mt-2">
            Find workshops, talks, and competitions in one place.
          </p>
        </div>

        {/* controls */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search (e.g. workshop, AI)"
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <select
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 bg-white"
          >
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 bg-white"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c[0].toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* meta */}
        <p className="text-sm text-gray-500 mb-4">
          Showing{" "}
          <span className="font-medium text-gray-700">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "event" : "events"}
        </p>

        {/* list */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-700">
            No results. Try clearing filters.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e) => (
              <article
                key={e.id ?? e.title}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* image */}
                {e.image ? (
                  <div className="h-40 bg-gray-100">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                {/* content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    {e.category && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5">
                        {e.category}
                      </span>
                    )}
                    {e.date && <span>{fmt(e.date)}</span>}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {e.title}
                  </h3>

                  {e.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {e.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {e.location || "BU Campus"}
                    </span>
                    {e.href || e.link ? (
                      <a
                        href={e.href || e.link}
                        className="text-blue-600 hover:underline"
                      >
                        Learn more
                      </a>
                    ) : (
                      <span className="text-gray-300">Learn more</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
