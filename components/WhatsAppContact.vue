<template>
  <section class="my-10 text-center">
    <div class="space-y-6">
      <h2 class="text-2xl font-semibold text-gray-800 flex justify-center items-center gap-2">
        <i class="fa-brands fa-rocketchat text-green-500 text-3xl"></i> {{ title }}
      </h2>
      <p class="text-gray-600">{{ description }}</p>
      <a
        :href="url"
        target="_blank"
        class="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 active:bg-green-700 transition duration-200"
      >
        <i class="fa-brands fa-whatsapp text-lg mr-2"></i> {{ textButton }}
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  url: String,
  textButton: String
});
</script>
