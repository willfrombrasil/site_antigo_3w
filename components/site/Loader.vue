<script setup lang="ts">
// Não precisa de lógica extra, só exportar o componente
</script>

<template>
  <div
    class="loader mx-auto border-8 border-white border-t-yellow-500 rounded-full w-20 h-20 animate-spin"
    role="status"
    aria-label="Carregando"
  >
    <span class="sr-only">Carregando...</span>
  </div>
</template>

<style scoped>
/* Caso queira ajustar a animação spin pelo Tailwind (já existe animate-spin) */
/* Se quiser ajustar duração, pode sobrescrever aqui: */
.loader {
  /* Se quiser que a spin dure 2s ao invés do padrão 1s */
  animation-duration: 2s;
}
</style>
