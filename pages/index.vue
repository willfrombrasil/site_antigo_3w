<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
      <!-- Background Elements - Lazy loaded for performance -->
      <div class="absolute inset-0 overflow-hidden" v-if="isBackgroundVisible">
        <div class="absolute -top-4 -right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
        <div class="absolute top-1/2 -left-4 w-72 h-72 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl will-change-transform"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-8 relative">
        <div class="text-center max-w-5xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8 animate-on-scroll" data-delay="100">
            <font-awesome-icon icon="fas fa-rocket" class="mr-2" />
            Transformação Digital Completa
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-on-scroll" data-delay="200">
            Eleve seu negócio ao
            <span class="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent block">
              próximo nível digital
            </span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-primary-100 leading-relaxed mb-10 max-w-4xl mx-auto animate-on-scroll" data-delay="300">
            Somos especialistas em <strong class="text-white">desenvolvimento de software</strong> e 
            <strong class="text-white">marketing digital</strong>, oferecendo soluções completas que geram 
            resultados reais para o seu negócio.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-on-scroll" data-delay="400">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-large will-change-transform"
              prefetch
              aria-label="Agendar consultoria gratuita"
              @click="trackBusinessEvent.consultationRequest('hero_button')"
            >
              <font-awesome-icon icon="fas fa-calendar-alt" class="mr-3 group-hover:animate-pulse" />
              Agendar Consultoria Gratuita
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Quero conhecer as soluções da 3W Online para meu negócio." 
              textButton="Falar no WhatsApp"
              trackingLocation="hero_section"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-on-scroll" data-delay="500">
            <div class="text-center">
              <div class="text-3xl font-bold mb-2" :data-count="stats.foundationYear">{{ stats.foundationYear }}</div>
              <div class="text-primary-200">No mercado</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2" :data-count="stats.projectsCompleted">{{ stats.projectsCompleted }}+</div>
              <div class="text-primary-200">Projetos entregues</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2" :data-count="stats.clientSatisfaction">{{ stats.clientSatisfaction }}%</div>
              <div class="text-primary-200">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20 animate-on-scroll" data-delay="100">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Soluções <span class="text-primary-600">completas</span> para sua empresa
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de serviços digitais para acelerar o crescimento 
            do seu negócio no mundo online.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Service 1 -->
          <div class="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="200">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-code" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Desenvolvimento de Software</h3>
            <p class="text-secondary-600 leading-relaxed mb-6">
              Sistemas personalizados, aplicações web e mobile que otimizam processos e aumentam a produtividade.
            </p>
            <NuxtLink 
              to="/servicos" 
              class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              prefetch
              aria-label="Saiba mais sobre desenvolvimento de software"
              @click="trackBusinessEvent.serviceInterest('Desenvolvimento de Software', 'click')"
            >
              Saiba mais <font-awesome-icon icon="fas fa-arrow-right" class="ml-2" />
            </NuxtLink>
          </div>

          <!-- Service 2 -->
          <div class="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="300">
            <div class="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-globe" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Sites & E-commerce</h3>
            <p class="text-secondary-600 leading-relaxed mb-6">
              Websites modernos, responsivos e otimizados para conversão, incluindo lojas virtuais completas.
            </p>
            <NuxtLink 
              to="/servicos" 
              class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              prefetch
              aria-label="Saiba mais sobre sites e e-commerce"
              @click="trackBusinessEvent.serviceInterest('Sites e E-commerce', 'click')"
            >
              Saiba mais <font-awesome-icon icon="fas fa-arrow-right" class="ml-2" />
            </NuxtLink>
          </div>

          <!-- Service 3 -->
          <div class="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="400">
            <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-bullhorn" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Marketing Digital</h3>
            <p class="text-secondary-600 leading-relaxed mb-6">
              Estratégias completas de marketing digital para gerar mais leads, vendas e reconhecimento da marca.
            </p>
            <NuxtLink 
              to="/servicos" 
              class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              prefetch
              aria-label="Saiba mais sobre marketing digital"
              @click="trackBusinessEvent.serviceInterest('Marketing Digital', 'click')"
            >
              Saiba mais <font-awesome-icon icon="fas fa-arrow-right" class="ml-2" />
            </NuxtLink>
          </div>
        </div>

        <div class="text-center mt-16 animate-on-scroll" data-delay="500">
          <NuxtLink 
            to="/servicos" 
            class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-large will-change-transform"
            prefetch
            aria-label="Ver todos os serviços oferecidos"
          >
            <font-awesome-icon icon="fas fa-eye" class="mr-3" />
            Ver Todos os Serviços
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20 animate-on-scroll" data-delay="100">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            O que nossos <span class="text-primary-600">clientes dizem</span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação digital e crescimento de negócios.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Testimonial 1 -->
          <div class="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 animate-on-scroll" data-delay="200">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <font-awesome-icon icon="fas fa-star" v-for="n in 5" :key="n" />
              </div>
              <span class="ml-2 text-sm text-secondary-600">5.0</span>
            </div>
            <blockquote class="text-secondary-700 leading-relaxed mb-6">
              "A 3W Online transformou completamente nossa presença digital. O sistema que desenvolveram 
              aumentou nossa produtividade em 40% e as vendas online cresceram 300%."
            </blockquote>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">MF</span>
              </div>
              <div class="ml-4">
                <div class="font-semibold text-secondary-800">Maria Fernanda</div>
                <div class="text-sm text-secondary-600">CEO, Empresa de Logística</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 animate-on-scroll" data-delay="300">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <font-awesome-icon icon="fas fa-star" v-for="n in 5" :key="n" />
              </div>
              <span class="ml-2 text-sm text-secondary-600">5.0</span>
            </div>
            <blockquote class="text-secondary-700 leading-relaxed mb-6">
              "Profissionais excepcionais! O e-commerce que criaram superou todas as expectativas. 
              Design moderno, rápido e as vendas triplicaram em 6 meses."
            </blockquote>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">RS</span>
              </div>
              <div class="ml-4">
                <div class="font-semibold text-secondary-800">Roberto Silva</div>
                <div class="text-sm text-secondary-600">Diretor, Loja de Roupas</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 animate-on-scroll" data-delay="400">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <font-awesome-icon icon="fas fa-star" v-for="n in 5" :key="n" />
              </div>
              <span class="ml-2 text-sm text-secondary-600">5.0</span>
            </div>
            <blockquote class="text-secondary-700 leading-relaxed mb-6">
              "A estratégia de marketing digital da 3W Online nos ajudou a alcançar novos mercados. 
              ROI impressionante e suporte técnico excepcional!"
            </blockquote>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">AC</span>
              </div>
              <div class="ml-4">
                <div class="font-semibold text-secondary-800">Ana Costa</div>
                <div class="text-sm text-secondary-600">Marketing, Startup Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-28 bg-gradient-to-br from-secondary-800 to-secondary-900 text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto animate-on-scroll" data-delay="100">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8">
            <font-awesome-icon icon="fas fa-rocket" class="mr-2" />
            Vamos Acelerar Seu Crescimento
          </div>
          
          <h2 class="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para <span class="text-primary-300">transformar</span> seu negócio?
          </h2>
          
          <p class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como nossas soluções podem acelerar 
            o crescimento da sua empresa no ambiente digital.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-large will-change-transform"
              prefetch
              aria-label="Agendar consultoria gratuita"
            >
              <font-awesome-icon icon="fas fa-calendar-alt" class="mr-3 group-hover:animate-pulse" />
              Agendar Consultoria Gratuita
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Quero agendar uma consultoria gratuita para discutir como vocês podem ajudar meu negócio." 
              textButton="Chamar no WhatsApp"
              trackingLocation="cta_section"
            />
          </div>

          <!-- Trust Indicators -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
            <div>
              <font-awesome-icon icon="fas fa-shield-alt" class="text-primary-400 text-2xl mb-2 mx-auto" />
              <div class="text-sm text-gray-300">Garantia de Qualidade</div>
            </div>
            <div>
              <font-awesome-icon icon="fas fa-clock" class="text-primary-400 text-2xl mb-2 mx-auto" />
              <div class="text-sm text-gray-300">Suporte 24/7</div>
            </div>
            <div>
              <font-awesome-icon icon="fas fa-award" class="text-primary-400 text-2xl mb-2 mx-auto" />
              <div class="text-sm text-gray-300">Certificações</div>
            </div>
            <div>
              <font-awesome-icon icon="fas fa-users" class="text-primary-400 text-2xl mb-2 mx-auto" />
              <div class="text-sm text-gray-300">50+ Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BtnWhatsApp from '~/components/site/BtnWhatsApp.vue'
