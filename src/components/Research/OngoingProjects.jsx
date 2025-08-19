import { motion } from "framer-motion";
import { researchProjects } from "../../data/dummyData";
import {
  Calendar,
  User,
  DollarSign,
  TrendingUp,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function OngoingProjects() {
  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Starting":
        return "bg-green-100 text-green-800 border-green-200";
      case "Completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CURRENT RESEARCH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ongoing <span className="text-teal-600">Research Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative projects addressing real-world challenges through
              advanced research methodologies
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {researchProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative ${
                    idx % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                        <div className="flex items-center justify-between text-white text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`${
                    idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">
                            Lead Researcher
                          </div>
                          <div className="font-semibold text-gray-900">
                            {project.leadResearcher}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Funding</div>
                          <div className="font-semibold text-gray-900">
                            {project.fundingAmount}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-semibold text-gray-900">
                            {new Date(project.startDate).getFullYear()} -{" "}
                            {new Date(project.endDate).getFullYear()}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">
                            Publications
                          </div>
                          <div className="font-semibold text-gray-900">
                            {project.publications} Papers
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Collaborators */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Project Team:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.collaborators.map((collaborator, collIdx) => (
                          <span
                            key={collIdx}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {collaborator}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Keywords */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Keywords:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.keywords.map((keyword, keyIdx) => (
                          <span
                            key={keyIdx}
                            className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More About This Project
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
