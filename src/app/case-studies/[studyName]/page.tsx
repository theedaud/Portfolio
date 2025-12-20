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

  const { detail } = caseStudy;

  // Basic layout for case studies without detailed content
  if (!detail) {
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
                <span className="font-sans font-semibold uppercase text-[#134E48] text-sm tracking-[-0.03em] leading-[1.4em]">
                  {caseStudy.category}
                </span>
                <h1
                  id="case-study-title"
                  className="font-sans font-medium text-black text-3xl md:text-[32px] leading-[1.1em] tracking-[-0.04em]"
                >
                  {caseStudy.title}
                </h1>
              </div>
              <p className="font-sans font-normal text-[#3F3F46] text-lg md:text-[20px] leading-[1.35em] tracking-[-0.015em]">
                {caseStudy.description}
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-[#F5F5F7] h-[300px] md:h-[620px]">
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

  // Detailed layout for case studies with full content
  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Hero Section with Mockups */}
      <section
        className="relative flex flex-col items-center bg-white overflow-visible p-0"
        aria-label={`${caseStudy.title} case study hero`}
      >
        <Header className="absolute top-0 left-0 right-0 z-50 w-full !bg-transparent pointer-events-auto" />

        {/* Header Image */}
        {detail.headerImage && (
          <div className="relative z-0 w-full">
            <Image
              src={detail.headerImage}
              alt={`${caseStudy.title} Case Study Header`}
              width={1920}
              height={825}
              className="w-full h-auto min-h-[300px] object-cover md:min-h-0"
              priority
              sizes="100vw"
            />

            {/* Cover Screenshot */}
            {detail.coverImage && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[80vw]">
                <Image
                  src={detail.coverImage}
                  alt={`${caseStudy.title} Product Mockups`}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="80vw"
                  quality={95}
                />
              </div>
            )}
          </div>
        )}
      </section>

      {/* Role Section */}
      {(detail.responsibilities || detail.timeline || detail.contributors) && (
        <section
          className="flex flex-col items-center bg-white py-12 md:pt-[24px] md:pb-[24px]"
          aria-label="Project details"
        >
          <div className="mx-auto flex w-full max-w-[1024px] flex-col md:flex-row justify-stretch gap-8 md:gap-[55px] px-6">
            {detail.responsibilities && (
              <div className="flex flex-1 flex-col gap-1">
                <span className="font-sans font-semibold uppercase text-[#3F3F46] text-sm tracking-[-0.03em] leading-[1.4em]">
                  Responsibilities
                </span>
                <p className="font-sans font-medium text-black text-base md:text-[16px] leading-[1.05em] tracking-[-0.03em]">
                  {detail.responsibilities}
                </p>
              </div>
            )}

            {detail.timeline && (
              <div className="flex flex-1 flex-col gap-1">
                <span className="font-sans font-semibold uppercase text-[#3F3F46] text-sm tracking-[-0.03em] leading-[1.4em]">
                  Timeline
                </span>
                <p className="font-sans font-medium text-black text-base md:text-[16px] leading-[1.05em] tracking-[-0.03em]">
                  {detail.timeline}
                </p>
              </div>
            )}

            {detail.contributors && detail.contributors.length > 0 && (
              <div className="flex flex-1 flex-col gap-1">
                <span className="font-sans font-semibold uppercase text-[#3F3F46] text-sm tracking-[-0.03em] leading-[1.4em]">
                  Contributors
                </span>
                <p className="font-sans font-medium text-black text-base md:text-[16px] leading-[1.05em] tracking-[-0.03em]">
                  {detail.contributors.map((contributor, index) => (
                    <span key={index}>
                      {contributor}
                      {index < detail.contributors!.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* About Project Section */}
      {(detail.aboutTitle || detail.challenges) && (
        <section
          className="flex flex-col items-center bg-white py-24 md:py-[190px]"
          aria-labelledby="about-project-heading"
        >
          <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-12 md:gap-16 px-6">
            <h2
              id="about-project-heading"
              className="font-sans font-medium text-black text-3xl md:text-[48px] leading-[1.1em] tracking-[-0.06em]"
            >
              About Project
            </h2>

            <div className="flex flex-col gap-12">
              {detail.aboutTitle && detail.aboutDescription && (
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-semibold text-[#18181B] text-lg md:text-[20px] leading-[1.3em] tracking-[-0.025em]">
                    {detail.aboutTitle}
                  </h3>
                  <p className="font-sans font-normal text-[#3F3F46] text-lg md:text-[20px] leading-[1.35em] tracking-[-0.015em]">
                    {detail.aboutDescription}
                  </p>
                </div>
              )}

              {detail.challenges && detail.challenges.length > 0 && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-sans font-semibold text-[#18181B] text-lg md:text-[20px] leading-[1.2em] tracking-[-0.025em]">
                    Challenges
                  </h3>
                  <div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                    role="list"
                  >
                    {detail.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl border border-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06),0px_2px_8px_0px_rgba(0,0,0,0.03)]"
                        style={{ 
                          backgroundColor: challenge.bg,
                          padding: '24px',
                          minHeight: '140px',
                          display: 'flex',
                          alignItems: 'flex-start'
                        }}
                        role="listitem"
                      >
                        <p
                          className="relative font-sans font-semibold text-base leading-[1.5em] tracking-[-0.01em]"
                          style={{ color: challenge.text }}
                        >
                          {challenge.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Sections */}
      {detail.sections &&
        detail.sections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="flex flex-col items-center bg-white py-24 md:py-[190px]"
            aria-labelledby={`section-${sectionIndex}-heading`}
          >
            <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
              {/* Details Container - max-width 800px, gap 24px */}
              <div className="flex w-full max-w-[800px] flex-col gap-6">
                <h2
                  id={`section-${sectionIndex}-heading`}
                  className="font-sans font-medium text-black text-3xl md:text-[32px] leading-[1.1em] tracking-[-0.04em]"
                >
                  {section.title}
                </h2>
                <p className="font-sans font-normal text-[#3F3F46] text-lg md:text-[18px] leading-[1.4em] tracking-[-0.015em]">
                  {section.description}
                </p>
              </div>

              {/* Images Container - 96px gap from details */}
              {section.images && section.images.length > 0 && (
                <div
                  className="flex flex-col gap-6 w-full"
                  role="list"
                  aria-label={`${section.title} design mockups`}
                >
                  {Array.from({ length: Math.ceil(section.images.length / 3) }).map((_, groupIndex) => {
                    const startIndex = groupIndex * 3;
                    const groupImages = section.images.slice(startIndex, startIndex + 3);
                    
                    return (
                      <div
                        key={groupIndex}
                        className="rounded-[24px] bg-slate-50/50"
                        style={{ padding: '40px' }}
                      >
                        <div 
                          className="flex flex-wrap justify-center gap-6 w-full"
                          style={{ flexWrap: 'wrap' }}
                        >
                          {groupImages.map((image, imageIndex) => (
                            <div
                              key={startIndex + imageIndex}
                              className="relative overflow-hidden rounded-[24px] bg-white border border-slate-100 w-full md:w-[calc(33.333%-1rem)]"
                              style={{ 
                                padding: '0px'
                              }}
                              role="listitem"
                            >
                              <div 
                                className="relative w-full h-full mx-auto"
                                style={{ 
                                  aspectRatio: '9/19.5',
                                  maxWidth: '100%'
                                }}
                              >
                                <Image
                                  src={image}
                                  alt={`${section.title} mockup ${startIndex + imageIndex + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  quality={95}
                                  priority={startIndex + imageIndex < 3}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        ))}
    </main>
  );
}
