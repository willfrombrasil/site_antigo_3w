<template>
  <section class="flex justify-center my-2">
    <a
      :href="`https://wa.me/5541996924829?text=${encodeURIComponent(msg)}`"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded transition duration-300"
    >
      <i class="fa-brands fa-whatsapp text-base"></i>
      {{ textButton }}
    </a>
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
    default: 'Enviar no WhatsApp'
  }
});
</script>
