import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

export default function SearchFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const designations = [
    { value: "all", label: "All Positions" },
    { value: "Associate Professor", label: "Associate Professor" },
    { value: "Assistant Professor", label: "Assistant Professor" },
    { value: "Lecturer", label: "Lecturer" },
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleFilter = (value) => {
    setSelectedDesignation(value);
    onFilter?.(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedDesignation("all");
    onSearch?.("");
    onFilter?.("all");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search faculty by name or specialization..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters((s) => !s)}
          className="lg:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          aria-expanded={showFilters}
          aria-controls="filters-row"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>

        {/* Filters Row */}
        <div
          id="filters-row"
          className={`w-full lg:w-auto ${
            showFilters ? "flex" : "hidden"
          } lg:flex flex-col sm:flex-row items-center gap-4`}
        >
          <select
            value={selectedDesignation}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
          >
            {designations.map((designation) => (
              <option key={designation.value} value={designation.value}>
                {designation.label}
              </option>
            ))}
          </select>

          {(searchTerm || selectedDesignation !== "all") && (
            <button
              onClick={clearSearch}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
