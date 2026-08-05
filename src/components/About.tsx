"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Gauge,
  LayoutTemplate,
  Palette,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "4+", label: "zrealizowane projekty" },
  { value: "100%", label: "responsywności RWD" },
  { value: "90+", label: "wynik Lighthouse Performance" },
  { value: "24/7", label: "kontakt z klientem w trakcie projektu" },
];

const skills = [
  {
    icon: Code2,
    title: "Nowoczesny front-end",
    desc: "Next.js, React i TypeScript, czyli szybkie, dobrze zorganizowane strony gotowe na rozwój.",
  },
  {
    icon: Palette,
    title: "Design z charakterem",
    desc: "Indywidualny branding zamiast gotowych szablonów. Animacje, które wspierają treść, a nie rozpraszają.",
  },
  {
    icon: Smartphone,
    title: "Responsywność",
    desc: "Każdy projekt testowany na telefonach, tabletach i dużych ekranach.",
  },
  {
    icon: Gauge,
    title: "Wydajność i SEO",
    desc: "Zoptymalizowane obrazy, semantyczny HTML i dobre podstawy pod pozycjonowanie.",
  },
  {
    icon: ShoppingBag,
    title: "Sklepy i WordPress",
    desc: "Autorskie motywy WordPress oraz integracje sklepowe dopasowane do potrzeb klienta.",
  },
  {
    icon: LayoutTemplate,
    title: "Od makiety po wdrożenie",
    desc: "Prowadzę projekt od pierwszego szkicu, przez design, po publikację i wsparcie po starcie.",
  },
];

export default function About() {
  return (
    <AnimatedSection id="o-mnie" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-accent-2">
            O mnie
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tworzę strony, które łączą dobry design z realną skutecznością.
          </h2>
          <p className="mt-6 text-muted">
            Jestem web developerem specjalizującym się w nowoczesnych stronach
            internetowych, od wizytówek i landing page&apos;y, przez sklepy,
            po autorskie motywy WordPress. Zależy mi na tym, żeby każdy
            projekt nie tylko dobrze wyglądał, ale też realnie pomagał
            klientowi zdobywać uwagę i konwertować odwiedzających w klientów.
          </p>
          <p className="mt-4 text-muted">
            Poniżej znajdziesz wybrane realizacje oraz formularz kontaktowy,
            jeśli masz pomysł na stronę, chętnie go z Tobą omówię.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-2xl font-semibold text-gradient sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent-2/40"
            >
              <skill.icon size={22} className="text-accent-3" />
              <h3 className="mt-4 font-medium">{skill.title}</h3>
              <p className="mt-2 text-sm text-muted">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
