import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 pt-[100px] sm:pt-[120px] pb-[80px] sm:pb-[120px]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          {/* ICP Callout - Higher Hierarchy */}
          <div className="inline-block bg-gray-900 text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-full mb-6 sm:mb-8 mx-2 sm:mx-0">
            <h2 className="text-xs sm:text-base md:text-lg font-medium sm:font-semibold tracking-wide leading-tight">
              <span className="block sm:hidden">For SaaS Founders who need traction</span>
              <span className="hidden sm:block">For SaaS, AI & Tech Startup Founders who need traction fast.</span>
            </h2>
          </div>
          
          {/* Main Heading - Mobile Optimized & Editable */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight px-2 sm:px-0 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-gray-50 rounded-lg transition-colors relative overflow-hidden shine-text"
            contentEditable={true}
            suppressContentEditableWarning={true}
            data-testid="editable-main-heading"
          ><span className="block sm:hidden">100 Users in 4 Weeks<br />with a Traction Engine</span>
            <span className="hidden sm:block">100 Users in 4 Weeks with a <br />Traction Marketing Engine</span>
          </h1>
          
          {/* Supporting Subheading - Lower Hierarchy */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Watch how I help SaaS founders drive traction, build a user base, and attract investors all within 4 weeks of implementing a marketing engine built for early stage startups.
          </p>
          
          {/* Embedded YouTube Video */}
          <div className="glass-card p-4 sm:p-8 rounded-3xl mb-12 max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dTl487-Kp7g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                data-testid="youtube-video-embed"
              ></iframe>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => {
              // Track Meta Pixel Lead event
              try {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                  console.log('Lead event sent from Hero - Book Your Traction Engine');
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
            👉 Book Your Traction Engine
          </Button>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-[80px] sm:pb-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Demo Videos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped SaaS startups build traction and attract investors
          </p>
        </div>

        {/* Hero Case Study - Thryft */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover scale-[1.001]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    data-testid="video-thryft-hero"
                    onError={(e) => {
                      console.error('Thryft video error:', e);
                      console.error('Video element:', e.target);
                    }}
                    onLoadStart={() => console.log('Thryft video loading started')}
                    onCanPlay={() => console.log('Thryft video can play')}
                    onLoadedData={() => console.log('Thryft video data loaded')}
                    onLoadedMetadata={() => console.log('Thryft video metadata loaded')}
                  >
                    <source src="/thryft-demo.mp4" type="video/mp4" />
                    <source src="attached_assets/Thryft Product Video Final copy_1756009269409.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Thryft
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  From concept to investor ready in 4 weeks. Thryft used a product demo video to tell their story and win attention.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">4 Weeks</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Investor Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Style 1 */}
          <div className="glass-card rounded-2xl p-4 sm:p-6">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                data-testid="video-style-1"
                onLoadedMetadata={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.addEventListener('timeupdate', () => {
                    if (video.currentTime >= 17) {
                      video.currentTime = 0;
                    }
                  });
                }}
              >
                <source src="/style1-demo.mp4" type="video/mp4" />
                <source src="attached_assets/Used Car Prices (3)_1756009784803.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

          {/* Style 2 */}
          <div className="glass-card rounded-2xl p-4 sm:p-6">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <video
                className="w-full h-full object-cover scale-110 -translate-y-2"
                autoPlay
                loop
                muted
                playsInline
                data-testid="video-style-2"
              >
                <source src="/style2-demo.mp4" type="video/mp4" />
                <source src="attached_assets/Screen Recording 2025-08-24 at 2.16.18 pm_1756010382854.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

          {/* Style 3 */}
          <div className="glass-card rounded-2xl p-4 sm:p-6">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                data-testid="video-style-3"
              >
                <source src="/style3-demo.mp4" type="video/mp4" />
                <source src="attached_assets/Potoroo Motion Design copy_1756010718814.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

          {/* Style 4 */}
          <div className="glass-card rounded-2xl p-4 sm:p-6">
            <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-black">
              <video
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                data-testid="video-style-4"
              >
                <source src="/style4-demo.mp4" type="video/mp4" />
                <source src="attached_assets/Ferocia Brand Ad copy_1756010546978.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}