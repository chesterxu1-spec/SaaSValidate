import { useEffect, useRef } from "react";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { trackBookCall, trackVideoPlay } from "@/lib/analytics";
import wellspokenImg from "@assets/Screen_Shot_2026-04-30_at_1.15.58_pm_1777518963702.png";
import logo10xDental from "@assets/10xDental_Logo_copy_1777519466762.png";
import logoSB from "@assets/Artboard_1_copy_2_1777519466762.png";
import logoSteps from "@assets/Artboard_1_1_copy_1777519466763.png";
import logoVend from "@assets/Artboard_1_1777519466763.png";
import logoBird from "@assets/Artboard_7_copy_1777519466763.png";
import logoCheck from "@assets/Artboard_25_copy_1777519466763.png";
import logoV from "@assets/Screen_Shot_2026-01-02_at_11.26.59_am_1777519466764.png";
import logoMusic from "@assets/Screen_Shot_2026-02-03_at_10.42.50_pm_1777519466764.png";
import logoWellspoken from "@assets/Wellspoken_Logo_copy_1777519466764.png";
import logoZerberus from "@assets/Zerberus_Logo_copy_1777519466764.png";

const logos = [
  logo10xDental, logoSB, logoSteps, logoVend, logoBird,
  logoCheck, logoV, logoMusic, logoWellspoken, logoZerberus,
];

const ugcVideos = [
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/Tuneloom-%5BB3-C7-V1%5D-t_NEW-fo_VID-au_NewMoms25-34-an_Sleep-ad_ORGANICUGC-aw_PROBLEM%20AWARE-fe_N-A-d_15-04-2026%20copy%20%281%29%20%281%29.mp4',
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/Revise-%5BB9-C21-V2%5D-t_EAR-fo_VID-au_Writers-an_ChatToDoc-ad_ORGANICUGC-aw_SOLUTION%20AWARE-fo_AIDA-d_26-05-2026%20copy.mp4',
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/19-02-26%20Revise%20Adset%2018%20v1%20copy%20%281%29%20%281%29.mp4',
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/Synopsis-%5BB2-C7-V1%5D-t_NEW-fo_VID-au_WeightLoss-an_WeightLossJourney-ad_GREENSCREEN-aw_SOLUTION%20AWARE-fo_Trend-d_22-06-2026%20copy.mp4',
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/Virlo%20Vid%204v1%20Sub%20copy.mp4',
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/13-02-26%20Virlo%20Adset%2016%20copy.mp4',
  'https://cdn.jsdelivr.net/gh/chesterxu1-spec/Movemore-Ad-Clips@main/03-02-26%20Wellspoken%20Adset%2028%20copy%20(1).mp4',
];

const scrollToCalendar = () => {
  const el = document.getElementById('calendar');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const trackLead = () => {
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  } catch {}
};

