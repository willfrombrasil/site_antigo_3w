<template>
  <section class="flex justify-center my-2">
    <NuxtLink
      :to="urlBtn"
      class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded transition duration-300"
    >
      {{ textLink }}
    </NuxtLink>
  </section>
</template>

<script setup>
const props = defineProps({
  urlBtn: {
    type: String,
    required: true
  },
  textLink: {
    type: String,
    default: 'Acessar'
  }
});
</script>
