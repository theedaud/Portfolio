"use client";

import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section id="case-studies" aria-label="Case Studies">
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.slug} study={study} />
      ))}
    </section>
  );
}
