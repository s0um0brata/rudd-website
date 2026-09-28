import Navbar from "@/components/layout/Navbar/Navbar";
import AboutHero from "@/sections/about/AboutHero/AboutHero";
import OurStory from "@/sections/about/OurStory/OurStory";
import AboutStats from "@/sections/about/AboutStats/AboutStats";
import OurValues from "@/sections/about/OurValues/OurValues";
import MissionVision from "@/sections/about/MissionVision/MissionVision";
import OurTeam from "@/sections/about/OurTeam/OurTeam";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurStory />
      <AboutStats />
      <OurValues />
      <MissionVision />
      <OurTeam />
    </main>
  );
}