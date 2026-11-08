import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/ProgramsSection";
import ProgramCTA from "@/components/ProgramCTA";
import Workshops from "@/components/Workshops";
import WorkshopCTA from "@/components/WorkshopCTA";
import LearningApproach from "@/components/LearningApproach";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import CareerSupport from "@/components/CareerSupport";
import FirstCohortPopup from "@/components/FirstCohortPopup";
import ProgramComparison from "@/components/ProgramComparison";
import FAQ from "@/components/FAQ";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-base">
      <main>
        <Hero />
        <About />
        <Programs />
        <ProgramComparison />
        <ProgramCTA />
        <LearningApproach />
        <CareerSupport />
        <Workshops />
        <WorkshopCTA />
        <Resources />
        <FAQ />
        <CTA />
        <FirstCohortPopup />
      </main>
    </div>
  );
}
