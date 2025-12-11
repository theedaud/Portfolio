"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

function HeroMarquee() {
  // Ticker images from assets
  const images = [
    "/assets/Ticker_01.jpg",
    "/assets/Ticker_02.jpg",
    "/assets/Ticker_03.jpg",
    "/assets/Ticker_04.jpg",
    "/assets/Ticker_05.jpg",
    "/assets/Ticker_06.jpg",
    "/assets/Ticker_07.jpg",
    "/assets/Ticker_08.jpg",
    "/assets/Ticker_09.jpg",
  ];

  // Duplicate the array multiple times for seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];

  const [isHovered, setIsHovered] = useState(false);
  const baseDuration = 90;
  const hoverDuration = baseDuration * 3; // 3x slower on hover

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-6"
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
            className="group relative h-[500px] w-auto flex-shrink-0 rounded-[18px] border border-[rgba(180,180,180,0.2)] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: (index % images.length) * 0.1, // Stagger animation
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={src}
              alt={`Project ${(index % images.length) + 1}`}
              className="h-full w-auto object-contain pointer-events-none"
              style={{ width: "auto", height: "100%" }}
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
      className="flex flex-col items-center justify-center bg-white pt-[190px] pb-[96px] gap-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-[190px] px-6">
        {/* Text Content */}
        <div className="flex w-full flex-col gap-[39px]">
          {/* Main Heading */}
          <h1
            className="font-sans font-medium text-black"
            style={{
              fontSize: "48px",
              lineHeight: "1.1em",
              letterSpacing: "-0.06em", // -6%
            }}
          >
            Healthcare UX Designer & Strategist:
            <br />
            creating and scaling user-centric designs
          </h1>

          {/* Subtext */}
          <p
            className="font-sans font-regular text-[#363636]"
            style={{
              fontSize: "20px",
              lineHeight: "1.35em",
              letterSpacing: "-0.015em", // -1.5%
            }}
          >
            Designing better healthcare, fintech & Saas products. Specialised
            in mobile applications, and web platforms
          </p>

          {/* View Work Button */}
          <button
            className={cn(
              "inline-flex items-center gap-[5px] self-start font-sans text-[#363636] transition-colors hover:opacity-80"
            )}
            style={{
              fontSize: "18px",
              lineHeight: "1.3em",
              letterSpacing: "-0.02em", // -2%
              fontWeight: 500,
            }}
          >
            <span>View Work</span>
            {/* <ArrowRight className="h-[17.81px] w-[17.89px]" /> */}
          </button>
        </div>
      </div>

      {/* Images Marquee - Edge to Edge */}
      <HeroMarquee />
    </section>
  );
}

