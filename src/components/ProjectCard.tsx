"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group overflow-hidden rounded-2xl border border-border bg-surface/60 bg-gradient-to-br ${project.accent} p-[1px]`}
    >
      <div className="rounded-2xl bg-surface">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center gap-1.5 border-b border-border bg-background-soft px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2 truncate rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted">
              {displayUrl}
            </span>
            <ArrowUpRight
              size={14}
              className="ml-auto shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>

          <div className="relative h-64 overflow-hidden bg-background-soft">
            <Image
              src={project.image}
              alt={`Zrzut ekranu strony ${project.title}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-top blur-2xl opacity-40 scale-110"
              aria-hidden="true"
            />
            <Image
              src={project.image}
              alt={`Zrzut ekranu strony ${project.title}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
          </div>
        </a>

        <div className="p-6">
          <p className="text-sm text-muted">{project.description}</p>

          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-muted/70">
            Funkcje
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                {h}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-muted/70">
            Technologie
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-3 transition-colors hover:text-accent-2"
          >
            Zobacz stronę
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
