import { z } from "zod";

export const projectTypes = [
  "Strona wizytówka",
  "Sklep internetowy",
  "Landing page",
  "Motyw / sklep WordPress",
  "Aplikacja webowa",
  "Inne",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Podaj imię i nazwisko (min. 2 znaki)")
    .max(100),
  email: z.string().trim().min(1, "Podaj adres e-mail").email("Niepoprawny adres e-mail"),
  phone: z
    .string()
    .trim()
    .max(20)
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypes, {
    message: "Wybierz rodzaj projektu",
  }),
  budget: z
    .string()
    .trim()
    .min(1, "Podaj przybliżony budżet")
    .max(100),
  message: z
    .string()
    .trim()
    .min(20, "Opisz projekt trochę szerzej (min. 20 znaków)")
    .max(3000),
  consent: z.literal(true, {
    message: "Zgoda jest wymagana, żeby móc odpowiedzieć na wiadomość",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
