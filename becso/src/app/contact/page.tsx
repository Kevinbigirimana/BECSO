"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send, Loader2 } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_87traf8";
const EMAILJS_TEMPLATE_ID = "template_ihk7ih7";
const EMAILJS_PUBLIC_KEY = "8toOi16q-tnMafUOi";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Contact</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Get in Touch</h1>
          <p className="mt-5 text-green-100 text-lg max-w-xl">
            Whether you want to volunteer, partner, fund, or just learn more about BECSO —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-green-100 rounded-lg">
                    <MapPin size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm">Buterere, Bujumbura, Burundi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-green-100 rounded-lg">
                    <Phone size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+25767427115" className="text-green-700 hover:text-green-800 text-sm">+257 67427115</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-green-100 rounded-lg">
                    <Mail size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:becso5558@gmail.com" className="text-green-700 hover:text-green-800 text-sm">becso5558@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590651005504", label: "Facebook" },
                    { icon: Instagram, href: "https://www.instagram.com/becso5558/", label: "Instagram" },
                    { icon: Twitter, href: "https://x.com/becso5558", label: "X (Twitter)" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/becso-bio-circular/", label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="p-3 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-colors"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-green-800 text-white rounded-2xl p-6">
                <p className="font-semibold mb-2">TikTok</p>
                <a href="https://www.tiktok.com/@becso26" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 text-sm">@becso26 on TikTok</a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={22} className="text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-green-700 font-medium text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                      >
                        <option>General Inquiry</option>
                        <option>Volunteer Interest</option>
                        <option>Partnership Proposal</option>
                        <option>Funding &amp; Support</option>
                        <option>Media &amp; Press</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us how you'd like to connect..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or email us directly at becso5558@gmail.com
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
