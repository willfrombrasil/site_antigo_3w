<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://embed.tawk.to/57ae6a7bc582ca2129e3a0db/default'
  script.charset = 'UTF-8'
  script.setAttribute('crossorigin', '*')

  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode?.insertBefore(script, firstScriptTag)
})
</script>

<template>
  <!-- Você pode deixar o template vazio, pois o script é apenas de carregamento -->
  <div class="hidden"></div>
</template>
