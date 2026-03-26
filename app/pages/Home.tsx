import HeroSection from '../components/sections/hero';
import ProjectsSection from '../components/sections/projects';

export default function PortfolioHero() {
  return (
    <main className="min-h-screen bg-blue-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-[25px] shadow-xl overflow-hidden border border-blue-200">
        {/* HERO SECTION */}
        <HeroSection />

        {/* PROJECT STACKS SECTION */}
        <ProjectsSection />
      </div>
    </main>
  );
}
