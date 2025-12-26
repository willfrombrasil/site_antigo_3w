export const useGoogleAnalytics = () => {
  const { 
    $trackPageView, 
    $trackEvent, 
    $trackConversion, 
    $trackFormSubmission, 
    $trackButtonClick, 
    $trackWhatsAppClick, 
    $trackServiceView 
  } = useNuxtApp()

  // Enhanced page view tracking with additional data
  const trackPage = (pageName?: string, additionalData?: Record<string, any>) => {
    const route = useRoute()
    const title = pageName || route.meta.title || document.title
    
    if (typeof $trackPageView === 'function') {
      $trackPageView(route.fullPath, title)
    }

    // Track additional page data
    if (additionalData && typeof $trackEvent === 'function') {
      $trackEvent('page_view_enhanced', {
        page_name: title,
        page_path: route.fullPath,
        ...additionalData
      })
    }
  }

  // Track business-specific events
  const trackBusinessEvent = {
    // Lead generation events
    consultationRequest: (source: string) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('generate_lead', {
          event_category: 'lead_generation',
          lead_type: 'consultation_request',
          source: source
        })
      }
    },

    // Contact form submissions
    contactForm: (formType: string, success = true) => {
      if (typeof $trackFormSubmission === 'function') {
        $trackFormSubmission(formType, success)
      }
    },

    // Service interest tracking
    serviceInterest: (serviceName: string, actionType: 'view' | 'click' | 'contact') => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('service_interest', {
          event_category: 'services',
          service_name: serviceName,
          action_type: actionType
        })
      }
    },

    // Project quote requests
    quoteRequest: (serviceType: string, projectSize?: string) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('quote_request', {
          event_category: 'conversions',
          service_type: serviceType,
          project_size: projectSize || 'not_specified'
        })
      }
    },

    // WhatsApp interactions
    whatsappInteraction: (location: string, messageType = 'default') => {
      if (typeof $trackWhatsAppClick === 'function') {
        $trackWhatsAppClick(location, messageType)
      }
    },

    // Payment interactions
    paymentMethod: (method: string, amount?: number) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('payment_method_selected', {
          event_category: 'ecommerce',
          payment_method: method,
          value: amount
        })
      }
    },

    // Download tracking
    downloadResource: (resourceName: string, resourceType: string) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('file_download', {
          event_category: 'resources',
          file_name: resourceName,
          file_type: resourceType
        })
      }
    },

    // Navigation tracking
    navigationClick: (linkName: string, destination: string) => {
      if (typeof $trackButtonClick === 'function') {
        $trackButtonClick(linkName, destination)
      }
    },

    // Social media interactions
    socialClick: (platform: string, action: string) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('social_interaction', {
          event_category: 'social',
          social_platform: platform,
          social_action: action
        })
      }
    },

    // Error tracking
    errorOccurred: (errorType: string, errorMessage: string, page: string) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('exception', {
          description: `${errorType}: ${errorMessage}`,
          fatal: false,
          page_location: page
        })
      }
    },

    // Performance tracking
    pageLoadTime: (loadTime: number, page: string) => {
      if (typeof $trackEvent === 'function') {
        $trackEvent('timing_complete', {
          name: 'page_load',
          value: Math.round(loadTime),
          event_category: 'performance',
          page_location: page
        })
      }
    }
  }

  // Conversion tracking for specific goals
  const trackConversions = {
    // Main conversion goals
    leadGenerated: (value = 50) => {
      if (typeof $trackConversion === 'function') {
        $trackConversion('AW-CONVERSION_ID/lead_conversion', value)
      }
    },

    projectStarted: (value: number) => {
      if (typeof $trackConversion === 'function') {
        $trackConversion('AW-CONVERSION_ID/project_conversion', value)
      }
    },

    consultationBooked: (value = 100) => {
      if (typeof $trackConversion === 'function') {
        $trackConversion('AW-CONVERSION_ID/consultation_conversion', value)
      }
    }
  }

  return {
    trackPage,
    trackBusinessEvent,
    trackConversions,
    // Direct access to base functions
    trackEvent: typeof $trackEvent === 'function' ? $trackEvent : () => {},
    trackFormSubmission: typeof $trackFormSubmission === 'function' ? $trackFormSubmission : () => {},
    trackButtonClick: typeof $trackButtonClick === 'function' ? $trackButtonClick : () => {},
    trackWhatsAppClick: typeof $trackWhatsAppClick === 'function' ? $trackWhatsAppClick : () => {},
    trackServiceView: typeof $trackServiceView === 'function' ? $trackServiceView : () => {}
  }
}
