import Link from "next/link";
import { Flame, Sprout, Recycle, GraduationCap, Users, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";

const iconMap: Record<string, React.ElementType> = { Flame, Sprout, Recycle, GraduationCap, Users };

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Programs</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Five Areas of Action</h1>
          <p className="mt-5 text-green-100 text-lg max-w-xl leading-relaxed">
            Each BECSO program addresses a specific dimension of the waste and energy challenge in Burundi — together forming a complete circular economy system.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {programs.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Flame;
            return (
              <div key={p.id} id={p.id} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 ${p.colorClass}`}>
                    <Icon size={14} />
                    Program {i + 1} of {programs.length}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{p.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">{p.description}</p>
                  <ul className="space-y-3">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${p.colorClass} rounded-2xl p-10 flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Icon size={80} className="opacity-30" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to contribute to these programs?</h2>
          <p className="text-green-200 mb-8">Whether you volunteer, partner, or support — there&apos;s a role for you in BECSO&apos;s work.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/volunteer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
              Get Involved <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
