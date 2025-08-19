import { useMemo } from "react";
import { events } from "../../data/dummyData";

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseEventDate(d) {
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? null : dt;
}

function formatEventDate(d) {
  const dt = parseEventDate(d);
  if (!dt) return d;
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Events({ limit = 6 }) {
  const upcoming = useMemo(() => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    return (
      events
        .map((e) => ({ ...e, _date: parseEventDate(e.date) }))
        // keep undated or future-dated
        .filter((e) => !e._date || e._date >= startOfToday)
        // chronological; undated at the end
        .sort((a, b) => {
          if (!a._date && !b._date) return 0;
          if (!a._date) return 1;
          if (!b._date) return -1;
          return a._date - b._date;
        })
        .slice(0, limit)
    );
  }, [limit]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* header */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            UPCOMING EVENTS
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            Latest Events & Activities
          </h2>
          <p className="mt-2 text-gray-600">
            Join workshops, talks, and competitions across our community.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => {
            const href = `/events/${event.id ?? slugify(event.title)}`;
            const dateText = formatEventDate(event.date);
            const location = event.location || "BU Campus";

            return (
              <a
                key={event.id ?? event.title}
                href={href}
                className="group block rounded-xl border border-gray-200 bg-white overflow-hidden transition hover:shadow-md"
                aria-label={`Learn more about ${event.title}`}
              >
                {event.image ? (
                  <div className="h-40 bg-gray-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    {event.category && (
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 font-medium">
                        {event.category}
                      </span>
                    )}
                    {event.date && <span>{dateText}</span>}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {event.description}
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500">{location}</span>
                    <span className="text-blue-600 group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* view all */}
        <div className="mt-8 text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400"
          >
            View all events →
          </a>
        </div>
      </div>
    </section>
  );
}
