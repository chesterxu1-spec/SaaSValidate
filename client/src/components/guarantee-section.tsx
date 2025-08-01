import { Shield } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-3xl">
          <Shield className="h-16 w-16 text-gray-900 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Waitlist Signup Guarantee</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're so confident in our validation process that we guarantee results. 
            For every signup under 100, we'll refund $5 back to you.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl inline-block">
            <div className="text-3xl font-bold text-gray-900 mb-2">100% Risk-Free</div>
            <div className="text-gray-600">Your success is our guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
