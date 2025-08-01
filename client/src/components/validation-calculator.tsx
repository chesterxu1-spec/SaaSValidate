import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function ValidationCalculator() {
  const [marketType, setMarketType] = useState("50");
  const [trafficSource, setTrafficSource] = useState("1.5");
  const [validationTarget, setValidationTarget] = useState(75);

  useEffect(() => {
    const mvss = parseInt(marketType);
    const weight = parseFloat(trafficSource);
    const target = Math.round(mvss * weight);
    setValidationTarget(target);
  }, [marketType, trafficSource]);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Validation Goal</h2>
          <p className="text-xl text-gray-600">
            Use our proven formula to determine your minimum viable sample size
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Market Type</label>
              <Select value={marketType} onValueChange={setMarketType}>
                <SelectTrigger className="w-full p-4 rounded-xl border border-gray-200 bg-white">
                  <SelectValue placeholder="Select market type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">Niche Market (MVSS: 50)</SelectItem>
                  <SelectItem value="100">Mid Market (MVSS: 100)</SelectItem>
                  <SelectItem value="150">Mass Market (MVSS: 150)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Traffic Source</label>
              <Select value={trafficSource} onValueChange={setTrafficSource}>
                <SelectTrigger className="w-full p-4 rounded-xl border border-gray-200 bg-white">
                  <SelectValue placeholder="Select traffic source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">Warm Network (Weight: 0.5)</SelectItem>
                  <SelectItem value="1.0">Mixed Sources (Weight: 1.0)</SelectItem>
                  <SelectItem value="1.5">Cold Ads (Weight: 1.5)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">Your Validation Target</div>
              <div className="text-4xl font-bold text-gray-900 mb-4">{validationTarget}</div>
              <div className="text-gray-600">signups needed for strong validation signal</div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-gray-900 to-gray-700 text-white border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-3">Formula Explanation</h4>
              <p className="mb-2"><strong>Validation Target = MVSS × Traffic Source Weight</strong></p>
              <p className="text-gray-300 text-sm">
                This proven formula helps determine the minimum number of signups needed to validate market demand effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
