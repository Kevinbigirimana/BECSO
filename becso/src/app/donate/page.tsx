import Link from "next/link";
import { DollarSign, Wrench, Users, BookOpen, Truck, ArrowRight } from "lucide-react";

const budgetItems = [
  { icon: Wrench, item: "Biogas digester construction & equipment", amount: "$3,200" },
  { icon: DollarSign, item: "Basic plastic recycling equipment", amount: "$1,800" },
  { icon: Truck, item: "Waste collection tools & transport", amount: "$800" },
  { icon: Users, item: "Worker training & safety equipment", amount: "$600" },
  { icon: BookOpen, item: "Community awareness campaigns", amount: "$400" },
  { icon: DollarSign, item: "Operational costs (storage, admin)", amount: "$370" },
];

const funders = ["PAEJ", "BBIN", "UNDP Burundi", "YALI", "Tony Elumelu Foundation", "ENABEL Burundi", "ACVE Burundi", "Youth for Green Burundi (Y4GB)"];

export default function DonatePage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Support BECSO</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Help Us Launch the Pilot</h1>
          <p className="mt-5 text-green-100 text-lg max-w-xl leading-relaxed">
            BECSO needs $7,170 to launch its pilot in Buterere. Every dollar funds real infrastructure,
            real training, and real impact for Burundi&apos;s communities.
          </p>
          <div className="mt-8 inline-block bg-emerald-500 text-white text-4xl font-bold px-8 py-4 rounded-2xl">
            $7,170 Goal
          </div>
        </div>
      </section>

      {/* Budget breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Funds Will Be Used</h2>
          <div className="space-y-4">
            {budgetItems.map((b) => (
              <div key={b.item} className="flex items-center justify-between gap-4 bg-green-50 rounded-xl p-5 border border-green-100">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <b.icon size={18} className="text-green-700" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm">{b.item}</span>
                </div>
                <span className="font-bold text-green-800 shrink-0">{b.amount}</span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-green-800 text-white rounded-xl p-5">
              <span className="font-bold">Total Pilot Budget</span>
              <span className="font-bold text-xl">$7,170</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target funders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizations We&apos;re Approaching</h2>
          <p className="text-gray-600 mb-10">We are actively seeking support from these organizations aligned with our mission:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {funders.map((f) => (
              <span key={f} className="bg-white border border-green-200 text-green-800 font-medium text-sm px-5 py-2.5 rounded-full shadow-sm">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Supporting BECSO?</h2>
          <p className="text-green-200 mb-8">Reach out to discuss funding opportunities, in-kind support, or technical partnerships. We welcome all forms of collaboration.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:becso5558@gmail.com" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              Email Us <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
