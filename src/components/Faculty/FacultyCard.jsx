import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap, Award } from "lucide-react";

export default function FacultyCard({ faculty, index }) {
  const [imgError, setImgError] = useState(false);
  const isChairman = String(faculty?.designation || "")
    .toLowerCase()
    .includes("chairman");

  const initials = String(faculty?.name || "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border ${
          isChairman
            ? "border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50"
            : "border-gray-100"
        } group-hover:border-blue-200 group-hover:-translate-y-2 relative overflow-hidden h-full`}
      >
        {/* Chairman Badge */}
        {isChairman && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Award className="w-3 h-3" />
            Chairman
          </div>
        )}

        {/* Decorative */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-10 -mt-10" />

        {/* Photo / Fallback */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="w-full h-full rounded-3xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-xl relative">
            {!imgError && faculty?.image ? (
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className={`absolute inset-0 ${
                  isChairman
                    ? "bg-gradient-to-br from-yellow-500 to-orange-600"
                    : "bg-gradient-to-br from-blue-500 to-purple-600"
                } rounded-3xl flex items-center justify-center text-white font-bold text-2xl`}
              >
                {initials}
              </div>
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          </div>

          {/* Status indicator (visual accent) */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
            {faculty?.name}
          </h3>

          <p
            className={`font-semibold text-sm mb-4 ${
              isChairman ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {faculty?.designation}
          </p>

          {/* Education */}
          {faculty?.education && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{faculty.education}</span>
            </div>
          )}

          {/* Specialization */}
          {faculty?.specialization && (
            <div className="mb-6">
              <span
                className={`inline-block ${
                  isChairman
                    ? "bg-orange-100 text-orange-800"
                    : "bg-blue-100 text-blue-800"
                } px-4 py-2 rounded-full text-xs font-semibold`}
              >
                {faculty.specialization}
              </span>
            </div>
          )}

          {/* Contacts */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            {faculty?.email && (
              <a
                href={`mailto:${faculty.email}`}
                className="flex items-center justify-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group/email p-2 rounded-lg hover:bg-blue-50"
                title={faculty.email}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm truncate group-hover/email:text-blue-600">
                  {faculty.email}
                </span>
              </a>
            )}

            {faculty?.phone && (
              <a
                href={`tel:${String(faculty.phone).replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group/phone p-2 rounded-lg hover:bg-blue-50"
                title={faculty.phone}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm group-hover/phone:text-blue-600">
                  {faculty.phone}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`pointer-events-none absolute inset-0 ${
            isChairman
              ? "bg-gradient-to-t from-orange-600/5"
              : "bg-gradient-to-t from-blue-600/5"
          } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
        ></div>
      </div>
    </motion.div>
  );
}
