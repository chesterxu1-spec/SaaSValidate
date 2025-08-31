// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = 'G-74B71ECY7C';

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });
  `;
  document.head.appendChild(script2);
  
  console.log('Google Analytics initialized with ID:', measurementId);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', 'G-74B71ECY7C', {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href
  });
  
  console.log('Page view tracked:', url);
};

// Track conversion events
export const trackConversion = (action: string, category: string = 'engagement') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: action,
    send_to: 'G-74B71ECY7C'
  });
  
  console.log('Conversion tracked:', action);
};

// Track specific business events
export const trackBookCall = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Track as conversion event
  window.gtag('event', 'generate_lead', {
    event_category: 'conversion',
    event_label: 'book_call_calendly',
    value: 1,
    send_to: 'G-74B71ECY7C'
  });
  
  // Also track as Lead for Meta Pixel compatibility
  window.gtag('event', 'Lead', {
    event_category: 'conversion',
    event_label: 'calendly_booking'
  });
  
  console.log('Book call conversion tracked');
};

export const trackContactForm = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'form_submit', {
    event_category: 'conversion',
    event_label: 'contact_form',
    value: 1,
    send_to: 'G-74B71ECY7C'
  });
  
  console.log('Contact form submission tracked');
};

export const trackVideoPlay = (videoTitle: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'video_play', {
    event_category: 'engagement',
    event_label: videoTitle,
    send_to: 'G-74B71ECY7C'
  });
  
  console.log('Video play tracked:', videoTitle);
};

// Track scroll depth for engagement
export const trackScrollDepth = (percentage: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage,
    send_to: 'G-74B71ECY7C'
  });
};

// Track traffic source attribution
export const trackTrafficSource = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get('utm_source');
  const utm_medium = urlParams.get('utm_medium');
  const utm_campaign = urlParams.get('utm_campaign');
  
  if (utm_source || utm_medium || utm_campaign) {
    window.gtag('event', 'campaign_attribution', {
      event_category: 'traffic_source',
      utm_source: utm_source || 'unknown',
      utm_medium: utm_medium || 'unknown',
      utm_campaign: utm_campaign || 'unknown',
      send_to: 'G-74B71ECY7C'
    });
    
    console.log('Traffic source tracked:', { utm_source, utm_medium, utm_campaign });
  }
};