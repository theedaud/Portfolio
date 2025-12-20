"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
    study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
    const isDark = study.theme === "dark";

    return (
        <div
            className={cn(
                "flex flex-col items-center py-24 md:py-[190px]",
                isDark ? "bg-slate-900" : "bg-white"
            )}
        >
            <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-10 md:gap-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4"
                >
                    {/* Title Section */}
                    <div className="flex flex-col gap-0.5">
                        {/* Category Label */}
                        <span
                            className={cn(
                                "font-sans font-semibold uppercase text-sm tracking-[-0.03em] leading-[1.4em]",
                                isDark ? "text-white/70" : "text-[#134E48]"
                            )}
                            style={study.categoryColor && !isDark ? { color: study.categoryColor } : undefined}
                        >
                            {study.category}
                        </span>
                        {/* Project Title */}
                        <h2
                            className={cn(
                                "font-sans font-medium text-2xl sm:text-3xl md:text-[32px] leading-[1.1em] tracking-[-0.04em]",
                                isDark ? "text-white" : "text-black"
                            )}
                        >
                            {study.title}
                        </h2>
                    </div>

                    {/* Description */}
                    <p
                        className={cn(
                            "font-sans font-normal text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.35em] tracking-[-0.015em]",
                            isDark ? "text-slate-300" : "text-[#3F3F46]"
                        )}
                    >
                        {study.description}
                    </p>

                    {/* View Case Study Button */}
                    <Link
                        href={`/case-studies/${study.slug}`}
                        className={cn(
                            "inline-flex items-center self-start font-sans transition-colors hover:opacity-80 underline text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.35em] tracking-[-0.015em]",
                            isDark ? "text-slate-300" : "text-[#363636]"
                        )}
                        aria-label={`View ${study.title} case study`}
                    >
                        View Case Study
                    </Link>
                </motion.div>

                {/* Cover Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn(
                        "relative w-full overflow-hidden rounded-2xl md:rounded-3xl h-[280px] sm:h-[380px] md:h-[500px] lg:h-[620px]",
                        isDark ? "bg-slate-800" : "bg-[#F5F5F7]"
                    )}
                >
                    <Image
                        src={study.imageUrl}
                        alt={`${study.title} Case Study`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1024px"
                    />
                </motion.div>
            </div>
        </div>
    );
}
