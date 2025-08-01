import { Video, Smartphone, Edit, TrendingUp, Mic, Globe, DollarSign, BarChart3 } from "lucide-react";

export default function ServicesTimeline() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Two-Week Validation Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive startup validation with professional deliverables and guaranteed results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Week 1 */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Week 1</h3>
                <p className="text-gray-600 font-medium">Professional Demo Video Creation</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Video className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Professional SaaS Demo Video</div>
                  <div className="text-gray-600 text-sm">60-90 seconds with motion graphics</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Smartphone className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Multiple Format Exports</div>
                  <div className="text-gray-600 text-sm">Social media, web, email versions</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Edit className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Script Optimization</div>
                  <div className="text-gray-600 text-sm">Clear value proposition messaging</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Ad Creation & A/B Testing</div>
                  <div className="text-gray-600 text-sm">Multiple ad variations for optimization</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mic className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">AI Voiceover</div>
                  <div className="text-gray-600 text-sm">Professional narration included</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-2xl font-bold text-gray-900">Value: $5,000</div>
              <div className="text-gray-600">Agency rate equivalent</div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Week 2</h3>
                <p className="text-gray-600 font-medium">Simple Validation Test</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">AI-Generated Landing Page</div>
                  <div className="text-gray-600 text-sm">Claude + v0.dev powered, mobile-optimized</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-gray-900 mt-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">Facebook Ads Campaign</div>
                  <div className="text-gray-600 text-sm">Video views, visits, conversions tracking</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <DollarSign className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">$500 Ad Spend Included</div>
                  <div className="text-gray-600 text-sm">Professional campaign management</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-gray-900 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">A/B Testing & Analytics</div>
                  <div className="text-gray-600 text-sm">Comprehensive performance reporting</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-2xl font-bold text-gray-900">Value: $4,000+</div>
              <div className="text-gray-600">Landing page + ad management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
