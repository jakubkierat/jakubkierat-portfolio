"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    n: "01",
    title: "Rozmowa i wycena",
    desc: "Poznaję Twój cel, odbiorców i zakres projektu. W ciągu 1-2 dni roboczych dostajesz wycenę i termin realizacji.",
  },
  {
    n: "02",
    title: "Projekt graficzny",
    desc: "Przygotowuję makietę i design dopasowany do Twojej marki. Wprowadzamy poprawki, aż projekt będzie w 100% Twój.",
  },
  {
    n: "03",
    title: "Wdrożenie",
    desc: "Koduję stronę zgodnie z projektem, responsywnie, z animacjami i dbałością o wydajność oraz SEO.",
  },
  {
    n: "04",
    title: "Publikacja i wsparcie",
    desc: "Uruchamiam stronę na docelowym hostingu/domenie i zostaję w kontakcie na wypadek pytań czy dalszego rozwoju.",
  },
];

export default function Process() {
  return (
    <AnimatedSection id="proces" className="mx-auto max-w-6xl px-6 py-28">
      <span className="text-sm font-medium uppercase tracking-widest text-accent-2">
        Proces współpracy
      </span>
      <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Od pierwszej wiadomości do gotowej strony
      </h2>

      <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute top-6 hidden h-px w-full bg-border lg:block" />
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-mono text-sm text-accent-3">
              {step.n}
            </div>
            <h3 className="mt-5 font-medium">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
