<!-- SVG Icons Inline Component for Performance -->
<template>
  <svg :class="className" :width="size" :height="size" viewBox="0 0 24 24" fill="currentColor">
    <!-- Rocket Icon -->
    <path 
      v-if="name === 'rocket'"
      d="M12 2L13.09 8.26L20.96 12.74L13.09 15.74L12 22L10.91 15.74L3.04 12.74L10.91 8.26L12 2Z" 
    />
    
    <!-- Calendar Icon -->
    <path 
      v-else-if="name === 'calendar'"
      d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
    />
    
    <!-- Code Icon -->
    <path 
      v-else-if="name === 'code'"
      d="M14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6ZM9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6Z"
    />
    
    <!-- Arrow Right Icon -->
    <path 
      v-else-if="name === 'arrow-right'"
      d="M4 11V13H16L10.5 18.5L11.92 19.92L19.84 12L11.92 4.08L10.5 5.5L16 11H4Z"
    />
    
    <!-- Globe Icon -->
    <path 
      v-else-if="name === 'globe'"
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
    />
    
    <!-- Bullhorn Icon -->
    <path 
      v-else-if="name === 'bullhorn'"
      d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM21 9H20L15 10.5V8.5C15 7.1 13.9 6 12.5 6H11.5C10.1 6 9 7.1 9 8.5V15.5C9 16.9 10.1 18 11.5 18H12.5C13.9 18 15 16.9 15 15.5V13.5L20 15H21C21.6 15 22 14.6 22 14V10C22 9.4 21.6 9 21 9Z"
    />
    
    <!-- Eye Icon -->
    <path 
      v-else-if="name === 'eye'"
      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
    />
    
    <!-- Star Icon -->
    <path 
      v-else-if="name === 'star'"
      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
    />
    
    <!-- Shield Check Icon -->
    <path 
      v-else-if="name === 'shield-check'"
      d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"
    />
    
    <!-- Clock Icon -->
    <path 
      v-else-if="name === 'clock'"
      d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM17 13H11V7H12.5V11.5H17V13Z"
    />
    
    <!-- Award Icon -->
    <path 
      v-else-if="name === 'award'"
      d="M5 16L3 5L8.5 12L12 6L15.5 12L21 5L19 16H5ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9ZM12 11C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11Z"
    />
    
    <!-- Users Icon -->
    <path 
      v-else-if="name === 'users'"
      d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 14C12.42 14 16 15.79 16 18V20H0V18C0 15.79 3.58 14 8 14ZM16 14C20.42 14 24 15.79 24 18V20H18V18.5C18 16.9 17.11 15.62 15.58 14.59C15.95 14.28 16.46 14 17 14H16Z"
    />
    
    <!-- Check Icon -->
    <path 
      v-else-if="name === 'check'"
      d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
    />
    
    <!-- Default fallback -->
    <circle v-else cx="12" cy="12" r="8" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string
  size?: string | number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '24',
  className: ''
})
</script>
