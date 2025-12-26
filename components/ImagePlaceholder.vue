<template>
  <div 
    class="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden"
    :class="sizeClass"
    :style="{ width: width, height: height }"
  >
    <div class="text-center">
      <font-awesome-icon 
        :icon="icon" 
        :class="iconClass"
        class="text-gray-400 mb-2"
      />
      <div 
        v-if="showText" 
        class="text-xs text-gray-500 font-medium"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  text?: string
  showText?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  height: 'auto',
  size: 'md',
  icon: 'fas fa-image',
  text: 'Imagem',
  showText: true
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-16 h-16'
    case 'md':
      return 'w-24 h-24'
    case 'lg':
      return 'w-32 h-32'
    case 'xl':
      return 'w-48 h-48'
    default:
      return 'w-24 h-24'
  }
})

const iconClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-lg'
    case 'md':
      return 'text-2xl'
    case 'lg':
      return 'text-3xl'
    case 'xl':
      return 'text-4xl'
    default:
      return 'text-2xl'
  }
})
</script>

<style scoped>
/* Estilos específicos para o componente de placeholder */
</style>
