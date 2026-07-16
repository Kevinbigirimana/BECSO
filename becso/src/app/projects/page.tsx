import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const statusColor: Record<string, string> = {
  Planned: "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Projects</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Initiatives We&apos;re Building</h1>
          <p className="mt-5 text-green-100 text-lg max-w-xl leading-relaxed">
            Three flagship projects form the backbone of BECSO&apos;s pilot phase — all planned to launch in 2026.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-56">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{p.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="flex flex-col gap-2 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-2"><MapPin size={12} className="text-green-600" />{p.location}</span>
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-green-600" />{p.timeline}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Interested in supporting a project?</h2>
          <p className="text-gray-600 mb-7">We&apos;re in the planning phase and looking for partners, funders, and technical experts.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-7 py-3 rounded-lg transition-colors">
            Reach Out <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
