import { motion } from "framer-motion";
import { departmentContacts } from "../../data/dummyData";
import {
  GraduationCap,
  Crown,
  Users,
  Search,
  Settings,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const icons = { GraduationCap, Crown, Users, Search, Settings, FileText };

export default function DepartmentContacts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Department-level&nbsp;
            <span className="text-emerald-600">Contacts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach the right office directly for faster help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentContacts.map((d, idx) => {
            const Icon = icons[d.icon];
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {d.department}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{d.description}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <a
                      href={`tel:${d.phone}`}
                      className="font-medium text-gray-800"
                    >
                      {d.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 break-all">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <a
                      href={`mailto:${d.email}`}
                      className="font-medium text-gray-800"
                    >
                      {d.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>{d.office}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>{d.hours}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
