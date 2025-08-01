import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="glass-effect fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-bold text-gray-900">ValidateNow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Calculator
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              Get Started
            </Button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left"
              >
                Calculator
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white hover:bg-gray-800 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
