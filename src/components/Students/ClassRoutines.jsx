import { motion } from "framer-motion";
import { useState } from "react";
import { classRoutines } from "../../data/dummyData";
import { Calendar, Clock, Download } from "lucide-react";

export default function ClassRoutines() {
  const [selectedYear, setSelectedYear] = useState("1st Year");
  const [selectedSemester, setSeclectedSemester] = useState("1st Semester");

  const years = Object.keys(classRoutines);
  const semesters = Object.keys(classRoutines[selectedYear] || {});
  const currentRoutine = classRoutines[selectedYear]?.[selectedSemester] || [];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CLASS SCHEDULES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Class <span className="text-blue-600">Routines</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check your class schedules, exam dates, and important academic
              calendar events
            </p>
          </motion.div>
        </div>

        {/* Routine Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-800">
                Select Schedule:
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setSeclectedSemester(
                    Object.keys(classRoutines[e.target.value])[0]
                  );
                }}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={selectedSemester}
                onChange={(e) => setSeclectedSemester(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
              </select>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Routine Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <h3 className="text-xl font-bold">
                {selectedYear} - {selectedSemester}
              </h3>
            </div>
            <p className="text-blue-100 mt-1">Class Schedule (Fall 2025)</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Time
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Sunday
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Monday
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Tuesday
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Wednesday
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Thursday
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentRoutine.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-blue-50">
                      {row.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {row.sunday}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {row.monday}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {row.tuesday}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {row.wednesday}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {row.thursday}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6"
        >
          <h4 className="font-semibold text-amber-800 mb-3">
            📋 Important Notes:
          </h4>
          <ul className="text-amber-700 space-y-1 text-sm">
            <li>
              • Classes start sharp at scheduled time. Please be punctual.
            </li>
            <li>• Lab sessions are mandatory and require prior preparation.</li>
            <li>
              • Any schedule changes will be notified through official channels.
            </li>
            <li>
              • For queries regarding routine, contact:{" "}
              <span className="font-medium">academic.office@bu.ac.bd</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
