import { notices } from "../../data/dummyData";
import { motion } from "framer-motion";
import { Bell, ChevronRight } from "lucide-react";

export default function QuickNotice() {
  return (
    <section className="py-3 bg-gradient-to-r from-blue-600 to-blue-700 border-y border-blue-500">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4">
          {/* Notice Label */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex-shrink-0">
            <Bell className="w-4 h-4 text-yellow-300 animate-bounce" />
            <span className="text-white font-bold text-sm">LATEST</span>
          </div>

          {/* Scrolling Content */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {notices.map((notice, idx) => (
                <div
                  key={`notice-${notice.id}-${idx}`}
                  className="flex items-center gap-3 text-white whitespace-nowrap"
                >
                  <ChevronRight className="w-4 h-4 text-blue-200" />
                  <span className="font-medium">{notice.title}</span>
                  <span className="text-blue-200 text-sm">({notice.date})</span>
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {notices.map((notice, idx) => (
                <div
                  key={`dup-${notice.id}-${idx}`}
                  className="flex items-center gap-3 text-white whitespace-nowrap"
                >
                  <ChevronRight className="w-4 h-4 text-blue-200" />
                  <span className="font-medium">{notice.title}</span>
                  <span className="text-blue-200 text-sm">({notice.date})</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
