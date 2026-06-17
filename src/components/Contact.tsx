"use client";

import { useState } from "react";
import { Linkedin, Send } from "lucide-react";
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
    <section id="contact" className="relative z-10 border-t border-zinc-900 px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div>
            <p className="font-mono text-sm text-cyan-200">/contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100 sm:text-4xl">
              Send a message into the queue.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-zinc-500">
              Tell me what you are building, what is blocked, or what kind of interface you want to ship.
            </p>
            <a
              href={fallbackContactUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              <Linkedin size={16} />
              LinkedIn fallback
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
            <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="font-mono text-xs text-zinc-500">message.compose</span>
              <span className="font-mono text-xs text-lime-300">ready</span>
            </div>
            <div className="space-y-5">
            <div className="group relative">
                <label htmlFor="from_name" className="mb-2 block font-mono text-xs text-zinc-500">name</label>
                <input id="from_name" type="text" name="from_name" required placeholder="Farriel"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-3 text-zinc-200 transition-colors placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none" />
            </div>
            <div className="group relative">
                <label htmlFor="email" className="mb-2 block font-mono text-xs text-zinc-500">email</label>
                <input id="email" type="email" name="email" required placeholder="you@example.com"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-3 text-zinc-200 transition-colors placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none" />
            </div>
            <div className="group relative">
                <label htmlFor="message" className="mb-2 block font-mono text-xs text-zinc-500">message</label>
                <textarea id="message" name="message" required placeholder="Project context, deadline, stack, or idea..." rows={5}
                  className="w-full resize-none rounded-md border border-zinc-800 bg-zinc-900 px-3 py-3 text-zinc-200 transition-colors placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none" />
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white disabled:opacity-50"
            >
                <Send size={16} />
              {status === "loading" ? "Opening..." : status === "success" ? "Email Draft Opened" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-zinc-500">
                Email is not configured yet. Opening LinkedIn instead.
              </p>
            )}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
