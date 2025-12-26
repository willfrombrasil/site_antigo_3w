<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-50 to-white">
      <!-- Background Elements - Lazy loaded for performance -->
      <div class="absolute inset-0 overflow-hidden" v-if="isBackgroundVisible">
        <div class="absolute -top-4 -right-4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl will-change-transform"></div>
        <div class="absolute top-1/2 -left-4 w-72 h-72 bg-success-500/5 rounded-full blur-3xl will-change-transform"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="space-y-8">
            <div class="space-y-6">
              <div class="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
                <font-awesome-icon icon="fas fa-users" class="mr-2" />
                Nossa História
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-700 bg-clip-text text-transparent">
                  Mais que uma
                </span>
                <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent block">
                  software house
                </span>
              </h1>
              
              <p class="text-xl lg:text-2xl text-secondary-600 leading-relaxed">
                Somos uma força criativa especializada em <strong class="text-primary-600">desenvolvimento de software</strong> e <strong class="text-primary-600">marketing digital</strong>, com o compromisso de levar os negócios dos nossos clientes a um novo patamar.
              </p>
            </div>

            <blockquote class="relative bg-primary-50 p-6 rounded-2xl border-l-4 border-primary-500">
              <font-awesome-icon icon="fas fa-quote-left" class="text-primary-400 text-2xl mb-4" />
              <p class="text-lg text-secondary-700 italic leading-relaxed">
                "Acreditamos que a verdadeira inovação vem da coragem de desafiar o status quo e abraçar o desconhecido."
              </p>
            </blockquote>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/servicos" 
                class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-large will-change-transform"
                prefetch
              >
                <font-awesome-icon icon="fas fa-cogs" class="mr-3 group-hover:animate-pulse" />
                Nossos Serviços
              </NuxtLink>
              
              <NuxtLink 
                to="/contato" 
                class="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 font-semibold rounded-2xl hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-300 will-change-transform"
                prefetch
              >
                <font-awesome-icon icon="fas fa-handshake" class="mr-3" />
                Vamos Conversar
              </NuxtLink>
            </div>
          </div>

          <!-- Image/Stats -->
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-100 to-primary-50 rounded-4xl p-8 lg:p-12">
              <div class="grid grid-cols-2 gap-6">
                <!-- Stat 1 -->
                <div class="text-center animate-on-scroll" data-delay="100">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 will-change-transform">
                    <font-awesome-icon icon="fas fa-calendar" class="text-2xl text-white" />
                  </div>
                  <div class="text-3xl font-bold text-secondary-800 mb-2">{{ stats.foundationYear }}</div>
                  <div class="text-sm text-secondary-600">Fundação da Empresa</div>
                </div>
                
                <!-- Stat 2 -->
                <div class="text-center animate-on-scroll" data-delay="200">
                  <div class="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-4 will-change-transform">
                    <font-awesome-icon icon="fas fa-trophy" class="text-2xl text-white" />
                  </div>
                  <div class="text-3xl font-bold text-secondary-800 mb-2">{{ stats.projectsCompleted }}+</div>
                  <div class="text-sm text-secondary-600">Projetos Entregues</div>
                </div>
                
                <!-- Stat 3 -->
                <div class="text-center animate-on-scroll" data-delay="300">
                  <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 will-change-transform">
                    <font-awesome-icon icon="fas fa-heart" class="text-2xl text-white" />
                  </div>
                  <div class="text-3xl font-bold text-secondary-800 mb-2">{{ stats.clientSatisfaction }}%</div>
                  <div class="text-sm text-secondary-600">Clientes Satisfeitos</div>
                </div>
                
                <!-- Stat 4 -->
                <div class="text-center animate-on-scroll" data-delay="400">
                  <div class="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 will-change-transform">
                    <font-awesome-icon icon="fas fa-clock" class="text-2xl text-white" />
                  </div>
                  <div class="text-3xl font-bold text-secondary-800 mb-2">{{ stats.support }}</div>
                  <div class="text-sm text-secondary-600">Suporte Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Journey Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 mb-6">
            <font-awesome-icon icon="fas fa-map-marked-alt" class="mr-2" />
            Nossa Jornada
          </div>
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Uma trajetória de
            <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              crescimento e inovação
            </span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Desde 2020, construímos uma trajetória sólida no mercado digital, 
            sempre focados em resultados excepcionais e parcerias duradouras.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Timeline Item 1 -->
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center animate-on-scroll" data-delay="100">
            <div class="lg:w-1/2 space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center will-change-transform">
                  <font-awesome-icon icon="fas fa-rocket" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-secondary-800">2020 - O Início</h3>
                  <p class="text-primary-600 font-medium">Fundação e Primeiros Passos</p>
                </div>
              </div>
              <p class="text-lg text-secondary-600 leading-relaxed">
                Iniciamos nossas atividades com a missão clara de impulsionar o crescimento de empresas locais 
                no ambiente digital. Nossa visão era simples: criar soluções que realmente gerassem resultados.
              </p>
            </div>
            <div class="lg:w-1/2">
              <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 border border-primary-200">
                <div class="text-center">
                  <div class="text-4xl mb-4" aria-hidden="true">🚀</div>
                  <h4 class="text-xl font-bold text-secondary-800 mb-2">Missão Definida</h4>
                  <p class="text-secondary-600">Transformar negócios através da tecnologia e marketing digital</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline Item 2 -->
          <div class="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center animate-on-scroll" data-delay="200">
            <div class="lg:w-1/2 space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center will-change-transform">
                  <font-awesome-icon icon="fas fa-chart-line" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-secondary-800">2021-2023 - Crescimento</h3>
                  <p class="text-success-600 font-medium">Expansão e Consolidação</p>
                </div>
              </div>
              <p class="text-lg text-secondary-600 leading-relaxed">
                Período de crescimento acelerado, onde expandimos nossa equipe, aprimoramos nossos processos 
                e conquistamos a confiança de dezenas de clientes em diversos segmentos.
              </p>
            </div>
            <div class="lg:w-1/2">
              <div class="bg-gradient-to-br from-success-50 to-success-100 rounded-3xl p-8 border border-success-200">
                <div class="text-center">
                  <div class="text-4xl mb-4" aria-hidden="true">📈</div>
                  <h4 class="text-xl font-bold text-secondary-800 mb-2">Resultados Excepcionais</h4>
                  <p class="text-secondary-600">Crescimento sustentável baseado em resultados reais dos clientes</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline Item 3 -->
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center animate-on-scroll" data-delay="300">
            <div class="lg:w-1/2 space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center will-change-transform">
                  <font-awesome-icon icon="fas fa-star" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-secondary-800">2024-2025 - Inovação</h3>
                  <p class="text-accent-600 font-medium">Liderança e Futuro</p>
                </div>
              </div>
              <p class="text-lg text-secondary-600 leading-relaxed">
                Hoje somos referência em soluções digitais, sempre na vanguarda das tecnologias mais modernas, 
                construindo parcerias duradouras que geram impacto real nos negócios dos nossos clientes.
              </p>
            </div>
            <div class="lg:w-1/2">
              <div class="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-8 border border-accent-200">
                <div class="text-center">
                  <div class="text-4xl mb-4" aria-hidden="true">🌟</div>
                  <h4 class="text-xl font-bold text-secondary-800 mb-2">Visão de Futuro</h4>
                  <p class="text-secondary-600">Inovação constante e excelência em cada projeto entregue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Nossos <span class="text-primary-600">Valores</span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Estes são os princípios que guiam cada decisão e ação da 3W Online. 
            Valores que nos tornam únicos e confiáveis no mercado digital.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Value 1 -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="100">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-target" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Foco em Resultados</h3>
            <p class="text-secondary-600 leading-relaxed">
              Cada projeto é executado com foco em métricas e resultados tangíveis. 
              Não medimos esforços, medimos conquistas e impacto real nos negócios.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="200">
            <div class="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-lightbulb" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Inovação Constante</h3>
            <p class="text-secondary-600 leading-relaxed">
              Estar sempre um passo à frente, utilizando as tecnologias mais modernas 
              e metodologias inovadoras para criar soluções diferenciadas.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="300">
            <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-handshake" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Parceria Verdadeira</h3>
            <p class="text-secondary-600 leading-relaxed">
              Construímos relacionamentos duradouros baseados em confiança, transparência 
              e comprometimento mútuo com o sucesso de cada cliente.
            </p>
          </div>

          <!-- Value 4 -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="400">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-shield-alt" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Qualidade Garantida</h3>
            <p class="text-secondary-600 leading-relaxed">
              Excelência técnica em cada linha de código, cada estratégia de marketing 
              e cada interação com nossos clientes. Qualidade é inegociável.
            </p>
          </div>

          <!-- Value 5 -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="500">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-users" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Time Especializado</h3>
            <p class="text-secondary-600 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados, 
              apaixonados por tecnologia e comprometidos com a excelência.
            </p>
          </div>

          <!-- Value 6 -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2 animate-on-scroll will-change-transform" data-delay="600">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              <font-awesome-icon icon="fas fa-clock" class="text-2xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Agilidade & Eficiência</h3>
            <p class="text-secondary-600 leading-relaxed">
              Processos otimizados e metodologias ágeis que garantem entregas 
              no prazo e dentro do orçamento, sem comprometer a qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8">
            <font-awesome-icon icon="fas fa-handshake" class="mr-2" />
            Vamos Trabalhar Juntos
          </div>
          
          <h2 class="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para fazer parte da nossa 
            <span class="text-primary-200">história de sucesso?</span>
          </h2>
          
          <p class="text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            Se você busca uma parceria que vai além do convencional, que entende seu negócio 
            e está comprometida com seus resultados, a 3W Online é a escolha certa.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-large will-change-transform"
              prefetch
            >
              <font-awesome-icon icon="fas fa-calendar" class="mr-3 group-hover:animate-pulse" />
              Agendar Reunião
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Conheci a história da 3W Online e gostaria de conversar sobre como vocês podem ajudar meu negócio." 
              textButton="Falar no WhatsApp"
            />
          </div>

          <p class="text-sm text-primary-200 italic">
            <span aria-hidden="true">💡</span> Vamos conversar sobre como podemos transformar suas ideias em resultados extraordinários!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BtnWhatsApp from '~/components/site/BtnWhatsApp.vue'
