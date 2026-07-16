"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trash2, ScanLine, Flame, Package, Smile } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: Trash2,
    number: "01",
    title: "Collect",
    description:
      "Waste is collected from households, markets, and open dumping sites across Buterere, sorted at source by community participants trained by BECSO.",
    color: "bg-red-100 text-red-700",
    accent: "border-red-300",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "Sort",
    description:
      "Organic waste (food scraps, agricultural residue) is separated from plastic. Each stream feeds a different processing pathway.",
    color: "bg-amber-100 text-amber-700",
    accent: "border-amber-300",
  },
  {
    icon: Flame,
    number: "03",
    title: "Process",
    description:
      "Organic waste enters the biogas digester, producing cooking gas and organic digestate. Plastic is melted using biogas heat and reshaped into products.",
    color: "bg-orange-100 text-orange-700",
    accent: "border-orange-300",
  },
  {
    icon: Package,
    number: "04",
    title: "Distribute",
    description:
      "Biogas is piped to households for cooking. Organic manure goes to Bubanza Province farmers. Recycled products are sold locally, generating revenue.",
    color: "bg-green-100 text-green-700",
    accent: "border-green-300",
  },
  {
    icon: Smile,
    number: "05",
    title: "Impact",
    description:
      "Cleaner neighborhoods. Affordable cooking energy. Better farm yields. Green jobs for youth. A protected Lake Tanganyika. A circular economy in action.",
    color: "bg-emerald-100 text-emerald-700",
    accent: "border-emerald-300",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <SectionHeader
            eyebrow="How It Works"
            title="From Waste to Value in 5 Steps"
            subtitle="A simple, replicable system that any community can adopt. Here's how BECSO's circular model works from collection to impact."
            centered
          />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gray-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color} border-2 ${step.accent} bg-white shadow-sm mb-4`}
                >
                  <step.icon size={22} />
                </div>

                {/* Number */}
                <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">
                  STEP {step.number}
                </span>

                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 bg-green-800 text-white rounded-2xl p-8 text-center"
        >
          <p className="text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
            "Every kilogram of waste processed by BECSO is a kilogram that doesn&apos;t
            reach Lake Tanganyika. Every family with biogas is a family that doesn&apos;t
            cut trees for charcoal."
          </p>
          <p className="mt-4 text-green-300 text-sm font-medium">— The BECSO Team</p>
        </motion.div>
      </div>
    </section>
  );
}
