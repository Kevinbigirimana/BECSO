import Image from "next/image";

const plasticImages = [
  { src: "/plasticCollection/PlasticCollection.jpg", alt: "Plastic collection activity" },
  { src: "/plasticCollection/groupYoungPeopleAfterCollectingPlastic.jpg", alt: "Young people after plastic collection" },
  { src: "/plasticCollection/puttingPlasticInBin.jpg", alt: "Putting plastic in bin" },
  { src: "/plasticCollection/puttingPlasticInBin2.jpg", alt: "Community plastic collection" },
  { src: "/plasticCollection/plastic.jpg", alt: "Plastic waste" },
  { src: "/plasticCollection/plastic1.jpg", alt: "Collected plastic" },
  { src: "/plasticCollection/plastic11.jpg", alt: "Plastic sorting" },
  { src: "/plasticCollection/plastic22.jpg", alt: "Processed plastic" },
  { src: "/plasticCollection/aboutUs.jpg", alt: "BECSO team" },
];

const teamImages = [
  { src: "/Team/IMG-20260530-WA0088.jpg", alt: "BECSO team activity" },
  { src: "/Team/IMG-20260530-WA0089.jpg", alt: "BECSO team activity" },
  { src: "/Team/IMG-20260530-WA0090.jpg", alt: "BECSO community work" },
  { src: "/Team/IMG-20260530-WA0091.jpg", alt: "BECSO field work" },
  { src: "/Team/IMG-20260530-WA0094.jpg", alt: "BECSO team" },
  { src: "/Team/IMG-20260530-WA0095.jpg", alt: "BECSO members" },
  { src: "/Team/IMG-20260530-WA0100.jpg", alt: "Community engagement" },
  { src: "/Team/IMG-20260530-WA0101.jpg", alt: "BECSO activity" },
  { src: "/Team/IMG-20260530-WA0102.jpg", alt: "Team gathering" },
  { src: "/Team/IMG-20260530-WA0103.jpg", alt: "BECSO members" },
  { src: "/Team/IMG-20260530-WA0104.jpg", alt: "Community work" },
  { src: "/Team/IMG-20260530-WA0105.jpg", alt: "Field activity" },
];

const envImages = [
  { src: "/images/garbageDump.jpeg", alt: "Waste pollution in Buterere" },
  { src: "/images/garbageDump1.jpeg", alt: "Environmental challenge" },
  { src: "/images/connecting.jpeg", alt: "Community connection" },
  { src: "/images/connecting1.jpeg", alt: "Community members" },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Gallery</span>
          <h1 className="mt-3 text-4xl font-bold">Our Work in Pictures</h1>
          <p className="mt-4 text-green-200 max-w-xl">Photos from our community activities, plastic collection efforts, and team engagements in Buterere, Bujumbura.</p>
        </div>
      </section>

      {/* Plastic Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Plastic Collection Activities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {plasticImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Environmental Context</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {envImages.map((img) => (
              <div key={img.src} className="relative aspect-video rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Team &amp; Community</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {teamImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
