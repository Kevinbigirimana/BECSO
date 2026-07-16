"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Users, Trash2, Leaf, Briefcase, Droplets, TreePine } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Families with clean cooking energy", color: "text-emerald-400" },
  { icon: Trash2, value: 12000, suffix: " kg", label: "Waste diverted monthly", color: "text-amber-400" },
  { icon: Leaf, value: 4000, suffix: "+", label: "Community members impacted", color: "text-green-400" },
  { icon: Briefcase, value: 150, suffix: "+", label: "Green jobs for youth", color: "text-blue-400" },
  { icon: Droplets, value: 95, suffix: "%", label: "Water source protected (Lake Tanganyika)", color: "text-cyan-400" },
  { icon: TreePine, value: 96, suffix: "%", label: "Charcoal dependence to be replaced", color: "text-orange-400" },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,white_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <SectionHeader
            eyebrow="Expected Impact"
            title="The Change We're Building Toward"
            subtitle="These are the projected outcomes of BECSO's pilot phase in Buterere. Every number represents a real life improved."
            centered
            light
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <s.icon size={28} className={`${s.color} mx-auto mb-4`} />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {inView ? (
                  <CountUp end={s.value} duration={2.5} separator="," suffix={s.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-sm text-green-200 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-green-400 text-xs mt-10 tracking-wide"
        >
          * Projected outcomes from initial pilot phase in Buterere, Bujumbura (2026–2027)
        </motion.p>
      </div>
    </section>
  );
}
