"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { sdgs } from "@/data/sdgs";

export default function SDGAlignment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <SectionHeader
            eyebrow="Global Alignment"
            title="Contributing to the UN Sustainable Development Goals"
            subtitle="BECSO's work directly advances 10 of the 17 UN SDGs — proving that local action creates global impact."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className={`${sdg.bgColor} rounded-2xl p-4 group hover:shadow-md transition-shadow cursor-default`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3 shadow"
                style={{ backgroundColor: sdg.color }}
              >
                {sdg.number}
              </div>
              <h4 className="text-xs font-bold text-gray-900 mb-1.5 leading-snug">{sdg.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{sdg.alignment}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-gray-400 mt-10"
        >
          SDG framework © United Nations. BECSO alignment descriptions reflect organizational goals.
        </motion.p>
      </div>
    </section>
  );
}