import { usePerformanceOptimization } from '~/composables/usePerformanceOptimization'

// Performance optimization composable
const { useIntersectionObserver, preloadCriticalAssets } = usePerformanceOptimization()

// Performance optimization: Lazy load background elements
const isBackgroundVisible = ref(false)

// Reactive stats for better performance
const stats = computed(() => ({
  foundationYear: 2020,
  projectsCompleted: 50,
  clientSatisfaction: 100,
  support: '24/7'
}))

onMounted(() => {
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

  // Preload critical assets
  preloadCriticalAssets([
    '/favicon.ico'
  ])
})

definePageMeta({
  layout: 'site'
})

useHead({
  title: 'Sobre Nós - Nossa História e Valores',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { 
      name: 'description', 
      content: 'Conheça a história da 3W Online, uma software house e agência de marketing digital fundada em 2020. Nossa missão, valores e trajetória de sucesso no mercado digital.' 
    },
    { 
      name: 'keywords', 
      content: 'sobre 3w online, história empresa, valores, missão, software house curitiba, agência marketing digital, nossa equipe' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:title', content: 'Sobre Nós - 3W Online' },
    { property: 'og:description', content: 'Conheça nossa história, valores e missão. Desde 2020 transformando negócios através da tecnologia e marketing digital.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/sobre' },
    
    // Twitter
    { name: 'twitter:title', content: 'Sobre Nós - 3W Online' },
    { name: 'twitter:description', content: 'Nossa história, valores e missão de transformar negócios através da tecnologia.' }
  ],
  link: [
    // Preload critical fonts for better performance
    { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.shadow-soft {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
}

.shadow-large {
  box-shadow: 0 10px 50px -12px rgba(0, 0, 0, 0.25);
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

/* Optimize for mobile performance */
@media (max-width: 768px) {
  .blur-3xl {
    display: none; /* Remove expensive blur effects on mobile */
  }
  
  .will-change-transform {
    will-change: auto; /* Reset will-change on mobile to save memory */
  }
}

/* Reduce motion for accessibility and performance */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .transition-all,
  .group-hover\:animate-pulse,
  .transform {
    animation: none !important;
    transition: none !important;
  }
}
</style>
