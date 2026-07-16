import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BECSO — Bio-Energy and Circular Solutions Organization",
  description:
    "BECSO transforms organic and plastic waste into clean biogas energy, organic fertilizer, and recycled products in Burundi — protecting Lake Tanganyika and creating green jobs.",
  keywords: [
    "BECSO",
    "biogas",
    "Burundi",
    "waste management",
    "circular economy",
    "clean energy",
    "Lake Tanganyika",
    "Buterere",
  ],
  openGraph: {
    title: "BECSO — Bio-Energy and Circular Solutions Organization",
    description:
      "Transforming waste into clean cooking energy and circular economy solutions in Bujumbura, Burundi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
