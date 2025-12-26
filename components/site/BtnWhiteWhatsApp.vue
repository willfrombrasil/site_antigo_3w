<template>
  <section>
    <div>
      <a 
      :href="'https://wa.me/5541996924829?text=' + msg" 
      class="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
      target="_blank">
        <i class="fa-brands fa-whatsapp"></i> 
        {{textButton}}
      </a>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: String,
  textButton: String
});
</script>

<style scoped>
</style>
