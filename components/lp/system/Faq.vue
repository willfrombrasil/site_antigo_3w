<template>
    <section class="bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-blue-900 mb-8">Perguntas Frequentes</h2>
        <div class="space-y-4">
          <div v-for="(faq, i) in faqs" :key="i" class="border rounded-lg overflow-hidden">
            <button @click="toggle(i)" class="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              {{ i + 1 }}. {{ faq.question }}
            </button>
            <div v-show="faq.open" class="px-4 py-2">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

  </script>
  