"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    emailjs.sendForm(
      'service_5ctv05b', // Ganti dengan ID mu
      'template_ltifq6e', // Ganti dengan ID mu
      e.currentTarget,
      'XTHB-yaTFnW9PtGm4' // Ganti dengan ID mu
    )
    .then(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    })
    .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-8">Contact</h2>
          <p className="text-3xl font-medium text-zinc-200 mb-12">
            Let's build something beautiful together.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input type="text" name="from_name" required placeholder="Name"
                className="w-full bg-transparent border-b border-zinc-800 py-4 px-2 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors" />
            </div>
            <div className="group relative">
              <input type="email" name="email" required placeholder="Email address"
                className="w-full bg-transparent border-b border-zinc-800 py-4 px-2 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors" />
            </div>
            <div className="group relative">
              <textarea name="message" required placeholder="Your message" rows={4}
                className="w-full bg-transparent border-b border-zinc-800 py-4 px-2 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors resize-none" />
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="mt-8 px-8 py-3 bg-zinc-200 text-zinc-950 font-medium rounded-full hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}