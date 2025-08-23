import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-[120px] pb-[120px]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          {/* ICP Callout - Higher Hierarchy */}
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold tracking-wide">
            For SaaS, AI & Tech Startup Founders who need traction fast.
          </h2>
          
          {/* Main Heading - Mobile Optimized */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight px-4 sm:px-0">100 Users in 4 Weeks with a 
          "Traction Marketing Engine"</h1>
          
          {/* Supporting Subheading - Lower Hierarchy */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Watch how I help SaaS founders validate their product, attract investors, and build momentum — without burning cash on random marketing tactics.
          </p>
          
          {/* Video Placeholder */}
          <div className="glass-card p-4 sm:p-8 rounded-3xl mb-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-base sm:text-lg">Video will be inserted here</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => {
              // Track Meta Pixel Lead event
              try {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                  console.log('Lead event sent from Hero - Traction Sprint');
                } else {
                  console.warn('Meta Pixel not available');
                }
              } catch (error) {
                console.error('Error tracking Lead event:', error);
              }
              window.open('https://calendly.com/chester-xu1', '_blank');
            }}
            size="lg"
            className="bg-gray-900 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-lg sm:text-xl"
            data-testid="button-book-traction-sprint"
          >
            👉 Book Your Traction Sprint
          </Button>
        </div>
      </div>
    </section>
  );
}