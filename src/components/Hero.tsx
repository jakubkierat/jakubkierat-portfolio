"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Framer Motion",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="animate-blob pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent-1/30 blur-[110px]" />
      <div className="animate-blob-slow pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent-2/25 blur-[110px]" />
      <div className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-3/20 blur-[110px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm text-muted"
        >
          <Sparkles size={14} className="text-accent-3" />
          Otwarty na nowe projekty
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl"
        >
          Buduję strony internetowe,
          <br />
          które <span className="text-gradient">robią wrażenie</span> i
          sprzedają.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted"
        >
          Projektuję i wdrażam nowoczesne strony wizytówkowe, landing page,
          sklepy i motywy WordPress, z dopracowanym designem, animacjami i
          skupieniem na realnych wynikach biznesowych.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projekty"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Zobacz projekty
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent-2/60 hover:text-accent-2"
          >
            Porozmawiajmy o projekcie
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 text-sm text-muted"
        >
          <span className="text-xs uppercase tracking-widest text-muted/70">
            Technologie
          </span>
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#o-mnie"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Przewiń w dół"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
