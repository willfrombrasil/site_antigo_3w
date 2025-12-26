<template>
  <section class="flex justify-center my-4">
    <NuxtLink
      :to="`https://wa.me/5541996924829?text=${encodeURIComponent(msg)}`"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 shadow"
    >
      <i class="fa-brands fa-whatsapp text-lg"></i>
      {{ textButton }}
    </NuxtLink>
  </section>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  textButton: {
    type: String,
    default: 'Fale Conosco no WhatsApp'
  }
})
</script>
