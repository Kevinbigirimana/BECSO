"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { partners } from "@/data/partners";

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const targetPartners = partners.filter((p) => p.type === "target");

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <SectionHeader
            eyebrow="Partners & Funders"
            title="Building Our Network"
            subtitle="BECSO is actively seeking partnerships with organizations that share our vision for a cleaner, more sustainable Burundi."
            centered
          />
        </motion.div>

        {/* Target partners grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {targetPartners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="border border-gray-200 rounded-xl p-5 hover:border-green-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <Handshake size={18} className="text-green-700" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1.5">{p.name}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-green-800 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Become a Partner</h3>
            <p className="text-green-200 text-sm max-w-lg leading-relaxed">
              Whether you&apos;re an NGO, academic institution, government body, or private
              sector organization — if you care about clean energy, waste management, and
              community development in Burundi, let&apos;s connect.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
