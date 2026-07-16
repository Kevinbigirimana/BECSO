import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Clean Biogas Energy", href: "/programs#biogas" },
  { label: "Organic Fertilizer", href: "/programs#fertilizer" },
  { label: "Plastic Recycling", href: "/programs#recycling" },
  { label: "Community Education", href: "/programs#education" },
  { label: "Green Jobs", href: "/programs#jobs" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
                <Image src="/images/Logo.jpeg" alt="BECSO Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-xl text-white">BECSO</p>
                <p className="text-xs text-gray-400">Bio-Energy &amp; Circular Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming organic and plastic waste into clean energy, organic fertilizer, and
              recycled products for a healthier Burundi.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61590651005504"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/becso5558/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://x.com/becso5558"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-2 rounded-lg bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/becso-bio-circular/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-gray-800 hover:bg-green-700 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {programLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 text-green-500 shrink-0" />
                <span>Buterere, Bujumbura, Burundi</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-green-500 shrink-0" />
                <a href="tel:+25767427115" className="hover:text-green-400 transition-colors">
                  +257 67427115
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-green-500 shrink-0" />
                <a
                  href="mailto:becso5558@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  becso5558@gmail.com
                </a>
              </li>
            </ul>
            <Link
              href="/volunteer"
              className="inline-block mt-6 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 BECSO — Bio-Energy and Circular Solutions Organization. All rights reserved.</p>
          <p>Buterere, Bujumbura, Burundi</p>
        </div>
      </div>
    </footer>
  );
}
