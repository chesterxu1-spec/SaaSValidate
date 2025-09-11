import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <HeroSection />
      
      {/* Calendar Section */}
      <section id="calendar" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Marketing Engine</h2>
            <p className="text-lg text-gray-600">Schedule a call to get started with your traction marketing engine</p>
          </div>
          <div className="glass-card p-2 rounded-3xl">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/VjrfycqGgbRgP2RnHUq5" 
              style={{width: '100%', border: 'none', height: '800px'}} 
              scrolling="yes" 
              id="zmWnyibfqzh0mQCk3Hns_1757565602373"
              data-testid="calendar-booking-widget"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
