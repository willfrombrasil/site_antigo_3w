<template>
  <div>
    <NuxtLink 
      :to="urlBtn"
      class="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large"
      :aria-label="`Navegar para: ${textLink}`"
    >
      <i class="fas fa-arrow-right mr-3 group-hover:translate-x-1 transition-transform"></i>
      {{ textLink }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  urlBtn: string
  textLink: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.shadow-medium {
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-large {
  box-shadow: 0 10px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
