import { futureGoals } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Target, Clock, CheckCircle, Circle } from "lucide-react";

const statusIcons = {
  "In Progress": Clock,
  Planning: Circle,
  Proposed: Target,
  Future: Target,
  Completed: CheckCircle,
};

const statusColors = {
  "In Progress": "text-yellow-700 border-yellow-300",
  Planning: "text-blue-700 border-blue-300",
  Proposed: "text-purple-700 border-purple-300",
  Future: "text-gray-700 border-gray-300",
  Completed: "text-green-700 border-green-300",
};

export default function FutureGoals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Future Goals</span>
            </h2>
            <p className="text-gray-600">
              A simple roadmap for the coming years
            </p>
          </motion.div>
        </div>

        {/* Goals List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {futureGoals.map((goal, idx) => {
            const StatusIcon = statusIcons[goal.status] || Target;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border rounded-xl bg-white"
              >
                {/* Year */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-lg font-semibold text-blue-700">
                    {goal.year}
                  </div>
                </div>

                {/* Goal Title */}
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {goal.goal}
                </h3>

                {/* Status */}
                <div
                  className={`inline-flex items-center gap-2 text-sm px-2.5 py-1 border rounded-full ${
                    statusColors[goal.status]
                  }`}
                >
                  <StatusIcon className="w-4 h-4" />
                  {goal.status}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
