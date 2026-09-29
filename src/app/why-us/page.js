import WhyUsHero from "@/sections/why-us/WhyUsHero/WhyUsHero";
import OurAdvantages from "@/sections/why-us/OurAdvantages/OurAdvantages";
import OurImpact from "@/sections/why-us/OurImpact/OurImpact";
import WhyUsValues from "@/sections/why-us/WhyUsValues/WhyUsValues";
import WhyUsCTA from "@/sections/why-us/WhyUsCTA/WhyUsCTA";

export default function WhyUsPage() {
  return (
    <main>
      <WhyUsHero />
      <OurAdvantages />
      <OurImpact />
      <WhyUsValues />
      <WhyUsCTA />
    </main>
  );
}