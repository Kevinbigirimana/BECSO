"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Flame, Sprout, Recycle, GraduationCap, Users, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { programs } from "@/data/programs";

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Sprout,
  Recycle,
  GraduationCap,
  Users,
};

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <SectionHeader
            eyebrow="Programs"
            title="Five Areas of Action"
            subtitle="Each program addresses a specific dimension of the waste and energy challenge in Burundi."
          />
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            View all programs <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Flame;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border ${p.colorClass} group cursor-pointer`}
              >
                <div className="p-2.5 bg-white rounded-xl shadow-sm w-fit mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.description}</p>
                <ul className="space-y-1.5">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 rounded-2xl bg-green-800 text-white flex flex-col justify-between"
          >
            <div>
              <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-3">
                Get Involved
              </p>
              <h3 className="font-bold text-xl mb-3">Ready to contribute?</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                We&apos;re looking for volunteers, partners, and supporters to help launch
                BECSO&apos;s pilot in Buterere.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="mt-6 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Join the Team <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
