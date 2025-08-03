import logoPath from "@assets/Artboard 1_1_1754026306695.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoPath} alt="ValidateNow Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">MoveMore</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional SaaS validation services that help startups test market demand with confidence. 
              Get professional results without the agency price tag.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/chester-xu-6919871b9/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => {
                  // Track Facebook Pixel Contact event
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'Contact', {
                      content_name: 'LinkedIn Contact',
                      content_category: 'Social Media Contact',
                      test_event_code: 'TEST51046'
                    });
                  }
                }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Demo Video Creation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landing Page Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Validation Calculator</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 ValidateNow. All rights reserved. Professional SaaS validation services.</p>
        </div>
      </div>
    </footer>
  );
}
