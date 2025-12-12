"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Service data extracted for cleaner component
  const services = [
    {
      title: "Research & Strategy",
      items: [
      "UX Research",
      "User Journeys ⋅ Sitemaps",
        "Product Strategy",
      "Design Critique",
      ],
    },
    {
      title: "Design & Prototyping",
      items: [
      "End-to-End Product Experience",
        "Interface Design",
        "Design Systems",
      "Design Management",
      ],
    },
    {
    title: "Conversion Optimization",
      items: [
        "Usability Testing",
        "A/B Testing",
      "Page Speed Optimization",
      "Product Redesign",
      ],
    },
  ];

// Decorative card data
const decorativeCards = [
  { rotate: "-1.83deg", left: "-4px", top: "-11px", delay: 0 },
  { rotate: "1.5deg", left: "291px", top: "15px", delay: 0.1 },
  { rotate: "-1.83deg", left: "600px", top: "-5px", delay: 0.2 },
];

export function Services() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden bg-white py-24 md:pt-[190px] md:pb-[280px] shadow-[inset_0px_-20px_68px_0px_rgba(0,0,0,0.05)]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-10 md:gap-16 px-6">
        {/* Section Heading */}
        <h2
          id="services-heading"
          className="font-sans font-medium text-black text-3xl md:text-[32px] leading-[1.1em] tracking-[-0.04em]"
        >
          What i can help with:
        </h2>

        {/* Services Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-6 rounded-xl"
            >
              {/* Service Category Title */}
              <h3
                className="font-sans font-medium text-black text-lg md:text-[16px] leading-[1.05em] tracking-[-0.03em]"
              >
                {service.title}
              </h3>

              {/* Service List */}
              <ul className="flex flex-col gap-1.5" role="list">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-sans font-normal text-[#3F3F46] text-base md:text-[14px] leading-[1.3em] tracking-[-0.025em]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Image Container - Three Overlapping Boxes (Visible only on desktop) */}
      <div
        className={cn(
          "hidden md:block absolute left-1/2",
          "w-[60%] h-[288px] -bottom-[106px] -translate-x-1/2"
        )}
        aria-hidden="true"
      >
        {/* Full width container for boxes, positioned to show 60% */}
        <div className="relative w-[962px] h-full left-1/2 -translate-x-1/2">
          {decorativeCards.map((card, index) => (
          <motion.div
              key={index}
              className={cn(
                "absolute bg-[#F5F5F7] cursor-pointer",
                "w-[334px] h-[247px] rounded-[13px]",
                "border-4 border-white",
                "shadow-[0_4px_25px_-2px_rgba(0,0,0,0.05)]"
              )}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: false }}
            whileHover={{ y: -10 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.4,
                delay: card.delay,
            }}
            style={{
                left: card.left,
                top: card.top,
                rotate: card.rotate,
            }}
          />
          ))}
        </div>
      </div>
    </section>
  );
}
