<template>
  <footer class="bg-gradient-to-br from-secondary-800 to-secondary-900 text-white">
    <!-- Main Footer Content -->
    <div class="py-16 px-6 lg:px-8">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <span class="text-xl font-bold text-white">3W</span>
              </div>
              <div class="text-2xl font-bold">3W Online</div>
            </div>
            
            <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
              Somos uma software house e agência de marketing digital especializada em 
              transformar negócios através da tecnologia e estratégias digitais inovadoras.
            </p>
            
            <!-- Social Media -->
            <div class="flex space-x-4">
              <a 
                href="https://facebook.com/grupo3wonline" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook da 3W Online"
              >
                <font-awesome-icon icon="fab fa-facebook-f" />
              </a>
              <a 
                href="https://instagram.com/grupo3wonline" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram da 3W Online"
              >
                <font-awesome-icon icon="fab fa-instagram" />
              </a>
              <a 
                href="https://linkedin.com/company/grupo3wonline" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn da 3W Online"
              >
                <font-awesome-icon icon="fab fa-linkedin-in" />
              </a>
              <a 
                href="https://wa.me/5541996924829" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp da 3W Online"
              >
                <font-awesome-icon icon="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink 
                  to="/" 
                  class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <font-awesome-icon icon="fas fa-home" class="text-sm" />
                  <span>Início</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/sobre" 
                  class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <font-awesome-icon icon="fas fa-users" class="text-sm" />
                  <span>Sobre Nós</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/servicos" 
                  class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <font-awesome-icon icon="fas fa-cogs" class="text-sm" />
                  <span>Serviços</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/ferramentas" 
                  class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <font-awesome-icon icon="fas fa-tools" class="text-sm" />
                  <span>Ferramentas</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/contato" 
                  class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <font-awesome-icon icon="fas fa-envelope" class="text-sm" />
                  <span>Contato</span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Contato</h3>
            <ul class="space-y-4">
              <li class="flex items-center space-x-3">
                <font-awesome-icon icon="fas fa-phone" class="text-primary-400" />
                <div>
                  <a 
                    href="tel:+5541996924829" 
                    class="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    (41) 99692-4829
                  </a>
                </div>
              </li>
              <li class="flex items-center space-x-3">
                <font-awesome-icon icon="fas fa-envelope" class="text-primary-400" />
                <div>
                  <a 
                    href="mailto:contato@3wonline.com.br" 
                    class="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    contato@3wonline.com.br
                  </a>
                </div>
              </li>
              <li class="flex items-center space-x-3">
                <font-awesome-icon icon="fas fa-map-marker-alt" class="text-primary-400" />
                <div class="text-gray-300">
                  Curitiba, PR<br>
                  Brasil
                </div>
              </li>
              <li class="flex items-center space-x-3">
                <font-awesome-icon icon="fas fa-clock" class="text-primary-400" />
                <div class="text-gray-300">
                  Seg - Sex: 9h às 18h
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700 py-6">
      <div class="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            &copy; {{ year }} 3W Online. Todos os direitos reservados.
          </div>
          
          <div class="flex items-center space-x-6 text-sm">
            <NuxtLink 
              to="/termos-uso" 
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Termos de Uso
            </NuxtLink>
            <NuxtLink 
              to="/politica-privacidade" 
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Política de Privacidade
            </NuxtLink>
          </div>
          
          <div class="flex items-center space-x-2 text-gray-400 text-sm">
            <font-awesome-icon icon="fas fa-heart" class="text-red-400" />
            <span>Feito com amor no Brasil</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = ref(new Date().getFullYear())
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
