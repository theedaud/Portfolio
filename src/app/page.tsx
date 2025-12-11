import { CaseStudies } from "@/components/sections/CaseStudies";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
    </main>
  );
}

