<template>
  <footer class="bg-blue-900 text-white py-5 text-center relative">
    <p>&copy; {{ year }} Agência de Publicidade. Todos os direitos reservados.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>
