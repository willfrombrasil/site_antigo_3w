<template>
  <div class="w-full max-w-5xl mx-auto">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 4000 }"
      navigation
      pagination
      class="rounded-lg overflow-hidden shadow-md"
    >
      <SwiperSlide v-for="(item, index) in slides" :key="index">
        <div class="relative">
          <img
            :src="item.srcImage"
            :alt="item.imgAlt"
            class="w-full h-[400px] object-cover"
          />
          <div class="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <h3 class="text-xl font-bold">{{ item.caption }}</h3>
            <p class="mb-4">{{ item.text }}</p>
            <NuxtLink
              :to="item.srcButton"
              class="self-start bg-white text-black px-4 py-2 text-sm font-semibold rounded hover:bg-gray-200 transition"
            >
              Acessar Agora
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Props
const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})
</script>
