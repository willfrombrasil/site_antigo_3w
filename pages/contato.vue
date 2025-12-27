<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-4 -right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8">
            <font-awesome-icon icon="fas fa-handshake mr-2" />
            Vamos Conversar
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforme sua <span class="text-primary-200">ideia</span> em
            <span class="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent block">
              realidade digital
            </span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Estamos prontos para entender suas necessidades e criar a solução perfeita 
            para impulsionar o crescimento do seu negócio no mundo digital.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnWhatsApp 
              msg="Olá! Gostaria de agendar uma consultoria gratuita para conversar sobre meu projeto." 
              textButton="Consultoria Gratuita via WhatsApp"
            />
            
            <a 
              href="mailto:contato@3wonline.com.br" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-large"
            >
              <font-awesome-icon icon="fas fa-envelope mr-3 group-hover:animate-pulse" />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Options Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Como prefere 
            <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              entrar em contato?
            </span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Escolha a forma mais conveniente para você. Estamos disponíveis em múltiplos canais 
            para oferecer o melhor atendimento e suporte.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <!-- WhatsApp -->
          <div class="group bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fab fa-whatsapp text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">WhatsApp</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Resposta rápida e atendimento personalizado direto no seu celular.
            </p>
            <div class="space-y-3">
              <p class="text-lg font-semibold text-green-700">(41) 99692-4829</p>
              <BtnWhatsApp 
                msg="Olá! Quero conversar sobre os serviços da 3W Online." 
                textButton="Chamar no WhatsApp"
                trackingLocation="contact_page_card"
              />
            </div>
          </div>

          <!-- Email -->
          <div class="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-envelope text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">E-mail</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Para propostas detalhadas e documentações mais extensas.
            </p>
            <div class="space-y-3">
              <p class="text-lg font-semibold text-blue-700">contato@3wonline.com.br</p>
              <a 
                href="mailto:contato@3wonline.com.br" 
                class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <font-awesome-icon icon="fas fa-paper-plane mr-2" />
                Enviar E-mail
              </a>
            </div>
          </div>

          <!-- Social Media -->
          <div class="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 text-center md:col-span-2 lg:col-span-1">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-share-alt text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">Redes Sociais</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Acompanhe nosso trabalho e conteúdos nas redes sociais.
            </p>
            <div class="flex justify-center space-x-4">
              <a 
                href="https://facebook.com/grupo3wonline" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <font-awesome-icon icon="fab fa-facebook-f text-white" />
              </a>
              <a 
                href="https://www.instagram.com/grupo3wonline" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <font-awesome-icon icon="fab fa-instagram text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Form Iframe Freshdesk -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Fale <span class="text-primary-600">Conosco</span>
              </h2>
              <p class="text-xl text-secondary-600 leading-relaxed">
                Preencha o formulário abaixo com os detalhes do seu projeto.
                Retornaremos em até 24 horas com uma proposta personalizada.
              </p>
            </div>

            <div class="bg-white rounded-3xl p-4 shadow-soft border border-gray-100">
              <iframe
                title="Formulário de Contato"
                src="https://3wonline.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&formTitle=Fale+conosco&submitTitle=Enviar&submitThanks=Mensagem+Enviada+com+Sucesso"
                class="w-full h-[530px] border-0 rounded-xl"
                loading="lazy"
              ></iframe>
            </div>

            <p class="text-sm text-secondary-500 text-center mt-4">
              Ao enviar este formulário, você concorda com nossa
              <NuxtLink to="/politica-privacidade" class="text-primary-600 hover:underline">política de privacidade</NuxtLink>.
              Seus dados serão utilizados apenas para contato comercial.
            </p>
          </div>

          <!-- Info Panel -->
          <div class="space-y-8">
            <!-- Quick Contact -->
            <div class="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 class="text-2xl font-bold text-secondary-800 mb-6">
                <font-awesome-icon icon="fas fa-clock text-primary-600 mr-3" />
                Atendimento Rápido
              </h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <font-awesome-icon icon="fab fa-whatsapp text-green-600 text-xl" />
                  </div>
                  <div>
                    <p class="font-semibold text-secondary-800">WhatsApp</p>
                    <p class="text-secondary-600 text-sm">Resposta em minutos</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <font-awesome-icon icon="fas fa-envelope text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p class="font-semibold text-secondary-800">E-mail</p>
                    <p class="text-secondary-600 text-sm">Resposta em até 24h</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <font-awesome-icon icon="fas fa-calendar text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p class="font-semibold text-secondary-800">Reunião</p>
                    <p class="text-secondary-600 text-sm">Agendamento flexível</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Guarantees -->
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 border border-primary-200">
              <h3 class="text-2xl font-bold text-secondary-800 mb-6">
                <font-awesome-icon icon="fas fa-shield-alt text-primary-600 mr-3" />
                Nossas Garantias
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <font-awesome-icon icon="fas fa-check-circle text-success-500 mt-1" />
                  <span class="text-secondary-700">Consultoria inicial gratuita</span>
                </li>
                <li class="flex items-start space-x-3">
                  <font-awesome-icon icon="fas fa-check-circle text-success-500 mt-1" />
                  <span class="text-secondary-700">Proposta personalizada sem compromisso</span>
                </li>
                <li class="flex items-start space-x-3">
                  <font-awesome-icon icon="fas fa-check-circle text-success-500 mt-1" />
                  <span class="text-secondary-700">Suporte técnico especializado</span>
                </li>
                <li class="flex items-start space-x-3">
                  <font-awesome-icon icon="fas fa-check-circle text-success-500 mt-1" />
                  <span class="text-secondary-700">Acompanhamento pós-entrega</span>
                </li>
              </ul>
            </div>

            <!-- Call to Action -->
            <div class="bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-3xl p-8 text-white text-center">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-xl font-bold mb-4">Pronto para decolar?</h3>
              <p class="text-gray-300 mb-6">
                Agende uma consultoria gratuita e descubra como podemos acelerar seu crescimento.
              </p>
              <BtnWhatsApp 
                msg="Olá! Quero agendar uma consultoria gratuita para discutir meu projeto." 
                textButton="Agendar Consultoria"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
            Perguntas <span class="text-primary-600">Frequentes</span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos serviços e processos.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h4 class="text-lg font-bold text-secondary-800 mb-3">
              Quanto tempo leva para desenvolver um projeto?
            </h4>
            <p class="text-secondary-600">
              O prazo varia conforme a complexidade do projeto. Sites institucionais: 2-4 semanas. 
              E-commerce: 4-8 semanas. Sistemas personalizados: 6-16 semanas. Sempre definimos 
              cronogramas claros na proposta inicial.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h4 class="text-lg font-bold text-secondary-800 mb-3">
              Vocês oferecem suporte após a entrega?
            </h4>
            <p class="text-secondary-600">
              Sim! Todos os nossos projetos incluem garantia e suporte técnico. Oferecemos planos 
              de manutenção e atualizações para manter seu projeto sempre funcionando perfeitamente.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h4 class="text-lg font-bold text-secondary-800 mb-3">
              Como funciona o processo de pagamento?
            </h4>
            <p class="text-secondary-600">
              Trabalhamos com pagamento parcelado conforme entregas do projeto. Normalmente: 
              40% no início, 40% na entrega para homologação e 20% na entrega final. 
              Aceitamos PIX, transferência bancária e cartão.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h4 class="text-lg font-bold text-secondary-800 mb-3">
              Vocês atendem empresas de todo o Brasil?
            </h4>
            <p class="text-secondary-600">
              Sim! Atendemos clientes em todo o território nacional. Nosso atendimento é 100% 
              remoto, utilizando ferramentas modernas para comunicação e gestão de projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BtnWhatsApp from '~/components/site/BtnWhatsApp.vue'