export default function UGCLanding() {
  const videoStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videos = videoStripRef.current?.querySelectorAll('video');
    if (!videos || videos.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) { video.play().catch(() => {}); }
          else { video.pause(); }
        });
      },
      { threshold: 0.3 }
    );
    videos.forEach(v => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      {/* Hero Section */}
      <section className="px-3 sm:px-6 lg:px-8 pt-[100px] sm:pt-[120px] pb-[80px] sm:pb-[120px]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">

            {/* ICP Callout */}
            <div className="inline-block bg-gray-900 text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-full mb-6 sm:mb-8 mx-2 sm:mx-0">
              <h2 className="text-xs sm:text-base md:text-lg font-medium sm:font-semibold tracking-wide leading-tight">
                <span className="block sm:hidden">For App Founders who need traction</span>
                <span className="hidden sm:block">For App Founders Who Need Traction Fast.</span>
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight lg:leading-[1.1] px-2 sm:px-0 pb-2 relative overflow-hidden shine-text">
              <span className="block sm:hidden">$40k+ MRR in 6 Months<br />with a UGC Content Machine</span>
              <span className="hidden sm:block">$40k+ MRR in 6 Months with a<br />UGC Content Machine</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">Watch the system we use to help app founders generate 100+ Million views, build a user base and grow to $40k+ MRR in 6 months of implementing the UGC Content Machine built for early stage apps.</p>

            {/* CTA Button */}
            <Button
              onClick={() => { trackBookCall(); trackLead(); scrollToCalendar(); }}
              size="lg"
              className="bg-gray-900 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-lg sm:text-xl"
            >
              👉 Book Your UGC Content Machine
            </Button>
          </div>

        </div>

        {/* Scrolling Video Strip */}
        <div className="w-full overflow-hidden py-10 sm:py-14" ref={videoStripRef}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, #f3f4f6, transparent)'}}></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, #f3f4f6, transparent)'}}></div>
            <div className="flex gap-5 px-6" style={{animation: 'ugcVideoScroll 70s linear infinite', width: 'max-content'}}>
              {[...ugcVideos, ...ugcVideos].map((src, i) => (
                <div key={i} className="flex-shrink-0 relative rounded-2xl overflow-hidden shadow-xl" style={{width: '200px', height: '356px'}}>
                  <video
                    className="w-full h-full object-cover"
                    src={src}
                    muted
                    loop
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="max-w-5xl mx-auto px-3 sm:px-0 pb-12 overflow-hidden relative">
          <p className="text-center text-sm text-gray-400 mb-6 tracking-widest uppercase font-medium">Trusted by founders from</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, #f3f4f6, transparent)'}}></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, #f3f4f6, transparent)'}}></div>
            <div className="flex gap-4" style={{ animation: 'logoScroll 22s linear infinite', width: 'max-content' }}>
              {[...logos, ...logos].map((src, i) => (
                <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                  <img src={src} alt="client logo" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VSL Video */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="glass-card p-4 sm:p-8 rounded-3xl">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.loom.com/embed/80cbdd217eb4479ab18d2aab6c18f283"
                title="UGC Content Machine video"
                allowFullScreen
                frameBorder="0"
                className="w-full h-full"
                onLoad={() => trackVideoPlay('UGC Landing - Content Machine Demo')}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-[80px] sm:pb-[120px]">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped app founders build traction and grow MRR
            </p>
          </div>

          {/* Wellspoken */}
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="aspect-video rounded-xl overflow-hidden relative">
                    <img src={wellspokenImg} alt="Wellspoken testimonial" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Wellspoken</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">From $0 MRR to $40k MRR in 6 months. Wellspoken made over $55k in profit.</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">6 months</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Blitz Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revise */}
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="aspect-video rounded-xl overflow-hidden relative">
                    <img src="/elman-testimonial.png" alt="Revise testimonial" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Revise</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">From 0 anything to 250k Views and 177 Subscribers in 6 Months.</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">6 Months</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">250k Views</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">177 Subscribers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thryft */}
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
                    ></iframe>
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      (play 2x speed)
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Thryft</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">From 0 to 800 waitlist signups at 1.40 AUD CPL. Thryft was investor ready in 4 weeks.</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">4 Weeks</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Investor Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-16 pb-8">
            <Button
              onClick={() => { trackLead(); scrollToCalendar(); }}
              size="lg"
              className="bg-gray-900 text-white px-12 sm:px-16 py-6 sm:py-8 rounded-2xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 text-xl sm:text-2xl shine-button"
            >
              👉 Book Your UGC Content Machine
            </Button>
          </div>
        </div>
      </section>
      {/* Calendar Section */}
      <section id="calendar" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your UGC Content Machine</h2>
            <p className="text-lg text-gray-600">Schedule a call to get started</p>
          </div>
          <div className="glass-card p-2 rounded-3xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/9TAigOGvWvzQOVjXWSKe"
              style={{width: '100%', border: 'none', overflow: 'hidden', height: '800px'}}
              scrolling="yes"
              id="9TAigOGvWvzQOVjXWSKe_1778669683974"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
