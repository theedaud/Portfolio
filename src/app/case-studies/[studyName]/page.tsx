import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { caseStudies } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ studyName: string }>;
}): Promise<Metadata> {
  const { studyName } = await params;
  const caseStudy = caseStudies[studyName];

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

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ studyName: string }>;
}) {
  const { studyName } = await params;
  const caseStudy = caseStudies[studyName];

  if (!caseStudy) {
    notFound();
  }

  // Only show detailed content for fitcy-health
  if (studyName !== "fitcy-health") {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <section
          className="flex flex-col items-center"
          style={{
            padding: "190px 0px",
          }}
        >
          <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-sans font-semibold uppercase text-[#134E48]"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {caseStudy.category}
                </span>
                <h1
                  className="font-sans font-medium text-black"
                  style={{
                    fontSize: "32px",
                    lineHeight: "1.1em",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {caseStudy.title}
                </h1>
              </div>
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.35em",
                  letterSpacing: "-0.015em",
                  color: "#3F3F46",
                }}
              >
                {caseStudy.description}
              </p>
            </div>
            <div
              className="relative w-full overflow-hidden rounded-3xl bg-[#F5F5F7]"
              style={{
                height: "620.09px",
                borderRadius: "24px",
              }}
            >
              <Image
                src={caseStudy.imageUrl}
                alt={`${caseStudy.title} Case Study`}
                fill
                className="object-cover"
                unoptimized
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
        className="relative flex flex-col items-center bg-white overflow-visible"
        style={{
          padding: "0px",
        }}
      >
        <Header className="absolute top-0 left-0 right-0 z-50 w-full !bg-transparent pointer-events-auto" />

        {/* Header Image */}
        <div className="relative z-0 w-full">
          <div
            className="relative w-full"
            style={{
              height: "825px", // Match the Figma/placeholder height
            }}
          >
            <Image
              src="/assets/fitcy_Header_Image.png"
              alt="Fitcy Health Case Study Header"
              fill
              className="object-cover object-center" // Full width cover
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section
        className="flex flex-col items-center bg-white"
        style={{
          padding: "60px 6px 24px",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-row justify-stretch gap-[55px] px-6">
          {/* Responsibilities */}
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="font-sans font-semibold uppercase text-[#3F3F46]"
              style={{
                fontSize: "14px",
                lineHeight: "1.4em",
                letterSpacing: "-0.03em",
              }}
            >
              Responsibilities
            </span>
            <p
              className="font-sans font-medium text-black"
              style={{
                fontSize: "16px",
                lineHeight: "1.05em",
                letterSpacing: "-0.03em",
              }}
            >
              Research, Strategy & Design
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="font-sans font-semibold uppercase text-[#3F3F46]"
              style={{
                fontSize: "14px",
                lineHeight: "1.4em",
                letterSpacing: "-0.03em",
              }}
            >
              TimeLine
            </span>
            <p
              className="font-sans font-medium text-black"
              style={{
                fontSize: "16px",
                lineHeight: "1.05em",
                letterSpacing: "-0.03em",
              }}
            >
              ≈ 4 months
            </p>
          </div>

          {/* Contributors */}
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="font-sans font-semibold uppercase text-[#3F3F46]"
              style={{
                fontSize: "14px",
                lineHeight: "1.4em",
                letterSpacing: "-0.03em",
              }}
            >
              Contributors
            </span>
            <p
              className="font-sans font-medium text-black"
              style={{
                fontSize: "16px",
                lineHeight: "1.05em",
                letterSpacing: "-0.03em",
              }}
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
        className="flex flex-col items-center bg-white"
        style={{
          padding: "190px 0px",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
          {/* Section Title */}
          <h2
            className="font-sans font-medium text-black"
            style={{
              fontSize: "48px",
              lineHeight: "1.1em",
              letterSpacing: "-0.06em", // -6%
            }}
          >
            About Project
          </h2>

          {/* Content Container */}
          <div className="flex flex-col gap-12">
            {/* About Fitcy Health */}
            <div className="flex flex-col gap-4">
              <h3
                className="font-sans font-semibold text-[#18181B]"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.3em",
                  letterSpacing: "-0.025em", // -2.5%
                }}
              >
                About Fitcy Health?
              </h3>
              <p
                className="font-sans font-normal text-[#3F3F46]"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.35em",
                  letterSpacing: "-0.015em", // -1.5%
                }}
              >
                Fitcy bridges the gap between people seeking mental health
                support and therapists who understand their culture, speak
                their language, and align with their needs.
              </p>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-6">
              <h3
                className="font-sans font-semibold text-[#18181B]"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.2em",
                  letterSpacing: "-0.025em", // -2.5%
                }}
              >
                Challenges
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Challenge 1 */}
                <div
                  className="relative overflow-hidden rounded-2xl border-4 border-white bg-[#E6F1F0] p-4"
                  style={{
                    boxShadow:
                      "0px 1px 8px 0px rgba(0, 0, 0, 0.11), 0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="absolute bottom-0 right-0 h-5 w-5 rounded-tl-full"
                    style={{
                      background: "rgba(1, 101, 92, 0.2)",
                    }}
                  />
                  <p
                    className="relative font-sans font-semibold text-[#007569]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5em",
                      letterSpacing: "-0.01em",
                      opacity: 0.65,
                    }}
                  >
                    Difficulty Finding the Right Therapist
                  </p>
                </div>

                {/* Challenge 2 */}
                <div
                  className="relative overflow-hidden rounded-2xl border-4 border-white bg-[#F3E0FF] p-4"
                  style={{
                    boxShadow:
                      "0px 1px 8px 0px rgba(0, 0, 0, 0.11), 0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="absolute bottom-0 right-0 h-5 w-5 rounded-tl-full"
                    style={{
                      background: "rgba(133, 78, 168, 0.2)",
                    }}
                  />
                  <p
                    className="relative font-sans font-semibold text-[#490079]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5em",
                      letterSpacing: "-0.01em",
                      opacity: 0.65,
                    }}
                  >
                    Lack of Personalization & Cultural Sensitivity
                  </p>
                </div>

                {/* Challenge 3 */}
                <div
                  className="relative overflow-hidden rounded-2xl border-4 border-white bg-[#FFEBD0] p-4"
                  style={{
                    boxShadow:
                      "0px 1px 8px 0px rgba(0, 0, 0, 0.11), 0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="absolute bottom-0 right-0 h-5 w-5 rounded-tl-full"
                    style={{
                      background: "rgba(173, 131, 73, 0.2)",
                    }}
                  />
                  <p
                    className="relative font-sans font-semibold text-[#814A00]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5em",
                      letterSpacing: "-0.01em",
                      opacity: 0.65,
                    }}
                  >
                    Managing Appointments & Follow-Ups
                  </p>
                </div>

                {/* Challenge 4 */}
                <div
                  className="relative overflow-hidden rounded-2xl border-4 border-white bg-[#C9F0FF] p-4"
                  style={{
                    boxShadow:
                      "0px 1px 8px 0px rgba(0, 0, 0, 0.11), 0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="absolute bottom-0 right-0 h-5 w-5 rounded-tl-full"
                    style={{
                      background: "rgba(70, 137, 163, 0.2)",
                    }}
                  />
                  <p
                    className="relative font-sans font-semibold text-[#005271]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5em",
                      letterSpacing: "-0.01em",
                      opacity: 0.65,
                    }}
                  >
                    Communication with Therapist at any point
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Matching Section */}
      <section
        className="flex flex-col items-center bg-white"
        style={{
          padding: "190px 0px",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-16 px-6">
          {/* Content Container */}
          <div className="flex w-full max-w-[800px] flex-col gap-6">
            {/* Title and Description */}
            <div className="flex flex-col gap-6">
              <h2
                className="font-sans font-medium text-black"
                style={{
                  fontSize: "32px",
                  lineHeight: "1.1em",
                  letterSpacing: "-0.04em", // -4%
                }}
              >
                Therapist Matching
              </h2>
              <p
                className="font-sans font-normal text-[#3F3F46]"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.4em",
                  letterSpacing: "-0.015em", // -1.5%
                }}
              >
                The manual therapist matching system through a care team member
                on whatsApp and session management wasn't that user friendly on
                website
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div
                className="relative h-[600px] w-full overflow-hidden rounded-[22.69px]"
                style={{
                  backgroundImage:
                    "url('https://placehold.co/800x600/f5f5f7/0f172a?text=Therapist+Matching+1')",
                  backgroundSize: "cover",
                }}
              />
              <div
                className="relative h-[600px] w-full overflow-hidden rounded-[22.69px]"
                style={{
                  backgroundImage:
                    "url('https://placehold.co/800x600/f5f5f7/0f172a?text=Therapist+Matching+2')",
                  backgroundSize: "cover",
                }}
              />
              <div
                className="relative h-[600px] w-full overflow-hidden rounded-[22.69px]"
                style={{
                  backgroundImage:
                    "url('https://placehold.co/800x600/f5f5f7/0f172a?text=Therapist+Matching+3')",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

