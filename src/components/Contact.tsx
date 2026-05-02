"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const fallbackContactUrl = "https://www.linkedin.com/in/farriel-arrianta/";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("from_name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    if (!contactEmail) {
      window.open(fallbackContactUrl, "_blank", "noreferrer");
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-8">Contact</h2>
          <p className="text-3xl font-medium text-zinc-200 mb-12">
            Let&apos;s build something beautiful together.
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
              {status === "loading" ? "Opening..." : status === "success" ? "Email Draft Opened" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-zinc-500">
                Email is not configured yet. Opening LinkedIn instead.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
