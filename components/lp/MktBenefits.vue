<template>
  <section class="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            🚀 POR QUE <span class="text-purple-600">SOMOS DIFERENTES?</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Não somos apenas desenvolvedores. Somos <strong>parceiros</strong> do seu sucesso!
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Resultados Comprovados -->
          <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500 transform hover:scale-105 transition-transform">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Resultados Comprovados</h3>
              <p class="text-gray-600 mb-4">Sites que aumentam vendas em até 300% e sistemas que reduzem custos em 50%.</p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <span class="text-2xl font-bold text-purple-600">+300%</span>
                <p class="text-sm text-purple-700">Aumento médio em conversões</p>
              </div>
            </div>
          </div>
          
          <!-- Tecnologia de Ponta -->
          <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-500 transform hover:scale-105 transition-transform">
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-rocket text-pink-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Tecnologia de Ponta</h3>
              <p class="text-gray-600 mb-4">Utilizamos as tecnologias mais modernas e seguras do mercado.</p>
              <div class="bg-pink-50 p-4 rounded-lg">
                <span class="text-2xl font-bold text-pink-600">100%</span>
                <p class="text-sm text-pink-700">Tecnologias atualizadas</p>
              </div>
            </div>
          </div>
          
          <!-- Suporte Vitalício -->
          <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-500 transform hover:scale-105 transition-transform">
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-headset text-indigo-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Suporte Vitalício</h3>
              <p class="text-gray-600 mb-4">Acompanhamos seu projeto mesmo após a entrega, garantindo seu sucesso.</p>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <span class="text-2xl font-bold text-indigo-600">24/7</span>
                <p class="text-sm text-indigo-700">Suporte disponível</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Additional Benefits -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <i class="fas fa-mobile-alt text-3xl text-purple-600 mb-3"></i>
            <h4 class="font-bold text-gray-800 mb-2">100% Responsivo</h4>
            <p class="text-gray-600 text-sm">Funciona perfeitamente em todos os dispositivos</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <i class="fas fa-search text-3xl text-purple-600 mb-3"></i>
            <h4 class="font-bold text-gray-800 mb-2">SEO Otimizado</h4>
            <p class="text-gray-600 text-sm">Seu site nas primeiras posições do Google</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <i class="fas fa-bolt text-3xl text-purple-600 mb-3"></i>
            <h4 class="font-bold text-gray-800 mb-2">Carregamento Rápido</h4>
            <p class="text-gray-600 text-sm">Sites otimizados para máxima velocidade</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <i class="fas fa-shield-alt text-3xl text-purple-600 mb-3"></i>
            <h4 class="font-bold text-gray-800 mb-2">Segurança Total</h4>
            <p class="text-gray-600 text-sm">Proteção máxima contra ataques</p>
          </div>
        </div>
        
        <!-- Social Proof Section -->
        <div class="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-6">🏆 NÚMEROS QUE IMPRESSIONAM</h3>
            <div class="grid md:grid-cols-4 gap-6">
              <div>
                <div class="text-3xl font-bold text-pink-300">300+</div>
                <p>Projetos Entregues</p>
              </div>
              <div>
                <div class="text-3xl font-bold text-pink-300">8+</div>
                <p>Anos de Experiência</p>
              </div>
              <div>
                <div class="text-3xl font-bold text-pink-300">98%</div>
                <p>Clientes Satisfeitos</p>
              </div>
              <div>
                <div class="text-3xl font-bold text-pink-300">24h</div>
                <p>Tempo de Resposta</p>
              </div>
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
  // Track benefits section view
  if (typeof gtag !== 'undefined') {
    gtag('event', 'view_benefits', {
      event_category: 'engagement',
      event_label: 'benefits_section'
    })
  }
})
</script>

<style scoped>
/* Additional hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}
</style>
