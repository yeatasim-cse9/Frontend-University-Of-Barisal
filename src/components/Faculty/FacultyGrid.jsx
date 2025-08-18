import { useState, useMemo } from "react";
import { facultyMembers } from "../../data/dummyData";
import FacultyCard from "./FacultyCard";
import SearchFilter from "./SearchFilter";
import { motion } from "framer-motion";

export default function FacultyGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDesignation, setFilterDesignation] = useState("all");

  const filteredFaculty = useMemo(() => {
    let filtered = [...facultyMembers];

    // Search by name or specialization
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (f) =>
          String(f.name || "")
            .toLowerCase()
            .includes(q) ||
          String(f.specialization || "")
            .toLowerCase()
            .includes(q)
      );
    }

    // Filter by designation
    if (filterDesignation !== "all") {
      filtered = filtered.filter((f) =>
        String(f.designation || "").includes(filterDesignation)
      );
    }

    return filtered;
  }, [searchTerm, filterDesignation]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MEET THE TEAM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Faculty Members</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals with expertise in various fields of
              computer science and engineering
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <SearchFilter
          onSearch={setSearchTerm}
          onFilter={setFilterDesignation}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing {filteredFaculty.length} of {facultyMembers.length} faculty
            members
            {searchTerm && (
              <span className="text-blue-600 font-medium">
                {" "}
                for "{searchTerm}"
              </span>
            )}
          </p>
        </div>

        {/* Faculty Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFaculty.map((faculty, index) => (
              <FacultyCard key={faculty.id} faculty={faculty} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No faculty members found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
