<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto grid md:grid-cols-3 gap-6">
      
      <div>
        <h3 class="font-bold text-lg">Iluminando Hoje, Inspirando o Amanhã</h3>
        <p class="mt-4 text-gray-400">
          Acreditamos que a verdadeira inovação vem da coragem de desafiar o status quo e abraçar o desconhecido.
        </p>
        <div class="mt-5 text-sm text-gray-500">
          <p>&copy; <b>Grupo 3w online</b> &reg; {{ year }} <i>todos os direitos reservados.</i></p>
        </div>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-2">Links Rápidos</h3>
        <ul class="space-y-1">
          <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
          <li><NuxtLink to="/sobre" class="hover:underline">Sobre</NuxtLink></li>
          <li><NuxtLink to="/servicos" class="hover:underline">Serviços</NuxtLink></li>
          <li><NuxtLink to="/contato" class="hover:underline">Contato</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-2">Contato</h3>
        <p>
          <a href="mailto:contato@3wonline.com.br" class="flex items-center space-x-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 0l-4-4m4 4l-4 4" />
            </svg>
            <span><b>Email:</b> contato@3wonline.com.br</span>
          </a>
        </p>

        <p class="mt-2">
          <a href="https://wa.me/5541996924829" target="_blank" rel="noopener" class="flex items-center space-x-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48a11.927 11.927 0 00-16.94 16.94l-1.98 5.77 5.78-1.97a11.927 11.927 0 0013.14-20.74zM12 19a7 7 0 01-7-7c0-.9.2-1.75.57-2.5l-.87-3.12 3.3.87A7 7 0 1112 19zm0-2a5 5 0 100-10 5 5 0 000 10z"/>
            </svg>
            <span><b>Telefone:</b> (41) 99692-4829 WhatsApp</span>
          </a>
        </p>

        <p class="mt-2">
          <a href="https://facebook.com/grupo3wonline" target="_blank" rel="noopener" class="flex items-center space-x-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.66 9.83v-6.96h-2.5v-2.87h2.5v-2.18c0-2.46 1.46-3.82 3.7-3.82 1.07 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.58.75-1.58 1.52v1.9h2.7l-.43 2.87h-2.27v6.96A10 10 0 0022 12z"/>
            </svg>
            <span><b>Facebook:</b> @grupo3wonline</span>
          </a>
        </p>

        <p class="mt-2">
          <a href="https://www.instagram.com/grupo3wonline" target="_blank" rel="noopener" class="flex items-center space-x-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11.37a4 4 0 11-4.94-4.94 4 4 0 014.94 4.94z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 6.5h.01"/>
            </svg>
            <span><b>Instagram:</b> @grupo3wonline</span>
          </a>
        </p>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>
