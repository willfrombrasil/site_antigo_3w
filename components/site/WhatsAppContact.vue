<template>
  <!-- gerar link whats contato -->
  <section>
    <div class="whats my-6 text-center">
      <h2 class="my-6 text-2xl font-semibold flex items-center justify-center gap-2">
        <i class="fa-brands fa-rocketchat"></i> {{ title }}
      </h2>
      <p class="my-6 text-base text-gray-700">{{ description }}</p>
      <a
        :href="url"
        target="_blank"
        class="inline-block px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700 focus:outline-none"
      >
        <i class="fa-brands fa-whatsapp mr-2"></i> {{ textButton }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  url: String,
  textButton: String
})
</script>
