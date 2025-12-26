<template>
  <div>
    <a 
      :href="'https://wa.me/5541996924829?text=' + encodeURIComponent(msg)" 
      class="group inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Enviar mensagem via WhatsApp: ${msg}`"
      @click="handleClick"
    >
      <font-awesome-icon icon="fab fa-whatsapp" class="mr-3 group-hover:animate-pulse text-lg" />
      {{ textButton }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { useGoogleAnalytics } from '~/composables/useGoogleAnalytics'

interface Props {
  msg: string
  textButton: string
  trackingLocation?: string
}

const props = withDefaults(defineProps<Props>(), {
  trackingLocation: 'unknown'
})

const { trackBusinessEvent } = useGoogleAnalytics()

const handleClick = () => {
  // Track WhatsApp click
  trackBusinessEvent.whatsappInteraction(props.trackingLocation, 'lead_generation')
}
</script>

<style scoped>
.shadow-medium {
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-large {
  box-shadow: 0 10px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
