import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesTimeline from "@/components/services-timeline";
import GuaranteeSection from "@/components/guarantee-section";
import PricingSection from "@/components/pricing-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <HeroSection />
      <ServicesTimeline />
      <GuaranteeSection />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
