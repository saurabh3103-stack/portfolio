"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center py-20 px-5 z-[20]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
      >
        Get in Touch
      </motion.div>

      <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-[20px] bg-white/5 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl text-white font-semibold mb-2">Send me an Email</h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#030014] border border-[#2A0E61] text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#030014] border border-[#2A0E61] text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#030014] border border-[#2A0E61] text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center text-sm mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center text-sm mt-2">Failed to send message. Try again.</p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="flex-1 flex flex-col items-center justify-center p-8 rounded-[20px] bg-white/5 backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl text-white font-semibold mb-4 text-center">Or connect directly</h3>
          <p className="text-gray-400 text-center mb-8">
            Prefer instant messaging? Feel free to reach out to me on WhatsApp for a quick chat!
          </p>
          <a
            href="https://wa.me/6392153811"
            target="_blank"
            rel="noreferrer noopener"
            className="w-full max-w-[300px] py-4 rounded-full bg-green-500 text-white font-bold text-center hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
