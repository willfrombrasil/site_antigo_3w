<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 transition-all duration-300">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300">
              <span class="text-white font-bold text-lg">3W</span>
            </div>
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full animate-pulse"></div>
          </div>
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold bg-gradient-to-r from-secondary-800 to-secondary-600 bg-clip-text text-transparent">
              3W Online
            </h1>
            <p class="text-xs text-secondary-500 font-medium">Software House & Marketing</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.path"
            :to="item.path" 
            class="relative px-4 py-2 text-secondary-600 hover:text-primary-600 font-medium transition-all duration-300 group"
            :class="{ 'text-primary-600': $route.path === item.path }"
          >
            <i :class="item.icon" class="mr-2"></i>
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
        </nav>

        <!-- CTA Button Desktop -->
        <div class="hidden lg:flex items-center space-x-4">
          <NuxtLink 
            to="/contato" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large"
          >
            <i class="fas fa-rocket mr-2"></i>
            Começar Projeto
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle navigation"
        >
          <div class="relative w-6 h-6">
            <span 
              class="absolute top-1 left-0 w-6 h-0.5 bg-secondary-600 rounded-full transition-all duration-300"
              :class="{ 'rotate-45 top-2.5': isOpen, 'rotate-0': !isOpen }"
            ></span>
            <span 
              class="absolute top-2.5 left-0 w-6 h-0.5 bg-secondary-600 rounded-full transition-all duration-300"
              :class="{ 'opacity-0': isOpen, 'opacity-100': !isOpen }"
            ></span>
            <span 
              class="absolute top-4 left-0 w-6 h-0.5 bg-secondary-600 rounded-full transition-all duration-300"
              :class="{ '-rotate-45 top-2.5': isOpen, 'rotate-0': !isOpen }"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        :class="[
          'lg:hidden overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        ]"
      >
        <nav class="flex flex-col space-y-2 pt-4 border-t border-gray-100" aria-label="Mobile navigation">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.path"
            :to="item.path" 
            @click="closeMenu"
            class="flex items-center px-4 py-3 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300"
            :class="{ 'text-primary-600 bg-primary-50': $route.path === item.path }"
          >
            <i :class="item.icon" class="mr-3 w-5"></i>
            {{ item.name }}
          </NuxtLink>
          
          <!-- Mobile CTA -->
          <div class="pt-4 border-t border-gray-100 mt-4">
            <NuxtLink 
              to="/contato" 
              @click="closeMenu"
              class="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-medium"
            >
              <i class="fas fa-rocket mr-2"></i>
              Começar Projeto
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
  
  <!-- Spacer for fixed header -->
  <div class="h-20"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const navigation = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Sobre', path: '/sobre', icon: 'fas fa-users' },
  { name: 'Serviços', path: '/servicos', icon: 'fas fa-cogs' },
  { name: 'Ferramentas', path: '/ferramentas', icon: 'fas fa-tools' },
  { name: 'Contato', path: '/contato', icon: 'fas fa-envelope' }
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

// Close menu on route change
watch(() => useRoute().path, () => {
  closeMenu()
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
