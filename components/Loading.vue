<template>
  <div class="fixed inset-0 bg-gradient-to-br from-primary-600 to-primary-700 flex flex-col justify-center items-center z-[9999]">
    <!-- Logo -->
    <div class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
      <span class="text-2xl font-bold text-primary-600">3W</span>
    </div>

    <!-- Animação de carregamento moderna -->
    <div class="relative">
      <div class="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      <div class="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-white/40 rounded-full animate-ping"></div>
    </div>

    <!-- Mensagens -->
    <div class="mt-8 text-center">
      <p class="text-xl text-white font-semibold mb-2">{{ message }}</p>
      <p class="text-primary-100">{{ subtitle }}</p>
    </div>

    <!-- Barra de progresso -->
    <div class="w-64 h-2 bg-white/20 rounded-full mt-6 overflow-hidden">
      <div class="h-full bg-white rounded-full animate-pulse" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string
  subtitle?: string
  progress?: number
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Carregando...',
  subtitle: 'Aguarde um momento',
  progress: 100
})

defineOptions({
  name: 'LoadingScreen'
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
