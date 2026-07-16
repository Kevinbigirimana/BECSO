"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    src: "/images/garbageDump.jpeg",
    alt: "Waste dump in Buterere, Bujumbura",
  },
  {
    src: "/images/garbageDump1.jpeg",
    alt: "Environmental pollution near Lake Tanganyika",
  },
  {
    src: "/plasticCollection/homePage(carousal).jpg",
    alt: "BECSO team during plastic collection",
  },
  {
    src: "/images/connecting.jpeg",
    alt: "Community members connecting around environmental solutions",
  },
  {
    src: "/plasticCollection/groupYoungPeopleAfterCollectingPlastic.jpg",
    alt: "Young people after plastic collection activity",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div className="relative h-screen min-h-[600px] w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Burundi &bull; Ideation Stage 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Turning Waste Into
            <span className="block text-emerald-400">Energy &amp; Opportunity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray-200 max-w-xl leading-relaxed"
          >
            BECSO transforms organic and plastic waste into clean biogas cooking energy,
            organic fertilizer, and recycled products — protecting Lake Tanganyika and
            creating green jobs in Bujumbura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Explore Our Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg transition-colors backdrop-blur-sm"
            >
              <Play size={16} />
              Our Story
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {[
              { value: "630+", label: "Tons of waste daily" },
              { value: "96%", label: "Households on charcoal" },
              { value: "95%", label: "Depend on Lake Tanganyika" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-2xl font-bold text-emerald-400">{s.value}</p>
                <p className="text-xs text-gray-300">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase text-gray-300">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} className="text-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
