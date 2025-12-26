<template>
  <section>
    <div>
      <NuxtLink 
        :to="urlPage"
        class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
      >
        {{ textLink }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  urlPage: {
    type: String,
    required: true,
  },
  textLink: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
/* Sem estilos adicionais - todo styling via Tailwind */
</style>
