import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { team } from "@/data/team";

const timeline = [
  { phase: "Aug – Sep 2026", title: "Preparation Phase", desc: "Finalizing project design, securing partnerships, mobilizing Buterere community, awareness campaigns, sourcing equipment." },
  { phase: "Oct – Nov 2026", title: "Setup & Installation", desc: "Installing the biogas system, waste collection infrastructure, and training team members and community participants." },
  { phase: "Dec 2026", title: "Pilot Operation", desc: "Testing the full system: organic waste to biogas and manure, plastic recycling, first household distribution in Buterere." },
  { phase: "Jan 2027", title: "Evaluation & Scaling", desc: "Analyzing pilot results, refining operations, preparing for scale-up across more communities, strengthening funding." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/plasticCollection/aboutUs.jpg" alt="BECSO team" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">About BECSO</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Born from Burundi&apos;s Waste Crisis
          </h1>
          <p className="mt-5 text-green-100 text-lg max-w-2xl leading-relaxed">
            BECSO (Bio-Energy and Circular Solutions Organization) was created by a team of young
            Burundian innovators who saw two crises — unmanaged waste and charcoal dependence —
            and decided to solve both at once.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600">Our Story</span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 mb-6">Why We Built BECSO</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bujumbura, Burundi&apos;s economic capital, generates over 630 tons of waste daily.
                  Much of it is dumped in open spaces, drainage channels, and wetlands near Lake
                  Tanganyika — the continent&apos;s largest freshwater reservoir by volume and the
                  primary water source for over 95% of the city&apos;s population.
                </p>
                <p>
                  At the same time, over 96% of Bujumbura households depend on charcoal for cooking.
                  Charcoal shortages and rising prices leave families struggling, while forests are
                  cleared and indoor air pollution harms women and children disproportionately.
                </p>
                <p>
                  Our team recognized that the solution to both problems was right there in the
                  community — in the organic waste piling up in Buterere&apos;s neighborhoods.
                  That organic waste could become biogas. The biogas could cook meals. The digestate
                  could fertilize farms. The plastic could become building materials. BECSO was born.
                </p>
                <p className="font-medium text-gray-800">
                  We are currently at the ideation stage, preparing for our pilot launch in Buterere,
                  Bujumbura in August 2026.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/plasticCollection/groupYoungPeopleAfterCollectingPlastic.jpg" alt="BECSO team after plastic collection" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden">
                  <Image src="/plasticCollection/puttingPlasticInBin.jpg" alt="Plastic collection" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="bg-green-800 text-white rounded-xl p-5">
                  <p className="text-2xl font-bold text-emerald-400">$7,170</p>
                  <p className="text-sm text-green-200 mt-1">Pilot phase budget target</p>
                  <p className="text-xs text-green-300 mt-3">Covering biogas system, recycling equipment, training, and operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600">Timeline</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Project Roadmap</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={t.phase} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-green-200 my-2" />}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-green-600" />
                    <span className="text-sm font-semibold text-green-700">{t.phase}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600">Our Team</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">The People Behind BECSO</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">Young Burundian innovators committed to turning Bujumbura&apos;s waste crisis into a circular economy opportunity.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-100 group-hover:border-green-400 transition-colors">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-green-700 font-medium mt-0.5">{member.role}</p>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <MapPin size={32} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Where We Operate</h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
            BECSO&apos;s pilot is based in <strong className="text-white">Buterere, Bujumbura</strong> — one of the neighborhoods most affected by unmanaged waste. Organic manure from our process will benefit farmers in <strong className="text-white">Bubanza Province</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link href="/programs" className="border border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
