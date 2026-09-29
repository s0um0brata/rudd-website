import ContactHero from "@/sections/contact/ContactHero/ContactHero";
import ContactForm from "@/sections/contact/ContactForm/ContactForm";
import OfficeLocation from "@/sections/contact/OfficeLocation/OfficeLocation";
import FAQ from "@/sections/contact/FAQ/FAQ";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <OfficeLocation />
      <FAQ />
    </main>
  );
}