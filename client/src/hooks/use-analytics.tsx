import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView, trackTrafficSource, trackScrollDepth } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      trackPageView(location);
      trackTrafficSource(); // Track UTM parameters on route change
      prevLocationRef.current = location;
    }
  }, [location]);
  
  // Track scroll depth for engagement metrics
  useEffect(() => {
    let scrollDepthTracked = {
      25: false,
      50: false,
      75: false,
      100: false
    };
    
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      Object.keys(scrollDepthTracked).forEach(depth => {
        const depthNum = parseInt(depth);
        if (scrolled >= depthNum && !scrollDepthTracked[depthNum as keyof typeof scrollDepthTracked]) {
          scrollDepthTracked[depthNum as keyof typeof scrollDepthTracked] = true;
          trackScrollDepth(depthNum);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
};

// Hook for tracking video engagement
export const useVideoAnalytics = (videoTitle: string) => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleVideoPlay = () => {
      // Track video engagement - will be triggered when iframe loads
      // Note: YouTube iframe doesn't expose play events directly
      // This tracks video container interaction
    };
    
    video.addEventListener('load', handleVideoPlay);
    return () => video.removeEventListener('load', handleVideoPlay);
  }, [videoTitle]);
  
  return videoRef;
};