"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Droplets, TreePine, Wind } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const challenges = [
  {
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    title: "630+ Tons of Waste Daily",
    desc: "Bujumbura generates massive amounts of organic and plastic waste, much of it dumped in open spaces, drainage channels, and near Lake Tanganyika.",
  },
  {
    icon: TreePine,
    color: "text-red-600",
    bg: "bg-red-50",
    title: "96% Charcoal Dependence",
    desc: "Almost all households rely on charcoal for cooking — fueling deforestation, greenhouse gas emissions, and dangerous indoor air pollution.",
  },
  {
    icon: Droplets,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Lake Tanganyika at Risk",
    desc: "Over 95% of Bujumbura's population depends on Lake Tanganyika for water. Waste flowing into the lake threatens public health and aquatic ecosystems.",
  },
  {
    icon: Wind,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Health & Climate Impact",
    desc: "Women and children disproportionately suffer from indoor air pollution. Charcoal burning accelerates deforestation and climate change across the region.",
  },
];

export default function Challenge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <SectionHeader
                eyebrow="The Problem"
                title="Two Crises, One Community"
                subtitle="Buterere faces simultaneous challenges of unmanaged waste pollution and a near-total dependence on charcoal — both threatening health, livelihoods, and the environment."
              />
            </motion.div>

            <div className="mt-10 space-y-5">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className={`p-2.5 rounded-lg ${c.bg} shrink-0`}>
                    <c.icon size={20} className={c.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{c.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2">
              <Image
                src="/images/garbageDump.jpeg"
                alt="Waste pollution in Buterere, Bujumbura"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white text-xs font-medium">
                Open waste dumping in Buterere
              </p>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/garbageDump1.jpeg"
                alt="Environmental degradation near Lake Tanganyika"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/connecting1.jpeg"
                alt="Community members affected by waste pollution"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-2 bg-green-800 text-white rounded-xl p-5"
            >
              <p className="text-sm text-green-200 font-medium">The opportunity</p>
              <p className="mt-1 font-semibold leading-snug">
                The same waste that pollutes Bujumbura can become the fuel that powers it.
                BECSO turns this challenge into a circular solution.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
