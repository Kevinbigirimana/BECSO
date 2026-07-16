import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { newsItems } from "@/data/news";

export default function NewsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">News &amp; Insights</span>
          <h1 className="mt-3 text-4xl font-bold">Stories from the Ground</h1>
          <p className="mt-4 text-green-200 max-w-xl">Updates, articles, and insights from BECSO and the communities we serve in Burundi.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">
                      <Tag size={10} />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar size={11} />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-green-700 transition-colors">{item.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-green-800 text-white rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-green-200 mb-6 max-w-lg mx-auto">Follow BECSO on social media for the latest updates from our work in Buterere.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61590651005504" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">Facebook</a>
              <a href="https://www.instagram.com/becso5558/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/becso-bio-circular/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">LinkedIn</a>
              <a href="https://www.tiktok.com/@becso26" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
