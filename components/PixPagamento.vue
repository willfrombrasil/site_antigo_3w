<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const chavePix = ref('25.530.623/0001-05')
const tipo = ref('CNPJ')
const razao = ref('Grupo 3w Online')

const qrCodeUrl = ref('')

onMounted(() => {
  const conteudoPix = `PIX - Tipo: ${tipo.value}, Chave: ${chavePix.value}, Razão: ${razao.value}`
  QRCode.toDataURL(conteudoPix)
    .then(url => {
      qrCodeUrl.value = url
    })
    .catch(error => {
      console.error('Erro ao gerar QR Code:', error)
    })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">
      Pagamento Via Pix
    </h1>
    <p class="text-gray-600 mb-6 text-center">
      Para efetuar o pagamento, utilize o QR Code ou a chave Pix abaixo:
    </p>

    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <div class="mb-3">
        <p class="text-sm text-gray-700"><span class="font-semibold">Tipo:</span> {{ tipo }}</p>
      </div>
      <div class="mb-3">
        <p class="text-sm text-gray-700"><span class="font-semibold">Chave:</span> {{ chavePix }}</p>
      </div>
      <div class="mb-3">
        <p class="text-sm text-gray-700"><span class="font-semibold">Razão:</span> {{ razao }}</p>
      </div>

      <div class="mt-6 text-center">
        <span class="block font-semibold text-gray-800 mb-2">QR Code:</span>
        <img
          v-if="qrCodeUrl"
          :src="qrCodeUrl"
          alt="QR Code Pix"
          class="mx-auto w-40 h-40"
        />
        <p v-else class="text-gray-500 text-sm">Gerando QR Code...</p>
      </div>
    </div>

    <p class="text-gray-600 mt-6 text-center">
      Entre em
      <NuxtLink to="/contato" class="text-blue-600 hover:underline">
        contato
      </NuxtLink>
      para receber seu comprovante assim que o pagamento for confirmado.
    </p>

    <NuxtLink
      to="/contato"
      class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Contato
    </NuxtLink>
  </div>
</template>
