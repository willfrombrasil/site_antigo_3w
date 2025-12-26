<template>
  <div class="overflow-hidden">
    <!-- Header Section -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-4 -right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8">
            <font-awesome-icon icon="fas fa-file-contract" class="mr-2" />
            Termos e Condições
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Termos de <span class="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent">Uso</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
            Leia atentamente nossos termos e condições de uso dos serviços da 3W Online.
          </p>
        </div>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Last Updated -->
          <div class="bg-gray-50 rounded-2xl p-6 mb-12">
            <div class="flex items-center text-secondary-600">
              <font-awesome-icon icon="fas fa-calendar-alt" class="mr-3 text-primary-600" />
              <span class="text-sm">Última atualização: {{ lastUpdated }}</span>
            </div>
          </div>

          <!-- Terms Sections -->
          <div class="space-y-12">
            <!-- Section 1 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-info-circle" class="mr-3 text-primary-600" />
                1. Informações Gerais
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Os presentes Termos de Uso regulamentam a utilização dos serviços oferecidos pela 
                  <strong>3W Online</strong>, uma empresa especializada em desenvolvimento de software 
                  e marketing digital, inscrita no CNPJ sob o nº [CNPJ], com sede em [Endereço].
                </p>
                <p>
                  Ao contratar nossos serviços ou acessar nosso website, você concorda integralmente 
                  com estes termos e condições. Caso não concorde com algum ponto, recomendamos que 
                  não utilize nossos serviços.
                </p>
              </div>
            </div>

            <!-- Section 2 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-cogs" class="mr-3 text-primary-600" />
                2. Serviços Oferecidos
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>A 3W Online oferece os seguintes serviços:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Desenvolvimento de software personalizado</li>
                  <li>Criação de websites e e-commerce</li>
                  <li>Estratégias de marketing digital</li>
                  <li>Consultoria em transformação digital</li>
                  <li>Manutenção e suporte técnico</li>
                </ul>
                <p>
                  Os serviços são executados conforme especificações técnicas acordadas em contrato 
                  específico, que complementa estes termos gerais.
                </p>
              </div>
            </div>

            <!-- Section 3 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-handshake" class="mr-3 text-primary-600" />
                3. Responsabilidades do Cliente
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>O cliente compromete-se a:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Colaborar ativamente no desenvolvimento dos projetos</li>
                  <li>Realizar pagamentos conforme acordado</li>
                  <li>Respeitar os direitos autorais e propriedade intelectual</li>
                  <li>Não utilizar os serviços para atividades ilegais</li>
                </ul>
              </div>
            </div>

            <!-- Section 4 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-shield-alt" class="mr-3 text-primary-600" />
                4. Propriedade Intelectual
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Todos os materiais, códigos, designs e conteúdos desenvolvidos pela 3W Online 
                  são protegidos por direitos autorais. A transferência de propriedade ao cliente 
                  ocorre apenas mediante pagamento integral dos serviços.
                </p>
                <p>
                  A 3W Online reserva-se o direito de utilizar o conhecimento técnico adquirido 
                  durante a execução dos projetos para desenvolvimento de outros trabalhos, 
                  desde que não viole a confidencialidade dos dados específicos do cliente.
                </p>
              </div>
            </div>

            <!-- Section 5 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-credit-card" class="mr-3 text-primary-600" />
                5. Pagamentos e Reembolsos
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Os pagamentos devem ser realizados conforme cronograma estabelecido em contrato. 
                  Aceitamos as seguintes formas de pagamento:
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>PIX (desconto de 5%)</li>
                  <li>Transferência bancária</li>
                  <li>Cartão de crédito (até 12x)</li>
                  <li>Boleto bancário</li>
                </ul>
                <p>
                  Reembolsos são analisados caso a caso, considerando o estágio de desenvolvimento 
                  do projeto e os recursos já investidos.
                </p>
              </div>
            </div>

            <!-- Section 6 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-user-lock" class="mr-3 text-primary-600" />
                6. Privacidade e Proteção de Dados
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  A 3W Online compromete-se a proteger os dados pessoais e informações confidenciais 
                  dos clientes, conforme estabelecido na Lei Geral de Proteção de Dados (LGPD).
                </p>
                <p>
                  Para mais detalhes sobre como tratamos seus dados, consulte nossa 
                  <NuxtLink to="/politica-privacidade" class="text-primary-600 hover:text-primary-700 font-semibold">
                    Política de Privacidade
                  </NuxtLink>.
                </p>
              </div>
            </div>

            <!-- Section 7 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-gavel" class="mr-3 text-primary-600" />
                7. Limitação de Responsabilidade
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  A 3W Online não se responsabiliza por danos indiretos, lucros cessantes ou 
                  prejuízos decorrentes de falhas em sistemas de terceiros, interrupções de 
                  internet ou eventos de força maior.
                </p>
                <p>
                  Nossa responsabilidade limita-se ao valor total pago pelo cliente pelos 
                  serviços contratados.
                </p>
              </div>
            </div>

            <!-- Section 8 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-balance-scale" class="mr-3 text-primary-600" />
                8. Disposições Gerais
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Estes termos podem ser atualizados periodicamente. Alterações significativas 
                  serão comunicadas aos clientes com antecedência de 30 dias.
                </p>
                <p>
                  Este contrato é regido pelas leis brasileiras. Eventuais disputas serão 
                  resolvidas no foro da comarca de [Cidade], renunciando as partes a qualquer outro.
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-secondary-800 mb-4">
                <font-awesome-icon icon="fas fa-question-circle" class="mr-3 text-primary-600" />
                Dúvidas sobre os Termos?
              </h3>
              <p class="text-secondary-600 mb-6">
                Entre em contato conosco para esclarecimentos sobre estes termos de uso.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink 
                  to="/contato" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <font-awesome-icon icon="fas fa-envelope" class="mr-2" />
                  Fale Conosco
                </NuxtLink>
                <a 
                  href="https://wa.me/5541996924829?text=Olá! Tenho dúvidas sobre os termos de uso." 
                  target="_blank"
                  class="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <font-awesome-icon icon="fab fa-whatsapp" class="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Data de última atualização
