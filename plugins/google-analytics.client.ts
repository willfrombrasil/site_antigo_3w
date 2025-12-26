export default defineNuxtPlugin(() => {
  // Google Analytics tracking functions
  const gtag = (...args: any[]) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(args)
    }
  }

  // Track page views
  const trackPageView = (url: string, title?: string) => {
    gtag('config', 'G-0GGC4J7WB5', {
      page_path: url,
      page_title: title || document.title
    })
  }

  // Track custom events
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters
    })
  }

  // Track conversions
  const trackConversion = (conversionId: string, value?: number, currency = 'BRL') => {
    gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency
    })
  }

  // Track form submissions
  const trackFormSubmission = (formName: string, success = true) => {
    gtag('event', 'form_submit', {
      event_category: 'forms',
      form_name: formName,
      success: success
    })
  }

  // Track button clicks
  const trackButtonClick = (buttonName: string, location: string) => {
    gtag('event', 'click', {
      event_category: 'buttons',
      button_name: buttonName,
      click_location: location
    })
  }

  // Track WhatsApp clicks
  const trackWhatsAppClick = (location: string, message?: string) => {
    gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      click_location: location,
      message_type: message ? 'custom' : 'default'
    })
  }

  // Track service page views
  const trackServiceView = (serviceName: string) => {
    gtag('event', 'view_item', {
      event_category: 'services',
      item_id: serviceName.toLowerCase().replace(/ /g, '_'),
      item_name: serviceName
    })
  }

  // Enable enhanced ecommerce for better tracking
  gtag('config', 'G-0GGC4J7WB5', {
    custom_map: {
      custom_parameter: 'dimension1'
    },
    send_page_view: false // We'll handle page views manually
  })

  // Provide global access to tracking functions
  return {
    provide: {
      gtag,
      trackPageView,
      trackEvent,
      trackConversion,
      trackFormSubmission,
      trackButtonClick,
      trackWhatsAppClick,
      trackServiceView
    }
  }
})

// Type declarations for better TypeScript support
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
