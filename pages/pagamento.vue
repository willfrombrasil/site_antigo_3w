<template>
  <div class="overflow-hidden">
    <!-- Header Section -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-4 -right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8">
            <font-awesome-icon icon="fas fa-credit-card" class="mr-2" />
            Pagamento Seguro
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Realize seu <span class="bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text text-transparent">Pagamento</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Escolha a forma de pagamento que preferir. Oferecemos as melhores opções para sua comodidade.
          </p>

          <!-- Payment Security Badges -->
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <font-awesome-icon icon="fas fa-shield-alt" class="mr-2 text-green-300" />
              SSL Seguro
            </div>
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <font-awesome-icon icon="fas fa-lock" class="mr-2 text-green-300" />
              Dados Protegidos
            </div>
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <font-awesome-icon icon="fas fa-certificate" class="mr-2 text-green-300" />
              PCI Compliance
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Options Section -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Payment Methods -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
              Formas de <span class="text-green-600">Pagamento</span>
            </h2>
            <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
              Escolha a opção que melhor se adequa às suas necessidades e finalize seu pagamento com segurança.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-16">
            <!-- PIX Payment -->
            <div class="group bg-white rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <font-awesome-icon icon="fas fa-qrcode" class="text-2xl text-white" />
                </div>
                
                <h3 class="text-2xl font-bold text-secondary-800 mb-4">PIX</h3>
                <div class="bg-green-50 rounded-xl p-4 mb-6">
                  <div class="text-2xl font-bold text-green-600 mb-2">5% OFF</div>
                  <div class="text-sm text-green-700">Desconto à vista</div>
                </div>
                
                <ul class="text-left space-y-3 mb-8">
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-green-500" />
                    Pagamento instantâneo
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-green-500" />
                    Disponível 24/7
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-green-500" />
                    Sem taxas adicionais
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-green-500" />
                    Confirmação automática
                  </li>
                </ul>

                <button 
                  @click="selectPaymentMethod('pix')"
                  class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition-colors duration-300"
                >
                  <font-awesome-icon icon="fas fa-qrcode" class="mr-2" />
                  Pagar com PIX
                </button>
              </div>
            </div>

            <!-- Credit Card -->
            <div class="group bg-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <font-awesome-icon icon="fas fa-credit-card" class="text-2xl text-white" />
                </div>
                
                <h3 class="text-2xl font-bold text-secondary-800 mb-4">Cartão de Crédito</h3>
                <div class="bg-blue-50 rounded-xl p-4 mb-6">
                  <div class="text-lg font-bold text-blue-600 mb-2">Até 12x</div>
                  <div class="text-sm text-blue-700">Sem juros</div>
                </div>
                
                <ul class="text-left space-y-3 mb-8">
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-blue-500" />
                    Parcelamento flexível
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-blue-500" />
                    Todas as bandeiras
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-blue-500" />
                    Pagamento seguro
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-blue-500" />
                    Processamento rápido
                  </li>
                </ul>

                <button 
                  @click="selectPaymentMethod('card')"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-colors duration-300"
                >
                  <font-awesome-icon icon="fas fa-credit-card" class="mr-2" />
                  Pagar com Cartão
                </button>
              </div>
            </div>

            <!-- Bank Transfer -->
            <div class="group bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <font-awesome-icon icon="fas fa-university" class="text-2xl text-white" />
                </div>
                
                <h3 class="text-2xl font-bold text-secondary-800 mb-4">Transferência</h3>
                <div class="bg-purple-50 rounded-xl p-4 mb-6">
                  <div class="text-lg font-bold text-purple-600 mb-2">2% OFF</div>
                  <div class="text-sm text-purple-700">Desconto à vista</div>
                </div>
                
                <ul class="text-left space-y-3 mb-8">
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-purple-500" />
                    TED/DOC
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-purple-500" />
                    Todos os bancos
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-purple-500" />
                    Confirmação em 1 dia útil
                  </li>
                  <li class="flex items-center text-secondary-600">
                    <font-awesome-icon icon="fas fa-check" class="mr-3 text-purple-500" />
                    Comprovante por email
                  </li>
                </ul>

                <button 
                  @click="selectPaymentMethod('transfer')"
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition-colors duration-300"
                >
                  <font-awesome-icon icon="fas fa-university" class="mr-2" />
                  Transferência Bancária
                </button>
              </div>
            </div>
          </div>

          <!-- Payment Component -->
          <div v-if="selectedMethod" class="max-w-4xl mx-auto">
            <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <h3 class="text-2xl font-bold text-secondary-800">
                    <font-awesome-icon :icon="getPaymentIcon(selectedMethod)" class="mr-3 text-primary-600" />
                    {{ getPaymentTitle(selectedMethod) }}
                  </h3>
                  <button 
                    @click="selectedMethod = null"
                    class="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <font-awesome-icon icon="fas fa-times" class="text-xl" />
                  </button>
                </div>
              </div>
              
              <div class="p-8">
                <PixPagamento v-if="selectedMethod === 'pix'" />
                
                <div v-else-if="selectedMethod === 'card'" class="text-center">
                  <div class="mb-8">
                    <font-awesome-icon icon="fas fa-credit-card" class="text-6xl text-blue-500 mb-4" />
                    <h4 class="text-2xl font-bold text-secondary-800 mb-4">Pagamento com Cartão</h4>
                    <p class="text-secondary-600">
                      Você será redirecionado para nossa plataforma de pagamento segura.
                    </p>
                  </div>
                  
                  <div class="grid md:grid-cols-4 gap-4 mb-8">
                    <div class="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                      <font-awesome-icon icon="fab fa-cc-visa" class="text-3xl text-blue-600" />
                    </div>
                    <div class="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                      <font-awesome-icon icon="fab fa-cc-mastercard" class="text-3xl text-red-600" />
                    </div>
                    <div class="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                      <font-awesome-icon icon="fab fa-cc-amex" class="text-3xl text-blue-800" />
                    </div>
                    <div class="flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                      <font-awesome-icon icon="fas fa-credit-card" class="text-3xl text-gray-600" />
                    </div>
                  </div>
                  
                  <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-colors">
                    <font-awesome-icon icon="fas fa-external-link-alt" class="mr-2" />
                    Prosseguir com Cartão
                  </button>
                </div>
                
                <div v-else-if="selectedMethod === 'transfer'" class="text-center">
                  <div class="mb-8">
                    <font-awesome-icon icon="fas fa-university" class="text-6xl text-purple-500 mb-4" />
                    <h4 class="text-2xl font-bold text-secondary-800 mb-4">Transferência Bancária</h4>
                    <p class="text-secondary-600 mb-6">
                      Utilize os dados abaixo para realizar sua transferência bancária.
                    </p>
                  </div>
                  
                  <div class="bg-gray-50 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
                    <h5 class="font-bold text-secondary-800 mb-4 text-center">Dados Bancários</h5>
                    <div class="space-y-3">
                      <div>
                        <span class="text-sm text-secondary-600">Banco:</span>
                        <div class="font-semibold">Banco do Brasil</div>
                      </div>
                      <div>
                        <span class="text-sm text-secondary-600">Agência:</span>
                        <div class="font-semibold">1234-5</div>
                      </div>
                      <div>
                        <span class="text-sm text-secondary-600">Conta:</span>
                        <div class="font-semibold">12345-6</div>
                      </div>
                      <div>
                        <span class="text-sm text-secondary-600">CNPJ:</span>
                        <div class="font-semibold">12.345.678/0001-90</div>
                      </div>
                      <div>
                        <span class="text-sm text-secondary-600">Favorecido:</span>
                        <div class="font-semibold">3W Online LTDA</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                    <div class="flex items-start">
                      <font-awesome-icon icon="fas fa-exclamation-triangle" class="text-yellow-600 mr-3 mt-1" />
                      <div class="text-left">
                        <h6 class="font-semibold text-yellow-800 mb-2">Importante:</h6>
                        <p class="text-sm text-yellow-700">
                          Após realizar a transferência, envie o comprovante para 
                          <a href="mailto:financeiro@3wonline.com.br" class="font-semibold underline">
                            financeiro@3wonline.com.br
                          </a> 
                          para confirmação do pagamento.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-colors">
                    <font-awesome-icon icon="fas fa-envelope" class="mr-2" />
                    Enviar Comprovante
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Support Section -->
          <div class="mt-16 bg-white rounded-3xl p-8 border border-gray-200">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-secondary-800 mb-4">
                <font-awesome-icon icon="fas fa-headset" class="mr-3 text-primary-600" />
                Precisa de Ajuda?
              </h3>
              <p class="text-secondary-600 mb-6">
                Nossa equipe está pronta para ajudar você com qualquer dúvida sobre pagamentos.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:financeiro@3wonline.com.br" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <font-awesome-icon icon="fas fa-envelope" class="mr-2" />
                  financeiro@3wonline.com.br
                </a>
                <a 
                  href="https://wa.me/5541996924829?text=Olá! Preciso de ajuda com pagamento." 
                  target="_blank"
                  class="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <font-awesome-icon icon="fab fa-whatsapp" class="mr-2" />
                  Suporte WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-16 bg-secondary-900 text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-8">
            <font-awesome-icon icon="fas fa-shield-alt" class="mr-3 text-green-400" />
            Seus Dados Estão Seguros
          </h3>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <font-awesome-icon icon="fas fa-lock" class="text-3xl text-green-400 mb-3" />
              <h4 class="font-semibold mb-2">Criptografia SSL</h4>
              <p class="text-sm text-gray-300">Todas as transações são protegidas com criptografia de 256 bits</p>
            </div>
            
            <div class="text-center">
              <font-awesome-icon icon="fas fa-user-shield" class="text-3xl text-green-400 mb-3" />
              <h4 class="font-semibold mb-2">Conformidade LGPD</h4>
              <p class="text-sm text-gray-300">Seus dados pessoais são tratados conforme a legislação</p>
            </div>
            
            <div class="text-center">
              <font-awesome-icon icon="fas fa-certificate" class="text-3xl text-green-400 mb-3" />
              <h4 class="font-semibold mb-2">PCI Compliance</h4>
              <p class="text-sm text-gray-300">Certificação de segurança para pagamentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PixPagamento from "~/components/site/PixPagamento.vue"

