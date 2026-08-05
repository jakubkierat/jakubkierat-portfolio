"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Loader2, Mail, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  projectTypes,
  type ContactFormValues,
} from "@/lib/contact-schema";
import AnimatedSection from "./AnimatedSection";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent-3/60";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatedSection id="kontakt" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-accent-2">
            Kontakt
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Masz pomysł na stronę? Porozmawiajmy.
          </h2>
          <p className="mt-4 text-muted">
            Opisz krótko projekt w formularzu, odpowiadam zwykle w ciągu 1-2
            dni roboczych z pytaniami doprecyzowującymi lub wstępną wyceną.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-accent-3" />
              <div>
                <div className="text-sm font-medium">E-mail</div>
                <div className="text-sm text-muted">kieratjakubb@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 text-accent-3" />
              <div>
                <div className="text-sm font-medium">Czas odpowiedzi</div>
                <div className="text-sm text-muted">Zwykle 1-2 dni robocze</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Imię i nazwisko *
              </label>
              <input
                id="name"
                className={inputClass}
                placeholder="Jan Kowalski"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                E-mail *
              </label>
              <input
                id="email"
                type="email"
                className={inputClass}
                placeholder="jan@firma.pl"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                Telefon (opcjonalnie)
              </label>
              <input
                id="phone"
                type="tel"
                className={inputClass}
                placeholder="+48 600 000 000"
                {...register("phone")}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="mb-1.5 block text-sm text-muted">
                Rodzaj projektu *
              </label>
              <select id="projectType" className={inputClass} defaultValue="" {...register("projectType")}>
                <option value="" disabled>
                  Wybierz...
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-1.5 text-xs text-red-400">{errors.projectType.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="budget" className="mb-1.5 block text-sm text-muted">
                Przybliżony budżet *
              </label>
              <input
                id="budget"
                className={inputClass}
                placeholder="np. 5000 zł, albo Twoje widełki"
                {...register("budget")}
              />
              {errors.budget && (
                <p className="mt-1.5 text-xs text-red-400">{errors.budget.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Opis projektu *
              </label>
              <textarea
                id="message"
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Opowiedz mi o swoim projekcie: co potrzebujesz, jaki masz termin, do kogo strona ma trafiać..."
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-start gap-2.5 text-sm text-muted">
                <input
                  id="consent"
                  type="checkbox"
                  aria-label="Zgoda na przetwarzanie danych zgodnie z polityką prywatności"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background accent-fuchsia-500"
                  {...register("consent")}
                />
                <span>
                  Zgadzam się na przetwarzanie moich danych w celu udzielenia
                  odpowiedzi na zapytanie, zgodnie z{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="underline decoration-dotted underline-offset-2 hover:text-foreground"
                  >
                    polityką prywatności
                  </Link>
                  . *
                </span>
              </div>
              {errors.consent && (
                <p className="mt-1.5 text-xs text-red-400">{errors.consent.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || status === "loading"}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            Wyślij wiadomość
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                <CheckCircle2 size={18} />
                Wiadomość wysłana! Odezwę się najszybciej, jak to możliwe.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                <XCircle size={18} />
                Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na
                e-mail.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </AnimatedSection>
  );
}
