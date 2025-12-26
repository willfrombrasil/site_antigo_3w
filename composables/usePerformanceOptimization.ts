import { ref } from 'vue'

export const usePerformanceOptimization = () => {
  const isVisible = ref(false)
  
  // Intersection Observer for lazy loading and animations
  const useIntersectionObserver = (options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }

    let observer: IntersectionObserver | null = null

    const handleIntersection = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement
        const delay = parseInt(target.dataset.delay || '0')
        
        setTimeout(() => {
          target.classList.add('animate-in')
          target.style.willChange = 'auto' // Reset will-change after animation
        }, delay)
        
        observer?.unobserve(target)
      }
    }

    const setupObserver = () => {
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        return
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach(handleIntersection)
      }, defaultOptions)

      // Observe all elements with animate-on-scroll class
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer?.observe(el))
    }

    const cleanup = () => {
      if (observer) {
        observer.disconnect()
        observer = null
      }
    }

    return { setupObserver, cleanup }
  }

  // Preload critical resources
  const preloadCriticalAssets = (assets: string[]) => {
    if (typeof window === 'undefined') return

    const imageRegex = /\.(jpg|jpeg|png|webp|avif)$/

    assets.forEach((asset) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      
      if (asset.endsWith('.css')) {
        link.as = 'style'
      } else if (asset.endsWith('.js')) {
        link.as = 'script'
      } else if (imageRegex.test(asset)) {
        link.as = 'image'
      }
      
      link.href = asset
      document.head.appendChild(link)
    })
  }

  // Debounce function for performance
  const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null
    
    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  // Throttle function for scroll events
  const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle = false
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  const handleImageIntersection = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.classList.remove('lazy')
        observer.unobserve(img)
      }
    }
  }

  // Optimize images with lazy loading
  const setupLazyImages = () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => handleImageIntersection(entry, imageObserver))
    })

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img)
    })
  }

  // Setup performance monitoring
  const setupPerformanceMonitoring = () => {
    if (typeof window === 'undefined' || !window.performance) return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Log performance metrics for debugging
        if (process.env.NODE_ENV === 'development') {
          console.log(`${entry.name}: ${entry.startTime}ms`)
        }
      })
    })

    observer.observe({ entryTypes: ['measure', 'navigation'] })
  }

  return {
    isVisible,
    useIntersectionObserver,
    preloadCriticalAssets,
    debounce,
    throttle,
    setupLazyImages,
    setupPerformanceMonitoring
  }
}