// Reactive data
const selectedMethod = ref<string | null>(null)

// Methods
const selectPaymentMethod = (method: string) => {
  selectedMethod.value = method
  // Scroll to payment section
  setTimeout(() => {
    const element = document.querySelector('.max-w-4xl')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const getPaymentIcon = (method: string) => {
  const icons = {
    pix: 'fas fa-qrcode',
    card: 'fas fa-credit-card',
    transfer: 'fas fa-university'
  }
  return icons[method as keyof typeof icons] || 'fas fa-credit-card'
}

const getPaymentTitle = (method: string) => {
  const titles = {
    pix: 'Pagamento via PIX',
    card: 'Pagamento com Cartão',
    transfer: 'Transferência Bancária'
  }
  return titles[method as keyof typeof titles] || 'Pagamento'
}

definePageMeta({
  layout: 'site'
})

// SEO otimizado
useHead({
  title: 'Pagamento Seguro - 3W Online',
  titleTemplate: '%s | Múltiplas Formas de Pagamento',
  meta: [
    { 
      name: 'description', 
      content: 'Realize seu pagamento de forma segura na 3W Online. Aceitamos PIX (5% desconto), cartão de crédito em até 12x sem juros e transferência bancária.' 
    },
    { 
      name: 'keywords', 
      content: 'pagamento seguro, pix, cartão de crédito, transferência bancária, 3w online, pagamento parcelado' 
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Página de pagamento não deve ser indexada
    { name: 'author', content: '3W Online - Software House & Marketing' },
    
    // Open Graph
    { property: 'og:title', content: 'Pagamento Seguro - 3W Online' },
    { property: 'og:description', content: 'Finalize seu pagamento com segurança. Múltiplas opções de pagamento disponíveis.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/pagamento' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/pagamento' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Smooth animations */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Card hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Payment method selection animation */
.max-w-4xl {
  animation: slideInUp 0.5s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive improvements */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2.5rem;
  }
  
  .text-6xl {
    font-size: 3.5rem;
  }
  
  .text-7xl {
    font-size: 4rem;
  }
}

/* Print styles */
@media print {
  .bg-gradient-to-br {
    background: #16a34a !important;
  }
  
  .text-white {
    color: white !important;
  }
  
  button {
    display: none !important;
  }
}
</style>
