import CareersHero from "@/sections/careers/CareersHero/CareersHero";
import WhyJoinUs from "@/sections/careers/WhyJoinUs/WhyJoinUs";
import CurrentOpenings from "@/sections/careers/CurrentOpenings/CurrentOpenings";
import HiringProcess from "@/sections/careers/HiringProcess/HiringProcess";
import ResumeCTA from "@/sections/careers/ResumeCTA/ResumeCTA";
import TeamTestimonials from "@/sections/careers/TeamTestimonials/TeamTestimonials";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoinUs />
      <CurrentOpenings />
      <HiringProcess />
      <ResumeCTA />
      <TeamTestimonials />
    </main>
  );
}