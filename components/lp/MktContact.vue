<template>
  <section class="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          🚀 TRANSFORME SEU NEGÓCIO AGORA!
        </h2>
        <p class="text-xl md:text-2xl mb-8">
          Não deixe seus concorrentes saírem na frente. Comece sua transformação digital hoje!
        </p>
        
        <!-- Urgency Counter -->
        <div class="bg-red-500 text-white p-4 rounded-lg mb-8 inline-block">
          <div class="flex items-center space-x-2">
            <i class="fas fa-clock text-xl"></i>
            <span class="font-bold">PROMOÇÃO TERMINA EM:</span>
            <div class="font-mono text-xl font-bold">
              47:23:15
            </div>
          </div>
        </div>
        
        <!-- Benefits List -->
        <div class="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-3xl mx-auto">
          <div class="flex items-center space-x-3">
            <i class="fas fa-check-circle text-pink-300 text-xl"></i>
            <span class="text-lg">✅ Proposta personalizada GRATUITA</span>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-check-circle text-pink-300 text-xl"></i>
            <span class="text-lg">⚡ Resposta em menos de 2 horas</span>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-check-circle text-pink-300 text-xl"></i>
            <span class="text-lg">🎁 Consultoria estratégica inclusa</span>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-check-circle text-pink-300 text-xl"></i>
            <span class="text-lg">🛡️ Garantia de satisfação total</span>
          </div>
        </div>
        
        <!-- Main CTA -->
        <div class="space-y-6">
          <a href="https://wa.me/5541996924829?text=Olá! Quero transformar meu negócio com um site/sistema profissional! Preciso de uma proposta personalizada." 
            target="_blank"
            @click="trackContactClick"
            class="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
            <i class="fab fa-whatsapp mr-3 text-3xl"></i>
            QUERO MINHA PROPOSTA GRATUITA
          </a>
          
          <p class="text-purple-100">
            📞 Atendimento especializado | 🎯 Sem compromisso | 💼 Foco em resultados
          </p>
        </div>
        
        <!-- Alternative Contact Methods -->
        <div class="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <i class="fab fa-whatsapp text-3xl text-green-400 mb-4"></i>
            <h3 class="font-bold text-lg mb-2">WhatsApp</h3>
            <p class="text-purple-100 text-sm mb-3">Resposta imediata</p>
            <a href="https://wa.me/5541996924829" target="_blank" 
              class="text-green-400 hover:text-green-300 font-semibold">
              (41) 99692-4829
            </a>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <i class="fas fa-envelope text-3xl text-blue-400 mb-4"></i>
            <h3 class="font-bold text-lg mb-2">E-mail</h3>
            <p class="text-purple-100 text-sm mb-3">Proposta detalhada</p>
            <a href="mailto:contato@3wonline.com.br" 
              class="text-blue-400 hover:text-blue-300 font-semibold">
              contato@3wonline.com.br
            </a>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <i class="fas fa-calendar text-3xl text-yellow-400 mb-4"></i>
            <h3 class="font-bold text-lg mb-2">Reunião</h3>
            <p class="text-purple-100 text-sm mb-3">Consultoria personalizada</p>
            <a href="https://wa.me/5541996924829?text=Quero agendar uma reunião para discutir meu projeto" 
              target="_blank"
              class="text-yellow-400 hover:text-yellow-300 font-semibold">
              Agendar agora
            </a>
          </div>
        </div>
        
        <!-- Trust Indicators -->
        <div class="mt-12 flex flex-wrap justify-center items-center space-x-8 text-purple-200">
          <div class="flex items-center space-x-2 mb-4">
            <i class="fas fa-award text-yellow-400"></i>
            <span>8+ anos no mercado</span>
          </div>
          <div class="flex items-center space-x-2 mb-4">
            <i class="fas fa-users text-green-400"></i>
            <span>300+ clientes atendidos</span>
          </div>
          <div class="flex items-center space-x-2 mb-4">
            <i class="fas fa-star text-yellow-400"></i>
            <span>98% de satisfação</span>
          </div>
          <div class="flex items-center space-x-2 mb-4">
            <i class="fas fa-shield-alt text-blue-400"></i>
            <span>Garantia total</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const trackContactClick = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'contact_click', {
      event_category: 'conversion',
      event_label: 'main_cta',
      value: 1
    })
  }
}

onMounted(() => {
  // Track contact section view
  if (typeof gtag !== 'undefined') {
    gtag('event', 'view_contact', {
      event_category: 'engagement',
      event_label: 'contact_section'
    })
  }
  
  // Start countdown timer
  startCountdown()
})

const startCountdown = () => {
  // Simple countdown animation (visual effect)
  const countdownElement = document.querySelector('.font-mono')
  if (countdownElement) {
    let hours = 47
    let minutes = 23
    let seconds = 15
    
    const updateCountdown = () => {
      if (seconds > 0) {
        seconds--
      } else if (minutes > 0) {
        minutes--
        seconds = 59
      } else if (hours > 0) {
        hours--
        minutes = 59
        seconds = 59
      }
      
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      countdownElement.textContent = timeString
    }
    
    setInterval(updateCountdown, 1000)
  }
}
</script>

<style scoped>
/* Custom animation for CTA button */
@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  50% { 
    transform: scale(1.02);
    box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>
  