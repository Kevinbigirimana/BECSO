"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Flame, Sprout, Recycle, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const solutions = [
  {
    icon: Flame,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    title: "Clean Biogas Energy",
    desc: "Organic waste is fed into biogas digesters, producing affordable cooking gas for households in Buterere — replacing charcoal and reducing deforestation.",
    image: "/plasticCollection/puttingPlasticInBin.jpg",
    stat: "500+ families",
    statLabel: "with clean energy",
  },
  {
    icon: Sprout,
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    title: "Organic Fertilizer",
    desc: "Biogas digestate is processed into nutrient-rich organic manure, distributed to smallholder farmers in Bubanza Province to improve yields sustainably.",
    image: "/plasticCollection/groupYoungPeopleAfterCollectingPlastic.jpg",
    stat: "Bubanza Province",
    statLabel: "farmers supported",
  },
  {
    icon: Recycle,
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    title: "Recycled Products",
    desc: "Plastic waste is sorted and melted using biogas heat, then reshaped into floor tiles, ceiling tiles, flower pots, and household items for local sale.",
    image: "/plasticCollection/PlasticCollection.jpg",
    stat: "Zero plastic",
    statLabel: "to waterways",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <SectionHeader
            eyebrow="Our Solution"
            title="One Circular System, Three Powerful Outcomes"
            subtitle="BECSO's integrated approach converts waste streams into three distinct value streams — energy, food security, and materials — in one closed-loop system."
            centered
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`rounded-2xl border ${s.border} overflow-hidden group hover:shadow-lg transition-shadow`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-xl font-bold">{s.stat}</p>
                  <p className="text-xs text-gray-200">{s.statLabel}</p>
                </div>
              </div>
              <div className={`p-6 ${s.bg}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <s.icon size={20} className={s.color} />
                  </div>
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular economy badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3 text-sm text-gray-600"
        >
          <span className="h-px w-12 bg-gray-300" />
          <span className="font-medium text-green-700">
            ♻ A fully circular model — waste in, value out
          </span>
          <span className="h-px w-12 bg-gray-300" />
        </motion.div>
      </div>
    </section>
  );
}