import { usePerformanceOptimization } from '~/composables/usePerformanceOptimization'
import { useGoogleAnalytics } from '~/composables/useGoogleAnalytics'

// Performance optimization composable
const { useIntersectionObserver, preloadCriticalAssets } = usePerformanceOptimization()

// Google Analytics composable
const { trackPage, trackBusinessEvent } = useGoogleAnalytics()

// Performance optimization: Lazy load background elements
const isBackgroundVisible = ref(false)

// Reactive stats for better performance and SEO
const stats = computed(() => ({
  foundationYear: 2020,
  projectsCompleted: 50,
  clientSatisfaction: 100
}))

onMounted(() => {
  // Track page view
  trackPage('Home Page', {
    page_category: 'landing',
    business_type: 'software_house'
  })

  // Delay background elements for initial page load performance
  setTimeout(() => {
    isBackgroundVisible.value = true
  }, 100)

  // Setup Intersection Observer for animations using composable
  const { setupObserver } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  
  setupObserver()

  // Preload critical assets for better performance
  preloadCriticalAssets([
    '/favicon.ico'
  ])
})

definePageMeta({
  layout: 'site'
})

// Enhanced SEO with structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '3W Online',
  description: 'Software house e agência de marketing digital especializada em desenvolvimento de sistemas, sites, e-commerce e estratégias de marketing digital.',
  url: 'https://www.3wonline.com.br',
  logo: 'https://www.3wonline.com.br/logo.png',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-99692-4829',
    contactType: 'customer service',
    availableLanguage: 'Portuguese'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressLocality: 'Curitiba',
    addressRegion: 'PR'
  },
  sameAs: [
    'https://facebook.com/grupo3wonline',
    'https://www.instagram.com/grupo3wonline'
  ],
  offers: {
    '@type': 'Offer',
    name: 'Consultoria Gratuita',
    description: 'Consultoria gratuita para análise de necessidades digitais',
    price: '0',
    priceCurrency: 'BRL'
  }
}

