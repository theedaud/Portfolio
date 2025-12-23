"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Ticker images from assets
const tickerImages = [
  "/assets/hero/Ticker_01.jpg",
  "/assets/hero/Ticker_02.jpg",
  "/assets/hero/Ticker_03.jpg",
  "/assets/hero/Ticker_04.jpg",
  "/assets/hero/Ticker_05.jpg",
  "/assets/hero/Ticker_06.jpg",
  "/assets/hero/Ticker_07.jpg",
  "/assets/hero/Ticker_08.jpg",
  "/assets/hero/Ticker_09.jpg",
];

function HeroMarquee() {
  // Duplicate the array twice for seamless infinite loop (reduced from 3x to 2x)
  const duplicatedImages = [...tickerImages, ...tickerImages];

  const [isHovered, setIsHovered] = useState(false);
  const baseDuration = 90;
  const hoverDuration = baseDuration * 3; // 3x slower on hover

  return (
    <div className="relative w-full overflow-hidden" aria-label="Project showcase gallery">
      <motion.div
        className="flex items-center gap-4 md:gap-6"
        animate={{ x: "-50%" }}
        transition={{
          ease: "linear",
          duration: isHovered ? hoverDuration : baseDuration,
          repeat: Infinity,
        }}
        style={{
          width: "max-content",
        }}
      >
        {duplicatedImages.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            className="group relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] w-auto flex-shrink-0 rounded-2xl md:rounded-[18px] border border-[rgba(180,180,180,0.2)] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: (index % tickerImages.length) * 0.1,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={src}
              alt={`Project showcase ${(index % tickerImages.length) + 1}`}
              width={500}
              height={500}
              className="h-full w-auto object-contain pointer-events-none"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 420px, 500px"
              loading={index < 4 ? "eager" : "lazy"}
              priority={index < 2}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center bg-white pt-32 pb-16 gap-16 md:pt-[190px] md:pb-[96px] md:gap-[120px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-16 md:gap-[190px] px-6">
        {/* Text Content */}
        <div className="flex w-full flex-col gap-8 md:gap-[39px]">
          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="font-sans font-medium text-black text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.1em] tracking-[-0.06em]"
          >
            Healthcare UX Designer & Strategist:
            <br />
            creating and scaling user-centric designs
          </h1>

          {/* Subtext */}
          <p
            className="font-sans font-normal text-[#363636] text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.35em] tracking-[-0.015em]"
          >
            Designing better healthcare, fintech & Saas products. Specialised
            in mobile applications, and web platforms
          </p>

          {/* View Work Button - Now links to case studies */}
          <Link
            href="#case-studies"
            className={cn(
              "inline-flex items-center gap-2 self-start font-sans text-[#363636] transition-colors hover:opacity-80 font-medium text-lg tracking-[-0.02em] leading-[1.3em]"
            )}
            aria-label="View my work and case studies"
          >
            <span>View Work</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Images Marquee - Edge to Edge */}
      <HeroMarquee />
    </section>
  );
}
