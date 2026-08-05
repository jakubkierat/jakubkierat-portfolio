"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, ShoppingCart, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Strony wizytówkowe i landing page",
    desc: "Szybkie, dopracowane strony jednostronicowe pod konkretny cel: sprzedaż usługi, zbieranie zapisów, prezentację oferty.",
  },
  {
    icon: ShoppingCart,
    title: "Sklepy internetowe",
    desc: "Sklepy oparte o WordPress/WooCommerce lub nowoczesny front-end, gotowe do przyjmowania zamówień.",
  },
  {
    icon: LayoutDashboard,
    title: "Aplikacje webowe",
    desc: "Panele, dashboardy i aplikacje w Next.js i React, z logowaniem, bazą danych i integracjami.",
  },
  {
    icon: Wrench,
    title: "Wsparcie i rozwój",
    desc: "Modernizacja istniejącej strony, poprawa wydajności, dodawanie nowych funkcji i opieka po wdrożeniu.",
  },
];

export default function Services() {
  return (
    <AnimatedSection id="uslugi" className="border-y border-border bg-background-soft">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <span className="text-sm font-medium uppercase tracking-widest text-accent-2">
          Usługi
        </span>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          W czym mogę pomóc Twojej marce
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="inline-flex rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-2/20 p-3">
                <service.icon size={22} className="text-accent-3" />
              </div>
              <h3 className="mt-5 font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
