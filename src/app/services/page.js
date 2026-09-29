import ServicesHero from "@/sections/services/ServicesHero/ServicesHero";
import ServiceList from "@/sections/services/ServiceList/ServiceList";
import HowItWorks from "@/sections/services/HowItWorks/HowItWorks";
import WhyChoose from "@/sections/services/WhyChoose/WhyChoose";
import ServicesCTA from "@/sections/services/ServicesCTA/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceList />
      <HowItWorks />
      <WhyChoose />
      <ServicesCTA />
    </main>
  );
}