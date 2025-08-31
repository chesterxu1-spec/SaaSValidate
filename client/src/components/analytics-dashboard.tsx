import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnalyticsDashboard() {
  const openGoogleAnalytics = () => {
    window.open('https://analytics.google.com/analytics/web/?authuser=0#/p431234567/reports/intelligenthome', '_blank');
  };

  const openMetaAdsManager = () => {
    window.open('https://www.facebook.com/adsmanager', '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Analytics & Performance Tracking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track your marketing performance with comprehensive analytics. Monitor conversion rates, traffic sources, and user behavior to optimize your campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Track in GA4</div>
              <p className="text-xs text-gray-500 mt-1">Book Call + Contact Form</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Track in GA4</div>
              <p className="text-xs text-gray-500 mt-1">Engagement Rate</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg. Time on Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Track in GA4</div>
              <p className="text-xs text-gray-500 mt-1">User Engagement</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Track in GA4</div>
              <p className="text-xs text-gray-500 mt-1">UTM Campaigns</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">GA</span>
                </div>
                Google Analytics 4
              </CardTitle>
              <CardDescription>
                Comprehensive website analytics and user behavior tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">What's Being Tracked:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Page views and user sessions</li>
                  <li>• Conversion events (Book Call, Contact Form)</li>
                  <li>• Video engagement tracking</li>
                  <li>• Scroll depth and time on page</li>
                  <li>• Traffic source attribution (UTM parameters)</li>
                  <li>• User demographics and device info</li>
                </ul>
              </div>
              <Button onClick={openGoogleAnalytics} variant="outline" className="w-full">
                View Google Analytics Dashboard
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                Meta Pixel Analytics
              </CardTitle>
              <CardDescription>
                Facebook/Instagram ad optimization and audience insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">What's Being Tracked:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lead generation events</li>
                  <li>• Contact and LinkedIn interactions</li>
                  <li>• Custom audience building</li>
                  <li>• Ad performance optimization</li>
                  <li>• Retargeting pixel data</li>
                  <li>• Conversion attribution</li>
                </ul>
              </div>
              <Button onClick={openMetaAdsManager} variant="outline" className="w-full">
                View Meta Ads Manager
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Analytics Implementation Complete
            </h3>
            <p className="text-gray-600 mb-6">
              Your website now tracks all key metrics for conversion optimization. Both Google Analytics 4 and Meta Pixel are properly configured to give you insights into user behavior, traffic sources, and campaign performance.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Metrics Available:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Conversion Rate (Book Call + Contact Form)</li>
                  <li>✓ Bounce Rate & Session Duration</li>
                  <li>✓ Traffic Source Attribution</li>
                  <li>✓ User Engagement & Scroll Depth</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Marketing Optimization:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ UTM Campaign Tracking</li>
                  <li>✓ A/B Testing Support</li>
                  <li>✓ Audience Segmentation</li>
                  <li>✓ Retargeting Pixel Data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}