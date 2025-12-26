<template>
  <footer class="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden pt-8">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    
    <div class="relative">
      <!-- Main Footer Content -->
      <div class="container mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-large">
                <span class="text-white font-bold text-xl">3W</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">3W Online</h3>
                <p class="text-primary-300 text-sm font-medium">Software House & Marketing Digital</p>
              </div>
            </div>
            
            <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Transformamos ideias em soluções digitais de alto impacto. Especialistas em desenvolvimento de software e estratégias de marketing que geram resultados reais.
            </p>
            
            <p class="text-gray-400 text-sm italic mb-6">
              "Iluminando hoje, inspirando o amanhã através da inovação tecnológica."
            </p>

            <!-- Social Media -->
            <div class="flex space-x-4">
              <a 
                href="https://facebook.com/grupo3wonline" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 bg-secondary-700 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f text-gray-300 group-hover:text-white transition-colors"></i>
              </a>
              <a 
                href="https://www.instagram.com/grupo3wonline" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 bg-secondary-700 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram text-gray-300 group-hover:text-white transition-colors"></i>
              </a>
              <a 
                href="https://wa.me/5541996924829" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 bg-secondary-700 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="WhatsApp"
              >
                <i class="fab fa-whatsapp text-gray-300 group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-6 relative">
              Links Rápidos
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400"></span>
            </h4>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.path">
                <NuxtLink 
                  :to="link.path" 
                  class="flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 group"
                >
                  <i :class="link.icon" class="mr-3 w-4 text-primary-500 group-hover:text-primary-400"></i>
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-6 relative">
              Contato
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400"></span>
            </h4>
            <ul class="space-y-4">
              <li>
                <a 
                  href="mailto:contato@3wonline.com.br" 
                  class="flex items-start text-gray-300 hover:text-primary-400 transition-all duration-300 group"
                >
                  <i class="fas fa-envelope mt-1 mr-3 text-primary-500 group-hover:text-primary-400"></i>
                  <div>
                    <p class="font-medium">Email</p>
                    <p class="text-sm">contato@3wonline.com.br</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5541996924829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-start text-gray-300 hover:text-primary-400 transition-all duration-300 group"
                >
                  <i class="fas fa-phone mt-1 mr-3 text-primary-500 group-hover:text-primary-400"></i>
                  <div>
                    <p class="font-medium">Telefone/WhatsApp</p>
                    <p class="text-sm">(41) 99692-4829</p>
                  </div>
                </a>
              </li>
              <li>
                <div class="flex items-start text-gray-300">
                  <i class="fas fa-map-marker-alt mt-1 mr-3 text-primary-500"></i>
                  <div>
                    <p class="font-medium">Localização</p>
                    <p class="text-sm">Curitiba, Paraná - Brasil</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-12 mb-4 pt-8 border-t border-secondary-700">
          <div class="bg-gradient-to-r from-primary-600/10 to-primary-500/10 rounded-2xl p-6 lg:p-8 border border-primary-500/20">
            <div class="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
              <div class="mb-4 lg:mb-0">
                <h4 class="text-xl font-bold text-white mb-2">Pronto para transformar seu negócio?</h4>
                <p class="text-gray-300">Entre em contato e descubra como podemos ajudar você a alcançar seus objetivos digitais.</p>
              </div>
              <div class="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <NuxtLink 
                  to="/contato" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large"
                >
                  <i class="fas fa-rocket mr-2"></i>
                  Começar Projeto
                </NuxtLink>
                <a 
                  href="https://wa.me/5541996924829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large"
                >
                  <i class="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-secondary-700 bg-secondary-900/50">
        <div class="container mx-auto px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-gray-400 text-sm">
              <p>&copy; {{ year }} <strong class="text-white">3W Online</strong>. Todos os direitos reservados.</p>
            </div>
            <div class="flex items-center space-x-6 text-sm">
              <NuxtLink to="/politica-privacidade" class="text-gray-400 hover:text-primary-400 transition-colors">
                Política de Privacidade
              </NuxtLink>
              <NuxtLink to="/termos-uso" class="text-gray-400 hover:text-primary-400 transition-colors">
                Termos de Uso
              </NuxtLink>
              <span class="text-gray-500">|</span>
              <span class="text-gray-400">Desenvolvido com ❤️ em Curitiba</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const year = ref(new Date().getFullYear())

const quickLinks = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Sobre Nós', path: '/sobre', icon: 'fas fa-users' },
  { name: 'Serviços', path: '/servicos', icon: 'fas fa-cogs' },
  { name: 'Ferramentas', path: '/ferramentas', icon: 'fas fa-tools' },
  { name: 'Contato', path: '/contato', icon: 'fas fa-envelope' }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