useHead({
  title: 'Home - Desenvolvimento de Software & Marketing Digital',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { 
      name: 'description', 
      content: '3W Online - Software house e agência de marketing digital. Desenvolvimento de sistemas, sites, e-commerce e estratégias de marketing digital completas. Consultoria gratuita disponível.' 
    },
    { 
      name: 'keywords', 
      content: '3w online, desenvolvimento software, marketing digital, sites, e-commerce, sistemas personalizados, curitiba, consultoria gratuita, transformação digital' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#3B82F6' },
    
    // Enhanced Open Graph
    { property: 'og:title', content: '3W Online - Software House & Marketing Digital' },
    { property: 'og:description', content: 'Soluções completas em desenvolvimento de software e marketing digital para empresas que querem crescer. Consultoria gratuita disponível.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.3wonline.com.br' },
    { property: 'og:image', content: 'https://www.3wonline.com.br/images/preview.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:site_name', content: '3W Online' },
    
    // Enhanced Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '3W Online - Transformação Digital Completa' },
    { name: 'twitter:description', content: 'Software house e agência de marketing digital especializada em soluções que geram resultados. Consultoria gratuita.' },
    { name: 'twitter:image', content: 'https://www.3wonline.com.br/images/preview.png' },
    
    // Additional SEO meta tags
    { name: 'geo.region', content: 'BR-PR' },
    { name: 'geo.placename', content: 'Curitiba' },
    { name: 'geo.position', content: '-25.4284;-49.2733' },
    { name: 'ICBM', content: '-25.4284, -49.2733' }
  ],
  link: [
    // Preload critical fonts for better performance
    { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { rel: 'canonical', href: 'https://www.3wonline.com.br' },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://www.3wonline.com.br' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.shadow-large {
  box-shadow: 0 10px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-soft {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
}

/* Performance optimizations */
.will-change-transform {
  will-change: transform;
}

/* Optimized animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* GPU acceleration for smooth animations */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
  backface-visibility: hidden;
}

.transform {
  backface-visibility: hidden;
}

/* Optimize gradients for better performance */
.bg-gradient-to-br,
.bg-gradient-to-r {
  background-attachment: local;
}

/* Reduce repaints */
.rounded-3xl,
.rounded-2xl,
.rounded-xl {
  contain: layout style paint;
}

/* Counter animation for stats */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-count {
  animation: countUp 0.8s ease-out;
}

/* Optimize for mobile performance */
@media (max-width: 768px) {
  .blur-3xl {
    display: none; /* Remove expensive blur effects on mobile */
  }
  
  .will-change-transform {
    will-change: auto; /* Reset will-change on mobile to save memory */
  }
  
  /* Optimize text sizes for mobile */
  .text-4xl {
    font-size: 2.5rem;
  }
  
  .text-6xl {
    font-size: 3.5rem;
  }
  
  .text-7xl {
    font-size: 4rem;
  }
}

/* Reduce motion for accessibility and performance */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .transition-all,
  .group-hover\:animate-pulse,
  .transform,
  .animate-count {
    animation: none !important;
    transition: none !important;
  }
  
  .animate-on-scroll {
    opacity: 1;
    transform: none;
  }
}

/* Optimize hover effects for touch devices */
@media (hover: none) and (pointer: coarse) {
  .group:hover .group-hover\:scale-110 {
    transform: none;
  }
  
  .hover\:scale-105:hover {
    transform: none;
  }
  
  .hover\:-translate-y-2:hover {
    transform: none;
  }
}

/* Critical above-the-fold optimization */
.hero-content {
  contain: layout style paint;
}

/* Optimize star ratings */
.text-yellow-400 {
  color: #fbbf24;
}

/* Lazy loading placeholder */
.lazy-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

