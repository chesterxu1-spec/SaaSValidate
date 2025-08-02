import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-[120px] pb-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Validate Your
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">SaaS Startup Product</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional demo video, AI-generated landing page, and targeted ad campaigns. 
            Get $9,000+ value for just $3,000 with our comprehensive validation package.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => {
                // Track Facebook Pixel event
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Schedule', {
                    content_name: 'Start Validation - Hero',
                    content_category: 'Validation Booking',
                    value: 3000,
                    currency: 'USD'
                  });
                }
                window.open('https://calendly.com/chester-xu1', '_blank');
              }}
              size="lg"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-lg"
            >
              Start Validation - $3,000
            </Button>
            <Button 
              onClick={() => window.open('https://drive.google.com/file/d/1MY_8p9dOlzAJLPrPgQz6mhu0Ibo5cfiJ/view?usp=sharing', '_blank')}
              variant="outline"
              size="lg"
              className="glass-card px-8 py-4 rounded-xl font-semibold text-gray-900 hover:bg-white/90 transition-all"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">$9,000+</div>
            <div className="text-gray-600 font-medium">Total Value Delivered</div>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">4 Weeks</div>
            <div className="text-gray-600 font-medium">Complete Validation</div>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Signup Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
