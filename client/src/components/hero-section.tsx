import { Button } from "@/components/ui/button";
import { trackBookCall, trackVideoPlay } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 pt-[100px] sm:pt-[120px] pb-[80px] sm:pb-[120px]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          {/* ICP Callout - Higher Hierarchy */}
          <div className="inline-block bg-gray-900 text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-full mb-6 sm:mb-8 mx-2 sm:mx-0">
            <h2 className="text-xs sm:text-base md:text-lg font-medium sm:font-semibold tracking-wide leading-tight">
              <span className="block sm:hidden">For SaaS Founders who need traction</span>
              <span className="hidden sm:block">For App Founders Who Need Traction Fast.</span>
            </h2>
          </div>
          
          {/* Main Heading - Mobile Optimized & Editable */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight lg:leading-[1.1] px-2 sm:px-0 pb-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50 rounded-lg transition-colors relative overflow-hidden shine-text"
            contentEditable={true}
            suppressContentEditableWarning={true}
            data-testid="editable-main-heading"
          ><span className="block sm:hidden">$40k+ MRR in 6 Months<br />with a Traction Engine</span>
            <span className="hidden sm:block">$40k+ MRR in 6 Months with a <br />Traction Marketing Engine</span>
          </h1>
          
          {/* Supporting Subheading - Lower Hierarchy */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">Watch the system that helps app founders build a user base, compound growth and grow 40k+ MRR in 6 months of implementing a marketing engine build for early stage B2C apps.</p>
          
          {/* Embedded Wistia Video */}
          <div className="glass-card p-4 sm:p-8 rounded-3xl mb-12 max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                src="https://fast.wistia.net/embed/iframe/6gotnplpax?autoPlay=false&videoFoam=true" 
                title="Wistia video player"
                allowFullScreen
                frameBorder="0"
                scrolling="no"
                className="w-full h-full"
                data-testid="wistia-video-embed"
                onLoad={() => trackVideoPlay('Hero Video - Marketing Engine Demo')}
              ></iframe>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => {
              // Track Google Analytics conversion
              trackBookCall();
              
              // Track Meta Pixel Lead event
              try {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                  console.log('Lead event sent from Hero - Book Your Marketing Engine');
                } else {
                  console.warn('Meta Pixel not available');
                }
              } catch (error) {
                console.error('Error tracking Lead event:', error);
              }
              // Scroll to calendar section
              const calendarElement = document.getElementById('calendar');
              if (calendarElement) {
                calendarElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg"
            className="bg-gray-900 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-lg sm:text-xl"
            data-testid="button-book-traction-sprint"
          >
            👉 Book Your Marketing Engine
          </Button>
        </div>
      </div>
      {/* Case Studies Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-[80px] sm:pb-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonial</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped SaaS startups build traction and attract investors
          </p>
        </div>

        {/* Hero Case Study - Thryft */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <iframe 
                    src="https://fast.wistia.net/embed/iframe/uq8p58w7cf?autoPlay=false&videoFoam=true" 
                    title="Thryft testimonial video"
                    allowFullScreen
                    frameBorder="0"
                    scrolling="no"
                    className="w-full h-full"
                    data-testid="video-thryft-hero"
                  ></iframe>
                  <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    (play 2x speed)
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Thryft
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">From 0 to 800 waitlist signups at 1.40 AUD CPL. Thryft was investor ready in 4 weeks. </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">4 Weeks</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Investor Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center pt-16 pb-8">
          <Button 
            onClick={() => {
              // Track Meta Pixel Lead event
              try {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                  console.log('Lead event sent from Bottom CTA - Book Your Marketing Engine');
                } else {
                  console.warn('Meta Pixel not available');
                }
              } catch (error) {
                console.error('Error tracking Lead event:', error);
              }
              // Scroll to calendar section
              const calendarElement = document.getElementById('calendar');
              if (calendarElement) {
                calendarElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg"
            className="bg-gray-900 text-white px-12 sm:px-16 py-6 sm:py-8 rounded-2xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 text-xl sm:text-2xl shine-button"
            data-testid="button-bottom-traction-engine"
          >
            👉 Book Your Marketing Engine
          </Button>
        </div>
      </div>
    </section>
  );
}