import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import ProgramCTA from "@/components/ProgramCTA";
import Workshops from "@/components/Workshops";
import WorkshopCTA from "@/components/WorkshopCTA";
import LearningApproach from "@/components/LearningApproach";
import LabPreview from "@/components/LabPreview";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import FirstCohortPopup from "@/components/FirstCohortPopup";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-base">
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <ProgramCTA />
        <Workshops />
        <WorkshopCTA />
        <LearningApproach />
        <LabPreview />
        <Resources />
        <CTA />
        <FirstCohortPopup />
      </main>
    </div>
  );
}