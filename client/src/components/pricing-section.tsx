import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Get $9,000+ in professional services for a fraction of the cost
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-4">$3,000</div>
            <div className="text-xl text-gray-600 mb-6">Complete Validation Package</div>
            <Button 
              onClick={() => window.open('https://calendly.com/chester-xu1', '_blank')}
              size="lg"
              className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-lg"
            >
              Start Your Validation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">$5,000</div>
              <div className="text-gray-600 text-sm">Demo Video Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">$2,000</div>
              <div className="text-gray-600 text-sm">Landing Page Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">$2,000+</div>
              <div className="text-gray-600 text-sm">Ad Management Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
