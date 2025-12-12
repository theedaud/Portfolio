import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ studyName: string }>;
}): Promise<Metadata> {
  const { studyName } = await params;
  const caseStudy = getCaseStudyBySlug(studyName);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} — Ahmed Daud`,
    description: caseStudy.description,
  };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    studyName: study.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ studyName: string }>;
}) {
  const { studyName } = await params;
  const caseStudy = getCaseStudyBySlug(studyName);

  if (!caseStudy) {
    notFound();
  }

  // Only show detailed content for fitcy-health
  if (studyName !== "fitcy-health") {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <section
          className="flex flex-col items-center py-24 md:py-[190px]"
          aria-labelledby="case-study-title"
        >
          <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-10 md:gap-16 px-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-sans font-semibold uppercase text-[#134E48] text-sm tracking-[-0.03em] leading-[1.4em]"
                >
                  {caseStudy.category}
                </span>
                <h1
                  id="case-study-title"
                  className="font-sans font-medium text-black text-3xl md:text-[32px] leading-[1.1em] tracking-[-0.04em]"
                >
                  {caseStudy.title}
                </h1>
              </div>
              <p
                className="font-sans font-normal text-[#3F3F46] text-lg md:text-[20px] leading-[1.35em] tracking-[-0.015em]"
              >
                {caseStudy.description}
              </p>
            </div>
            <div
              className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-[#F5F5F7] h-[300px] md:h-[620.09px]"
            >
              <Image
                src={caseStudy.imageUrl}
                alt={`${caseStudy.title} Case Study`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Hero Section with Mockups */}
      <section
        className="relative flex flex-col items-center bg-white overflow-visible p-0"
        aria-label="Fitcy Health case study hero"
      >
        <Header className="absolute top-0 left-0 right-0 z-50 w-full !bg-transparent pointer-events-auto" />

        {/* Header Image */}
        <div className="relative z-0 w-full">
          <Image
            src="/assets/fitcy_Header_Image.jpg"
            alt="Fitcy Health Case Study Header"
            width={1920}
            height={825}
            className="w-full h-auto min-h-[300px] object-cover md:min-h-0"
            priority
            sizes="100vw"
          />
          
          {/* Cover Screenshot - Absolutely positioned, sticky to bottom of header image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[80vw]">
            <Image
              src="/assets/coverScreenshot.png"
              alt="Fitcy Health Product Mockups"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              sizes="80vw"
            />
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section
        className="flex flex-col items-center bg-white py-12 md:pt-[60px] md:pb-[24px]"
        aria-label="Project details"
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col md:flex-row justify-stretch gap-8 md:gap-[55px] px-6">
          {/* Responsibilities */}
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="font-sans font-semibold uppercase text-[#3F3F46] text-sm tracking-[-0.03em] leading-[1.4em]"
            >
              Responsibilities
            </span>
            <p
              className="font-sans font-medium text-black text-base md:text-[16px] leading-[1.05em] tracking-[-0.03em]"
            >
              Research, Strategy & Design
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="font-sans font-semibold uppercase text-[#3F3F46] text-sm tracking-[-0.03em] leading-[1.4em]"
            >
              Timeline
            </span>
            <p
              className="font-sans font-medium text-black text-base md:text-[16px] leading-[1.05em] tracking-[-0.03em]"
            >
              ≈ 4 months
            </p>
          </div>

          {/* Contributors */}
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="font-sans font-semibold uppercase text-[#3F3F46] text-sm tracking-[-0.03em] leading-[1.4em]"
            >
              Contributors
            </span>
            <p
              className="font-sans font-medium text-black text-base md:text-[16px] leading-[1.05em] tracking-[-0.03em]"
            >
              Ahmed (me)
              <br />
              Mahham (Product Manager)
            </p>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section
        className="flex flex-col items-center bg-white py-24 md:py-[190px]"
        aria-labelledby="about-project-heading"
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-12 md:gap-16 px-6">
          {/* Section Title */}
          <h2
            id="about-project-heading"
            className="font-sans font-medium text-black text-3xl md:text-[48px] leading-[1.1em] tracking-[-0.06em]"
          >
            About Project
          </h2>

          {/* Content Container */}
          <div className="flex flex-col gap-12">
            {/* About Fitcy Health */}
            <div className="flex flex-col gap-4">
              <h3
                className="font-sans font-semibold text-[#18181B] text-lg md:text-[20px] leading-[1.3em] tracking-[-0.025em]"
              >
                About Fitcy Health?
              </h3>
              <p
                className="font-sans font-normal text-[#3F3F46] text-lg md:text-[20px] leading-[1.35em] tracking-[-0.015em]"
              >
                Fitcy bridges the gap between people seeking mental health
                support and therapists who understand their culture, speak
                their language, and align with their needs.
              </p>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-6">
              <h3
                className="font-sans font-semibold text-[#18181B] text-lg md:text-[20px] leading-[1.2em] tracking-[-0.025em]"
              >
                Challenges
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" role="list">
                {/* Challenge Cards */}
                {[
                  { bg: "#E6F1F0", accent: "#01655C", text: "#007569", content: "Difficulty Finding the Right Therapist" },
                  { bg: "#F3E0FF", accent: "#854ea8", text: "#490079", content: "Lack of Personalization & Cultural Sensitivity" },
                  { bg: "#FFEBD0", accent: "#ad8349", text: "#814A00", content: "Managing Appointments & Follow-Ups" },
                  { bg: "#C9F0FF", accent: "#4689a3", text: "#005271", content: "Communication with Therapist at any point" },
                ].map((challenge, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl border-4 border-white p-4 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.11),0px_4px_16px_0px_rgba(0,0,0,0.05)]"
                    style={{ backgroundColor: challenge.bg }}
                    role="listitem"
                  >
                    <div
                      className="absolute bottom-0 right-0 h-5 w-5 rounded-tl-full"
                      style={{ backgroundColor: `${challenge.accent}33` }}
                      aria-hidden="true"
                    />
                    <p
                      className="relative font-sans font-semibold text-base leading-[1.5em] tracking-[-0.01em]"
                      style={{ color: `${challenge.text}A6` }}
                    >
                      {challenge.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Matching Section */}
      <section
        className="flex flex-col items-center bg-white py-24 md:py-[190px]"
        aria-labelledby="therapist-matching-heading"
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-10 md:gap-16 px-6">
          {/* Content Container */}
          <div className="flex w-full max-w-[800px] flex-col gap-6">
            {/* Title and Description */}
            <div className="flex flex-col gap-6">
              <h2
                id="therapist-matching-heading"
                className="font-sans font-medium text-black text-3xl md:text-[32px] leading-[1.1em] tracking-[-0.04em]"
              >
                Therapist Matching
              </h2>
              <p
                className="font-sans font-normal text-[#3F3F46] text-lg md:text-[18px] leading-[1.4em] tracking-[-0.015em]"
              >
                The manual therapist matching system through a care team member
                on whatsApp and session management wasn&apos;t that user friendly on
                website
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3" role="list" aria-label="Therapist matching design mockups">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-2xl md:rounded-[22.69px] bg-[#f5f5f7]"
                  role="listitem"
                >
                  <Image
                    src={`https://placehold.co/800x600/f5f5f7/0f172a.png?text=Therapist+Matching+${num}`}
                    alt={`Therapist Matching mockup ${num}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
