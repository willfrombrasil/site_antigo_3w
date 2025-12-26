<template>
  <section class="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 text-white relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>
    
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Urgency Badge -->
        <div class="text-center mb-8">
          <span class="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full animate-bounce">
            <i class="fas fa-fire mr-2"></i>
            🔥 PROMOÇÃO ESPECIAL - ÚLTIMAS 72 HORAS
          </span>
        </div>
        
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Transforme Seu Negócio com
            <span class="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Tecnologia que Converte
            </span>
          </h1>
          
          <div class="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            <p class="mb-4">🚀 <strong>Sites que vendem mais</strong> e sistemas que automatizam tudo</p>
            <p class="mb-4">💰 <strong>ROI garantido</strong> com aumento real de vendas</p>
            <p>🏆 <strong>Mais de 300 projetos</strong> entregues com sucesso</p>
          </div>
          
          <!-- Social Proof -->
          <div class="flex flex-wrap justify-center items-center space-x-8 mb-10 text-gray-300">
            <div class="flex items-center space-x-2">
              <i class="fas fa-check-circle text-green-400"></i>
              <span>8+ anos no mercado</span>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-check-circle text-green-400"></i>
              <span>98% clientes satisfeitos</span>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-check-circle text-green-400"></i>
              <span>Entrega garantida</span>
            </div>
          </div>
          
          <!-- CTA Principal -->
          <div class="space-y-4">
            <a href="https://wa.me/5541996924829?text=Olá! Quero uma PROPOSTA GRATUITA para transformar meu negócio!" 
              target="_blank"
              class="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
              <i class="fab fa-whatsapp mr-3 text-2xl"></i>
              QUERO MINHA PROPOSTA GRATUITA
            </a>
            
            <p class="text-gray-300 text-sm">
              ⚡ Resposta em 24h | 🎁 Consultoria 100% GRATUITA | 📞 Sem compromisso
            </p>
          </div>
          
          <!-- Guarantee Badge -->
          <div class="mt-8">
            <div class="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full font-bold">
              <i class="fas fa-shield-alt mr-2"></i>
              GARANTIA DE SATISFAÇÃO OU SEU DINHEIRO DE VOLTA
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Track hero section view
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: 'Hero Section',
      page_location: window.location.href
    })
  }
})
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
