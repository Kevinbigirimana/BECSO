"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Droplets, TreePine } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const facts = [
  { icon: Users, value: "3.3M+", label: "Population of Bujumbura (INSB 2026)" },
  { icon: Droplets, value: "95%", label: "Residents dependent on Lake Tanganyika water" },
  { icon: TreePine, value: "96%", label: "Households relying on charcoal for cooking" },
  { icon: MapPin, value: "Buterere", label: "Most waste-affected neighborhood in Bujumbura" },
];

export default function WhyBurundi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              eyebrow="Why Burundi?"
              title="A Crisis at the Heart of Africa's Greatest Lake"
              subtitle="Buterere sits at the intersection of two critical challenges — unmanaged waste and clean energy scarcity — in a city whose water supply depends on one of Africa's most vital ecosystems."
            />

            <div className="mt-8 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Lake Tanganyika is the largest freshwater reservoir in Africa by volume. It is the
                lifeline of Bujumbura. Yet waste from Buterere flows through drainage channels
                directly into the rivers that feed the lake — threatening the water quality that
                over 3.3 million people depend on daily.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At the same time, charcoal shortages and rising prices are pushing families
                deeper into energy poverty. The forest is being cleared to fuel cooking fires while
                organic waste — which could generate clean biogas — accumulates in neighborhoods.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium text-gray-800">
                BECSO exists because this problem doesn&apos;t need outside solutions — it needs
                local people with the tools and knowledge to turn their community&apos;s waste
                into their community&apos;s opportunity.
              </p>
            </div>

            {/* Fact pills */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 * i + 0.4 }}
                  className="bg-green-50 rounded-xl p-4"
                >
                  <f.icon size={18} className="text-green-700 mb-2" />
                  <p className="text-xl font-bold text-green-800">{f.value}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">{f.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/images/connecting.jpeg"
                alt="Community members in Buterere, Bujumbura"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="font-semibold">Buterere, Bujumbura</p>
                <p className="text-sm text-green-200">Where the pilot will launch</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-xl overflow-hidden">
                <Image
                  src="/plasticCollection/puttingPlasticInBin2.jpg"
                  alt="Plastic collection activity"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="bg-emerald-700 rounded-xl p-5 text-white flex flex-col justify-between">
                <p className="text-emerald-200 text-xs font-semibold uppercase tracking-widest">
                  The Opportunity
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  Burundi&apos;s waste challenge is also its biggest untapped energy resource.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
