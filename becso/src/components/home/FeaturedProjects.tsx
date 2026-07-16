"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

const statusColor: Record<string, string> = {
  Planned: "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
};

export default function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <SectionHeader
            eyebrow="Featured Projects"
            title="Initiatives We're Building"
            subtitle="These are the flagship projects BECSO is developing for the pilot phase in Buterere and beyond."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            All projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">{p.description}</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-green-600" />
                    {p.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-green-600" />
                    {p.timeline}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
