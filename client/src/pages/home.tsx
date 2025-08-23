import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <HeroSection />
    </div>
  );
}
