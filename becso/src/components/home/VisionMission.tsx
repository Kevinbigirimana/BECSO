"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Target, Leaf, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", desc: "Every solution we build is designed to last — environmentally, socially, and economically." },
  { icon: Heart, title: "Community First", desc: "The people of Buterere are at the center of everything we do. Their well-being drives our mission." },
  { icon: Lightbulb, title: "Innovation", desc: "We apply creative, practical thinking to turn everyday waste into valuable resources." },
  { icon: Shield, title: "Integrity", desc: "We operate with transparency, accountability, and respect for our communities and partners." },
];

export default function VisionMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-green-900 text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-emerald-500/20 rounded-lg">
                <Eye size={22} className="text-emerald-400" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
                Our Vision
              </span>
            </div>
            <p className="text-xl font-semibold leading-relaxed text-white">
              A Burundi where waste is not a problem but a resource — powering clean homes,
              nourishing farms, and building stronger, healthier communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-amber-500/20 rounded-lg">
                <Target size={22} className="text-amber-400" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
                Our Mission
              </span>
            </div>
            <p className="text-xl font-semibold leading-relaxed text-white">
              To provide affordable, sustainable biogas energy and circular economy solutions
              by converting organic and plastic waste into clean energy, organic fertilizer,
              and recycled products for Burundi&apos;s communities.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400">
            Core Values
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white">What Drives Us</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <v.icon size={28} className="text-emerald-400 mb-4" />
              <h4 className="font-semibold text-white mb-2">{v.title}</h4>
              <p className="text-sm text-green-200 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
