"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section>
      {/* Case Study 1 - Fitcy Health (Light) */}
      <div
        className="flex flex-col items-center bg-white"
        style={{
          padding: "190px 0px",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
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
                className="font-sans font-semibold uppercase text-[#134E48]"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.4em",
                  letterSpacing: "-0.03em", // -3%
                }}
              >
                Healthcare
              </span>
              {/* Project Title */}
              <h2
                className="font-sans font-medium text-black"
                style={{
                  fontSize: "32px",
                  lineHeight: "1.1em",
                  letterSpacing: "-0.04em", // -4%
                }}
              >
                Fitcy Health
              </h2>
            </div>

            {/* Description */}
            <p
              className="font-sans font-normal"
              style={{
                fontSize: "20px",
                lineHeight: "1.35em",
                letterSpacing: "-0.015em", // -1.5%
                color: "#3F3F46", // Grey/700
              }}
            >
              Designed the UI and UX for Fitcy Health, delivering the complete
              mobile app, web platform, and responsive website.
            </p>

            {/* View Case Study Button */}
            <Link
              href="/case-studies/fitcy-health"
              className="inline-flex items-center self-start font-sans text-[#363636] transition-colors hover:opacity-80 underline"
              style={{
                fontSize: "20px",
                lineHeight: "1.35em",
                letterSpacing: "-0.015em", // -1.5%
              }}
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
            className="relative w-full overflow-hidden rounded-3xl bg-[#F5F5F7]"
            style={{
              height: "620.09px",
              borderRadius: "24px",
            }}
          >
            <Image
              src="https://placehold.co/1600x900/f5f5f7/0f172a?text=Fitcy+Health+Case+Study"
              alt="Fitcy Health Case Study"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </div>

      {/* Case Study 2 - SaveLifeAI (Dark) */}
      <div
        className="flex flex-col items-center bg-slate-900"
        style={{
          padding: "190px 0px",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
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
                className="font-sans font-semibold uppercase text-white/70"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.4em",
                  letterSpacing: "-0.03em", // -3%
                }}
              >
                Healthcare
              </span>
              {/* Project Title */}
              <h2
                className="font-sans font-medium text-white"
                style={{
                  fontSize: "32px",
                  lineHeight: "1.1em",
                  letterSpacing: "-0.04em", // -4%
                }}
              >
                SaveLifeAI
              </h2>
            </div>

            {/* Description */}
            <p
              className="font-sans font-normal text-slate-300"
              style={{
                fontSize: "20px",
                lineHeight: "1.35em",
                letterSpacing: "-0.015em", // -1.5%
              }}
            >
              An AI-powered emergency response system that connects patients
              with critical care resources in real-time.
            </p>

            {/* View Case Study Button */}
            <Link
              href="/case-studies/savelifeai"
              className="inline-flex items-center self-start font-sans text-slate-300 transition-colors hover:opacity-80 underline"
              style={{
                fontSize: "20px",
                lineHeight: "1.35em",
                letterSpacing: "-0.015em", // -1.5%
              }}
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
            className="relative w-full overflow-hidden rounded-3xl bg-slate-800"
            style={{
              height: "620.09px",
              borderRadius: "24px",
            }}
          >
            <Image
              src="https://placehold.co/1600x900/1e293b/ffffff?text=SaveLifeAI+Case+Study"
              alt="SaveLifeAI Case Study"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

