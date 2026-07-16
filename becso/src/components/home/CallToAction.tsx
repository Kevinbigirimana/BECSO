"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HandHeart, Handshake, DollarSign, ArrowRight } from "lucide-react";

const actions = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Share your skills in engineering, education, design, business, or community outreach. We need passionate people to help build BECSO.",
    cta: "Join as Volunteer",
    href: "/volunteer",
    color: "bg-emerald-600 hover:bg-emerald-500",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "If you're an NGO, institution, or business aligned with clean energy, waste management, or community development — let's work together.",
    cta: "Explore Partnership",
    href: "/contact",
    color: "bg-green-700 hover:bg-green-600",
  },
  {
    icon: DollarSign,
    title: "Support Our Mission",
    description:
      "We're raising $7,170 for our Buterere pilot. Your support funds biogas equipment, recycling tools, community training, and youth employment.",
    cta: "Learn How to Support",
    href: "/donate",
    color: "bg-amber-600 hover:bg-amber-500",
  },
];

export default function CallToAction() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/plasticCollection/aboutUs.jpg"
          alt="BECSO community"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-green-950/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
            Get Involved
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Be Part of the Solution
          </h2>
          <p className="mt-4 text-green-200 text-lg max-w-2xl mx-auto">
            BECSO is at the ideation stage — the perfect moment to join and shape something
            meaningful for Burundi&apos;s communities and environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 flex flex-col"
            >
              <div className="p-3 bg-white/10 rounded-xl w-fit mb-5">
                <action.icon size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">{action.title}</h3>
              <p className="text-green-200 text-sm leading-relaxed flex-1">{action.description}</p>
              <Link
                href={action.href}
                className={`mt-6 inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors ${action.color}`}
              >
                {action.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
