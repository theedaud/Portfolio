"use client";

import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Research & Strategy",
      items: [
        "UX Research ",
        "User Journeys ⋅ Sitemaps ",
        "Product Strategy",
        "Design Critique ",
      ],
    },
    {
      title: "Design & Prototyping",
      items: [
        "End-to-End Product Experience ",
        "Interface Design",
        "Design Systems",
        "Design Management ",
      ],
    },
    {
      title: "Conversion Optimization ",
      items: [
        "Usability Testing",
        "A/B Testing",
        "Page Speed Optimization ",
        "Product Redesign ",
      ],
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center overflow-hidden bg-white"
      style={{
        padding: "190px 0px 280px",
        boxShadow: "inset 0px -20px 68px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
        {/* Section Heading */}
        <h2
          className="font-sans font-medium text-black"
          style={{
            fontSize: "32px",
            lineHeight: "1.1em",
            letterSpacing: "-0.04em", // -4%
          }}
        >
          What i can help with:
        </h2>

        {/* Services Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl"
              style={{
                borderRadius: "12px",
              }}
            >
              {/* Service Category Title */}
              <h3
                className="font-sans font-medium text-black"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.05em",
                  letterSpacing: "-0.03em", // -3%
                }}
              >
                {service.title}
              </h3>

              {/* Service List */}
              <ul className="flex flex-col gap-1.5">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-sans font-normal"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.3em",
                      letterSpacing: "-0.025em", // -2.5%
                      color: "#3F3F46", // Grey/700
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Image Container - Three Overlapping Boxes (60% visible, clipped) */}
      <div
        className="absolute left-1/2 overflow-hidden"
        style={{
          width: "60%",
          height: "288px",
          bottom: "-106px",
          transform: "translateX(-50%)",
        }}
      >
        {/* Full width container for boxes, positioned to show 60% */}
        <div
          className="relative"
          style={{
            width: "962px",
            height: "100%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Image 1 (Leftmost - Foremost) */}
          <motion.div
            className="absolute bg-[#F5F5F7] cursor-pointer"
            initial={{ opacity: 0, y: 60, rotate: -1.83, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: -1.83,
              scale: 1,
            }}
            viewport={{ once: false }}
            whileHover={{ y: -10 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.4,
              delay: 0,
            }}
            style={{
              width: "333.567px",
              height: "246.734px",
              left: "-3.641px",
              top: "-11px",
              borderRadius: "12.707px",
              border: "4.236px solid #FFF",
              background: "#F5F5F7",
              boxShadow: "0 4.236px 25.415px -1.588px rgba(0, 0, 0, 0.05)",
              transform: "rotate(-1.83deg)",
            }}
          />

          {/* Image 2 (Middle - Behind leftmost) */}
          <motion.div
            className="absolute bg-[#F5F5F7] cursor-pointer"
            initial={{ opacity: 0, y: 60, rotate: 1.5, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 1.5,
              scale: 1,
            }}
            viewport={{ once: false }}
            whileHover={{ y: -10 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.4,
              delay: 0.1,
            }}
            style={{
              width: "333.567px",
              height: "246.734px",
              left: "291px",
              top: "15px",
              borderRadius: "12.707px",
              border: "4.236px solid #FFF",
              background: "#F5F5F7",
              boxShadow: "0 4.236px 25.415px -1.588px rgba(0, 0, 0, 0.05)",
              transform: "rotate(1.5deg)",
            }}
          />

          {/* Image 3 (Rightmost - Behind middle, fanned higher) */}
          <motion.div
            className="absolute bg-[#F5F5F7] cursor-pointer"
            initial={{ opacity: 0, y: 60, rotate: -1.83, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: -1.83,
              scale: 1,
            }}
            viewport={{ once: false }}
            whileHover={{ y: -10 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.4,
              delay: 0.2,
            }}
            style={{
              width: "333.567px",
              height: "246.734px",
              left: "600px",
              top: "-5px",
              borderRadius: "12.707px",
              border: "4.236px solid #FFF",
              background: "#F5F5F7",
              boxShadow: "0 4.236px 25.415px -1.588px rgba(0, 0, 0, 0.05)",
              transform: "rotate(-1.83deg)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

