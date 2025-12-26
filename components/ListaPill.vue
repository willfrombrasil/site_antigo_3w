<template>
  <div class="px-4 py-6 max-w-md mx-auto">
    <p class="text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-blue-600"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.146 6.146a.5.5 0 0 1 .708 0L8 9.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 10l3.147 3.146a.5.5 0 0 1-.708.708L8 10.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 10 4.146 6.854a.5.5 0 0 1 0-.708z"
        />
      </svg>
      Funcionalidades
    </p>

    <hr class="my-4 border-gray-300" />

    <div class="flex flex-wrap justify-center gap-3">
      <span
        v-for="(dt, index) in list"
        :key="index"
        :class="['px-3 py-1 rounded-full text-sm font-medium cursor-default select-none',
          variantClasses[index % variantClasses.length]]"
      >
        {{ dt }}
      </span>
    </div>

    <hr class="my-4 border-gray-300" />
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

// Variantes de cores (Tailwind) para badges
const variantClasses = [
  'bg-blue-500 text-white',
  'bg-gray-500 text-white',
  'bg-green-500 text-white',
  'bg-red-500 text-white',
  'bg-yellow-400 text-gray-900',
  'bg-teal-500 text-white',
  'bg-black text-white',
];
</script>
