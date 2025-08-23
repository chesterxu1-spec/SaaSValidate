import { Button } from "@/components/ui/button";
import logoPath from "@assets/Artboard 1_1_1754026133762.png";

export default function Navigation() {

  return (
    <nav className="glass-effect fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logoPath} alt="ValidateNow Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">MoveMore</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <Button 
              onClick={() => {
                // Track Meta Pixel Lead event
                try {
                  setTimeout(() => {
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('track', 'Lead');
                      console.log('Lead event sent from Navigation');
                    }
                  }, 100);
                } catch (error) {
                  console.error('Error tracking Lead event:', error);
                }
                window.open('https://calendly.com/chester-xu1', '_blank');
              }}
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
