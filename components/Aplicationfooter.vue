<template>
  <footer class="bg-indigo-600 text-white py-8 flex flex-col items-center text-center">
    <nav aria-label="Redes sociais" class="flex space-x-6 mb-5 text-2xl">
      <a href="#" aria-label="YouTube" class="hover:text-gray-200 transition">
        <i class="mdi mdi-youtube" aria-hidden="true"></i>
      </a>
      <a href="#" aria-label="Facebook" class="hover:text-gray-200 transition">
        <i class="mdi mdi-facebook" aria-hidden="true"></i>
      </a>
      <a href="#" aria-label="Twitter" class="hover:text-gray-200 transition">
        <i class="mdi mdi-twitter" aria-hidden="true"></i>
      </a>
      <a href="#" aria-label="LinkedIn" class="hover:text-gray-200 transition">
        <i class="mdi mdi-linkedin" aria-hidden="true"></i>
      </a>
      <a href="#" aria-label="Instagram" class="hover:text-gray-200 transition">
        <i class="mdi mdi-instagram" aria-hidden="true"></i>
      </a>
    </nav>

    <div class="w-full h-px bg-white/30 mb-5"></div>

    <p class="text-sm select-none">
      {{ year }} — <strong>Password Generator</strong> &copy; {{ application }}. &reg; Todos os direitos reservados.
    </p>
  </footer>
</template>

<script setup>
const application = 'Password Generator'
const year = new Date().getFullYear()
</script>
