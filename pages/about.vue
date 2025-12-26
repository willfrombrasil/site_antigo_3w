<template>
  <div>

    <div class="max-w-5xl mx-auto px-4 py-10">
      <!-- Tabs Navigation -->
      <div class="flex flex-wrap border-b border-gray-200 mb-6">
        <button
          class="px-4 py-2 font-semibold text-sm border-b-4"
          :class="tab === 'about' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-blue-600'"
          @click="tab = 'about'"
        >
          Sobre Nós
        </button>
        <button
          class="px-4 py-2 font-semibold text-sm border-b-4 ml-4"
          :class="tab === 'suport' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-blue-600'"
          @click="tab = 'suport'"
        >
          Suporte
        </button>
        <button
          class="px-4 py-2 font-semibold text-sm border-b-4 ml-4"
          :class="tab === 'contact' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-blue-600'"
          @click="tab = 'contact'"
        >
          Contato
        </button>
      </div>

      <!-- Tab Content -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div v-if="tab === 'about'">
          <p v-for="(sobre, index) in about" :key="index" class="mb-4 text-gray-700">
            {{ sobre }}
          </p>
        </div>

        <div v-if="tab === 'suport'">
          <p v-for="(suporte, index) in suport" :key="index" class="mb-4 text-gray-700">
            {{ suporte }}
          </p>
        </div>

        <div v-if="tab === 'contact'">
          <p class="mb-4">
            <a class="text-blue-600 hover:underline" href="https://www.3wonline.com.br/contact/" target="_blank">
              Fale Conosco
            </a>
          </p>
          <p class="mb-4 text-gray-700">Nosso e-mail: 
            <a class="text-blue-600 hover:underline" href="mailto:contato@3wonline.com">contato@3wonline.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About | 3wSys',
  meta: [
    {
      name: 'keywords',
      content: 'Ferramentas online, App gratuito, Plataforma online'
    },
    {
      name: 'description',
      content:
        'O nosso app de ferramentas online oferece uma plataforma gratuita e de fácil acesso para realizar tarefas como conversão de moedas, cálculo de tempo e tradução de idiomas. Com uma experiência do usuário intuitiva e segurança de informações, nosso app é uma ótima opção para aumentar sua produtividade e economizar tempo em suas atividades online.'
    }
  ]
})

const tab = ref('about')

const items = [
  { title: 'home', disabled: false, href: '/' },
  { title: 'Sobre nós', disabled: true, href: '/about' }
]

const about = [
  'Bem-vindo à página do nosso app de ferramentas online! Com esta plataforma, você terá acesso a diversas ferramentas úteis que podem ajudar em várias tarefas cotidianas...',
  'Com nosso app, você pode desfrutar de uma variedade de ferramentas úteis, como um conversor de moedas, calculadora de tempo, conversor de medidas, tradutor de idiomas...',
  'Nosso app de ferramentas online é completamente gratuito e pode ser acessado em qualquer dispositivo com acesso à internet...',
  'Nossa equipe está sempre trabalhando para melhorar a experiência do usuário...',
  'Não importa se você precisa converter moedas, traduzir uma frase, ou usar qualquer uma das outras ferramentas...',
  'Então, se você está procurando uma maneira rápida e fácil de realizar tarefas online, experimente nosso app de ferramentas...'
]

const suport = [
  'Olá! Estamos felizes que você tenha chegado até a nossa página de contato...',
  'Se você tiver alguma dúvida ou precisar de ajuda com o nosso app de ferramentas online...',
  'Nossa equipe está comprometida em fornecer um excelente atendimento ao cliente...',
  'Não importa qual seja a sua pergunta ou comentário, nossa equipe de suporte está pronta para ajudar...',
  'Obrigado por visitar nossa página de contato e estamos ansiosos para ouvir de você em breve!'
]
</script>
