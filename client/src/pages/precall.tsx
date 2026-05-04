import wellspokenImg from "@assets/Screen_Shot_2026-04-30_at_1.15.58_pm_1777518963702.png";

export default function Precall() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="px-6 py-8 text-center border-b border-gray-100 bg-white/60 backdrop-blur-sm">
        <div className="inline-block bg-gray-900 text-white px-5 py-2 rounded-full mb-6 text-sm font-medium tracking-wide">
          You're booked in ✓
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Thanks For Booking A Call
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Please watch the video below so you come prepared to the call.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Video Placeholder */}
        <div className="glass-card p-4 sm:p-8 rounded-3xl">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe
              src="https://fast.wistia.net/embed/iframe/q2q6v5rhck?autoPlay=false&videoFoam=true"
              title="Pre-call video"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Case Studies heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What's Possible</h2>
          <p className="text-gray-600 text-lg">Real results from founders we've worked with</p>
        </div>

        {/* Wellspoken Case Study */}
        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src={wellspokenImg} alt="Wellspoken testimonial" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Wellspoken</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From $0 MRR to $40k MRR in 6 months. Wellspoken made over $55k in profit.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">6 months</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Blitz Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thryft Case Study */}
        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 w-full">
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
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From 0 to 800 waitlist signups at 1.40 AUD CPL. Thryft was investor ready in 4 weeks.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">4 Weeks</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Investor Ready</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
