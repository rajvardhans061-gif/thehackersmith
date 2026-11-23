import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/ProgramsSection";
import Workshops from "@/components/Workshops";
import LearningApproach from "@/components/LearningApproach";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import FirstCohortPopup from "@/components/FirstCohortPopup";
import FAQ from "@/components/FAQ";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-base">
      <main>
        <Hero />
        <About />
        <Programs />
        <LearningApproach />
        <Workshops />
        <Resources />
        <FAQ />
        <CTA />
        <FirstCohortPopup />
      </main>
    </div>
  );
}
