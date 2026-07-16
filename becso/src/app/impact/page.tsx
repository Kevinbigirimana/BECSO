"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Users, Trash2, Leaf, Briefcase, Droplets, TreePine, CheckCircle } from "lucide-react";
import { sdgs } from "@/data/sdgs";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Families with clean cooking energy" },
  { icon: Trash2, value: 12000, suffix: " kg", label: "Waste diverted monthly" },
  { icon: Leaf, value: 4000, suffix: "+", label: "Community members impacted" },
  { icon: Briefcase, value: 150, suffix: "+", label: "Green jobs for youth" },
  { icon: Droplets, value: 95, suffix: "%", label: "Lake Tanganyika water source protected" },
  { icon: TreePine, value: 96, suffix: "%", label: "Charcoal dependence addressed" },
];

const outcomes = [
  "Cleaner neighborhoods in Buterere with reduced open waste dumping",
  "Affordable cooking gas for hundreds of families, replacing charcoal",
  "Reduced indoor air pollution — protecting women and children",
  "Organic fertilizer improving soil health and crop yields in Bubanza Province",
  "Plastic waste turned into durable building and household products",
  "Lake Tanganyika protected from waste-contaminated drainage",
  "Youth employed in green jobs across the waste-to-energy value chain",
  "Replicable circular economy model for other Burundian communities",
];

export default function ImpactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="pt-20">
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Impact</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">The Change We&apos;re Building</h1>
          <p className="mt-5 text-green-100 text-lg max-w-xl">Projected outcomes from BECSO&apos;s pilot phase in Buterere, launching 2026.</p>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Expected Impact Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="bg-green-50 rounded-2xl p-6 text-center"
              >
                <s.icon size={28} className="text-green-700 mx-auto mb-3" />
                <div className="text-4xl font-bold text-green-800">
                  {inView ? <CountUp end={s.value} duration={2.5} separator="," suffix={s.suffix} /> : "0"}
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Expected Outcomes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((o) => (
              <div key={o} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">UN SDG Alignment</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className={`${sdg.bgColor} rounded-xl p-4`}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3" style={{ backgroundColor: sdg.color }}>
                  {sdg.number}
                </div>
                <h4 className="text-xs font-bold text-gray-900 mb-1">{sdg.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{sdg.alignment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="text-center text-xs text-gray-400 pb-4">* All figures are projections from the planned pilot phase (2026–2027).</p>
    </div>
  );
}
