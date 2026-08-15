export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  url: string;
  year: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "fabryka-virali",
    title: "Fabryka Virali",
    tagline: "Agencja social media i produkcji wideo",
    description:
      "Landing page dla agencji tworzącej viralowe wideo na TikToka, Instagrama i YouTube Shorts. Energiczny branding, jasny przekaz sprzedażowy i sekcje social proof.",
    highlights: [
      "Sekcja hero z animowanymi statystykami zasięgów",
      "Prezentacja oferty i procesu współpracy",
      "Formularz umawiania konsultacji",
    ],
    tags: ["Landing page", "Marketing", "Copywriting UX"],
    url: "https://fabrykavirali.pl/",
    year: "2025",
    image: "/projects/fabryka-virali.png",
    accent: "from-fuchsia-500 to-amber-400",
  },
  {
    slug: "apex-rent",
    title: "APEX Rent",
    tagline: "Wynajem samochodów premium",
    description:
      "Rozbudowany serwis wypożyczalni luksusowych aut z katalogiem floty, filtrowaniem po kategorii i szybką wyceną rezerwacji.",
    highlights: [
      "Filtrowana siatka floty (sportowe, SUV, elektryczne)",
      "Karty modeli z parametrami i ceną za dobę",
      "Sekcja zaufania: opinie klientów i statystyki firmy",
    ],
    tags: ["Next.js", "Katalog produktów", "Filtrowanie"],
    url: "https://jakubkierat.github.io/apex-rent/",
    year: "2025",
    image: "/projects/apex-rent.png",
    accent: "from-red-600 to-zinc-800",
  },
  {
    slug: "nova-estate",
    title: "Nova Estate",
    tagline: "Deweloper mieszkaniowy",
    description:
      "Strona inwestycji mieszkaniowych z prezentacją osiedli w sześciu miastach, statusami budowy i kartami poszczególnych inwestycji.",
    highlights: [
      "Filtrowanie inwestycji po statusie (w budowie / gotowe / planowane)",
      "Liczniki lat doświadczenia i zrealizowanych projektów",
      "Spójny, elegancki design dopasowany do branży premium",
    ],
    tags: ["Real estate", "UI/UX", "Responsywność"],
    url: "https://jakubkierat.github.io/nova-estate/",
    year: "2024",
    image: "/projects/nova-estate.png",
    accent: "from-blue-900 to-amber-400",
  },
  {
    slug: "winnica-lumen",
    title: "Winnica Lumen",
    tagline: "Motyw WordPress dla winiarni",
    description:
      "Autorski motyw WordPress dla rodzinnej winiarni z katalogiem win opartym o custom post type i sekcją opowiadającą historię marki.",
    highlights: [
      "Katalog win jako Custom Post Type w WordPressie",
      "Poziomy scroll z kartami wybranych roczników",
      "Sekcja procesu \"od wiadomości do kieliszka w ręku\"",
    ],
    tags: ["WordPress", "Custom Post Type", "Theme dev"],
    url: "https://jakubkierat.github.io/winnica-lumen-wordpress-theme/index.html",
    year: "2024",
    image: "/projects/winnica-lumen.png",
    accent: "from-rose-950 to-amber-300",
  },
  {
    slug: "fadeco",
    title: "Fadeco",
    tagline: "Barbershop z rezerwacją wizyt online",
    description:
      "Strona barbershopu z kreatorem rezerwacji wizyt. Dostępne terminy liczą się na bieżąco na podstawie grafiku barbera i długości usługi, więc podwójna rezerwacja tego samego terminu nie jest możliwa.",
    highlights: [
      "Kreator rezerwacji: usługa, barber, termin, dane, płatność",
      "Zadatek online lub płatność w salonie do wyboru",
      "Wolne godziny liczone na żywo, bez ryzyka kolizji terminów",
    ],
    tags: ["Next.js", "React", "Tailwind CSS"],
    url: "https://jakubkierat.github.io/fadeco/",
    year: "2026",
    image: "/projects/fadeco.png",
    accent: "from-emerald-500 to-teal-900",
  },
];