import { useGoogleAnalytics } from '~/composables/useGoogleAnalytics'

const isSubmitting = ref(false)
const { trackPage, trackBusinessEvent } = useGoogleAnalytics()

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: ''
})

onMounted(() => {
  // Track contact page view
  trackPage('Contact Page', {
    page_category: 'conversion',
    conversion_goal: 'lead_generation'
  })
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // Track form submission attempt
  trackBusinessEvent.contactForm('contact_form_start', true)
  
  // Simular envio do formulário
  try {
    // Aqui você implementaria a lógica real de envio
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Track successful form submission
    trackBusinessEvent.contactForm('contact_form_success', true)
    trackBusinessEvent.quoteRequest(form.value.service, form.value.budget)
    
    // Redirect para WhatsApp com os dados do formulário
    const message = `Olá! Meu nome é ${form.value.name}.

📧 Email: ${form.value.email}
📱 Telefone: ${form.value.phone || 'Não informado'}
🎯 Serviço: ${form.value.service}
💰 Orçamento: ${form.value.budget || 'A definir'}

📝 Detalhes do projeto:
${form.value.message}

Gostaria de conversar sobre este projeto. Quando podemos agendar uma reunião?`

    const whatsappUrl = `https://wa.me/5541996924829?text=${encodeURIComponent(message)}`
    
    // Track WhatsApp redirection
    trackBusinessEvent.whatsappInteraction('contact_form_redirect', 'form_to_whatsapp')
    
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    Object.keys(form.value).forEach(key => {
      form.value[key as keyof typeof form.value] = ''
    })
    
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    // Track form submission error
    trackBusinessEvent.contactForm('contact_form_error', false)
  } finally {
    isSubmitting.value = false
  }
}

definePageMeta({
  layout: 'site'
})

useHead({
  title: 'Contato - Fale Conosco',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { 
      name: 'description', 
      content: 'Entre em contato com a 3W Online. WhatsApp: (41) 99692-4829 | Email: contato@3wonline.com.br. Consultoria gratuita para seu projeto digital.' 
    },
    { 
      name: 'keywords', 
      content: 'contato 3w online, whatsapp, email, consultoria gratuita, orçamento, desenvolvimento software, marketing digital' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:title', content: 'Contato - 3W Online' },
    { property: 'og:description', content: 'Entre em contato conosco para uma consultoria gratuita. WhatsApp, email ou formulário online.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/contato' },
    
    // Twitter
    { name: 'twitter:title', content: 'Contato - 3W Online' },
    { name: 'twitter:description', content: 'Fale conosco para uma consultoria gratuita sobre seu projeto digital.' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.shadow-soft {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
}

.shadow-large {
  box-shadow: 0 10px 50px -12px rgba(0, 0, 0, 0.25);
}

input:focus, select:focus, textarea:focus {
  outline: none;
}
</style>
