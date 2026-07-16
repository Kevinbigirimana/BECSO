import Link from "next/link";
import { Heart, Wrench, GraduationCap, Palette, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const roles = [
  { icon: Wrench, title: "Engineering & Technical", desc: "Biogas system design, mechanical engineering, electrical work for biogas operations." },
  { icon: GraduationCap, title: "Education & Outreach", desc: "Community training on waste sorting, environmental health, and behavior change." },
  { icon: Palette, title: "Arts & Design", desc: "Designing floor tiles, ceiling panels, and household products from recycled plastic." },
  { icon: TrendingUp, title: "Business & Finance", desc: "Operations management, financial planning, and marketing for BECSO's products." },
  { icon: Heart, title: "Community Engagement", desc: "Building trust with Buterere residents, organizing waste collection drives, and mobilizing youth." },
];

export default function VolunteerPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Volunteer</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Join the BECSO Team</h1>
          <p className="mt-5 text-green-100 text-lg max-w-xl leading-relaxed">
            We&apos;re at the ideation stage — the perfect moment to join and shape BECSO&apos;s future.
            Whether you&apos;re an engineer, educator, designer, or community organizer, there&apos;s
            a role for you.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills We Need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="p-2.5 bg-white rounded-lg w-fit mb-4 shadow-sm">
                  <role.icon size={20} className="text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you gain */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">What You&apos;ll Gain</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Real-world experience in circular economy and clean energy projects",
              "Networking with NGOs, international funders, and sustainability experts",
              "Skills development in biogas, recycling, and community mobilization",
              "Contribution to protecting Lake Tanganyika and Bujumbura's communities",
              "Being part of Burundi's next generation of environmental entrepreneurs",
              "A meaningful role in a venture that could scale across East Africa",
            ].map((g) => (
              <div key={g} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-green-200 mb-8">Send us a message at <strong className="text-white">becso5558@gmail.com</strong> or use our contact form. Tell us who you are and how you&apos;d like to contribute.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
