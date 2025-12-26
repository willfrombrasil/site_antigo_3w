<template>
  <header class="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-4 px-[5%] lg:px-[10%] shadow-lg">
    <div class="flex justify-between items-center max-w-6xl mx-auto">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
          <span class="text-xl font-bold text-white">3W</span>
        </div>
        <div class="text-xl font-bold">
          3W Online
        </div>
      </div>
      
      <!-- Navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li>
            <NuxtLink 
              to="/" 
              class="flex items-center space-x-2 hover:text-primary-300 transition-colors duration-300"
              exact-active-class="text-primary-300"
            >
              <font-awesome-icon icon="fas fa-home" />
              <span>Início</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/sobre" 
              class="flex items-center space-x-2 hover:text-primary-300 transition-colors duration-300"
              exact-active-class="text-primary-300"
            >
              <font-awesome-icon icon="fas fa-users" />
              <span>Sobre</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/servicos" 
              class="flex items-center space-x-2 hover:text-primary-300 transition-colors duration-300"
              exact-active-class="text-primary-300"
            >
              <font-awesome-icon icon="fas fa-cogs" />
              <span>Serviços</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/ferramentas" 
              class="flex items-center space-x-2 hover:text-primary-300 transition-colors duration-300"
              exact-active-class="text-primary-300"
            >
              <font-awesome-icon icon="fas fa-tools" />
              <span>Ferramentas</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/contato" 
              class="flex items-center space-x-2 hover:text-primary-300 transition-colors duration-300"
              exact-active-class="text-primary-300"
            >
              <font-awesome-icon icon="fas fa-envelope" />
              <span>Contato</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-lg hover:bg-primary-700 transition-colors duration-300"
        :aria-label="isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
      >
        <font-awesome-icon 
          :icon="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" 
          class="text-xl"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isMobileMenuOpen"
      class="md:hidden mt-4 border-t border-primary-700 pt-4"
    >
      <ul class="space-y-3">
        <li>
          <NuxtLink 
            to="/" 
            class="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            exact-active-class="bg-primary-700"
            @click="closeMobileMenu"
          >
            <font-awesome-icon icon="fas fa-home" />
            <span>Início</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/sobre" 
            class="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            exact-active-class="bg-primary-700"
            @click="closeMobileMenu"
          >
            <font-awesome-icon icon="fas fa-users" />
            <span>Sobre</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/servicos" 
            class="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            exact-active-class="bg-primary-700"
            @click="closeMobileMenu"
          >
            <font-awesome-icon icon="fas fa-cogs" />
            <span>Serviços</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/ferramentas" 
            class="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            exact-active-class="bg-primary-700"
            @click="closeMobileMenu"
          >
            <font-awesome-icon icon="fas fa-tools" />
            <span>Ferramentas</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/contato" 
            class="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            exact-active-class="bg-primary-700"
            @click="closeMobileMenu"
          >
            <font-awesome-icon icon="fas fa-envelope" />
            <span>Contato</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Fechar menu mobile quando redimensionar para desktop
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      isMobileMenuOpen.value = false
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped>
/* Adiciona suavidade às transições */
.router-link-exact-active {
  color: #93C5FD; /* primary-300 */
}
</style>