const lastUpdated = computed(() => {
  return new Date('2024-01-15').toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

definePageMeta({
  layout: 'site'
})

// SEO otimizado
useHead({
  title: 'Termos de Uso - 3W Online',
  titleTemplate: '%s | Software House & Marketing Digital',
  meta: [
    { 
      name: 'description', 
      content: 'Termos de uso dos serviços da 3W Online. Conheça os direitos e deveres na contratação de nossos serviços de desenvolvimento de software e marketing digital.' 
    },
    { 
      name: 'keywords', 
      content: 'termos de uso, condições de uso, 3w online, contrato de serviços, desenvolvimento software, marketing digital' 
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    
    // Open Graph
    { property: 'og:title', content: 'Termos de Uso - 3W Online' },
    { property: 'og:description', content: 'Termos e condições de uso dos serviços de desenvolvimento de software e marketing digital da 3W Online.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/termos-uso' },
    
    // Twitter
    { name: 'twitter:title', content: 'Termos de Uso - 3W Online' },
    { name: 'twitter:description', content: 'Conheça os termos e condições para contratação dos nossos serviços.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/termos-uso' }
  ]
})

// Structured data para SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Termos de Uso - 3W Online',
  description: 'Termos e condições de uso dos serviços da 3W Online',
  url: 'https://www.3wonline.com.br/termos-uso',
  mainEntity: {
    '@type': 'Organization',
    name: '3W Online',
    url: 'https://www.3wonline.com.br'
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.prose {
  color: inherit;
}

.prose ul {
  margin: 1rem 0;
}

.prose li {
  margin: 0.5rem 0;
}

.prose strong {
  font-weight: 600;
  color: #1f2937;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Print styles */
@media print {
  .bg-gradient-to-br {
    background: #3b82f6 !important;
  }
  
  .text-white {
    color: white !important;
  }
  
  .shadow-large {
    box-shadow: none !important;
  }
}
</style>
