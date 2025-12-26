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
            <font-awesome-icon icon="fas fa-gift" class="mr-2" />
            Oferta Especial - 20% de Desconto para os Primeiros 5 Clientes
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Nossos <span class="text-primary-200">Serviços</span> de
            <span class="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent">
              Alto Impacto
            </span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Soluções completas em desenvolvimento de software e marketing digital 
            que transformam ideias em resultados extraordinários para o seu negócio.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-large"
            >
              <font-awesome-icon icon="fas fa-calendar-alt" class="mr-3 group-hover:animate-pulse" />
              Agendar Consultoria Gratuita
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Gostaria de conhecer os serviços da 3W Online e entender como vocês podem ajudar meu negócio." 
              textButton="Falar no WhatsApp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 mb-6">
            <font-awesome-icon icon="fas fa-cogs" class="mr-2" />
            Nossa Expertise
          </div>
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Transformamos negócios com
            <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              tecnologia e estratégia
            </span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem combina desenvolvimento técnico de excelência com estratégias de marketing 
            que realmente geram conversões e crescimento sustentável.
          </p>
        </div>

        <!-- Main Services Grid -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Software Development -->
          <div class="group relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-4xl p-8 lg:p-12 border border-primary-200 hover:border-primary-300 transition-all duration-500 hover:-translate-y-2">
            <div class="flex items-start space-x-6">
              <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <font-awesome-icon icon="fas fa-code" class="text-3xl text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl lg:text-3xl font-bold text-secondary-800 mb-4">
                  Desenvolvimento de Software
                </h3>
                <p class="text-lg text-secondary-600 leading-relaxed mb-6">
                  Criamos sistemas personalizados, aplicações web e mobile que atendem exatamente 
                  às necessidades do seu negócio com as tecnologias mais modernas do mercado.
                </p>
                
                <div class="grid sm:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">Sistemas Web Personalizados</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">Aplicativos Mobile</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">APIs e Integrações</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">E-commerce Completo</span>
                  </div>
                </div>

                <BtnWhatsApp 
                  msg="Olá! Tenho interesse em desenvolvimento de software personalizado. Gostaria de saber mais sobre os serviços e solicitar um orçamento." 
                  textButton="Solicitar Orçamento"
                />
              </div>
            </div>
          </div>

          <!-- Digital Marketing -->
          <div class="group relative bg-gradient-to-br from-accent-50 to-accent-100 rounded-4xl p-8 lg:p-12 border border-accent-200 hover:border-accent-300 transition-all duration-500 hover:-translate-y-2">
            <div class="flex items-start space-x-6">
              <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <font-awesome-icon icon="fas fa-bullhorn" class="text-3xl text-white" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl lg:text-3xl font-bold text-secondary-800 mb-4">
                  Marketing Digital
                </h3>
                <p class="text-lg text-secondary-600 leading-relaxed mb-6">
                  Estratégias completas de marketing digital para aumentar sua visibilidade online, 
                  gerar leads qualificados e converter mais clientes.
                </p>
                
                <div class="grid sm:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">Gestão de Redes Sociais</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">Campanhas Google/Meta</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">SEO e Conteúdo</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <font-awesome-icon icon="fas fa-check-circle" class="text-success-500 text-lg" />
                    <span class="text-secondary-700 font-medium">Landing Pages</span>
                  </div>
                </div>

                <BtnWhatsApp 
                  msg="Olá! Quero impulsionar meu negócio com marketing digital. Podem me ajudar com uma estratégia personalizada?" 
                  textButton="Quero uma Estratégia"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Services -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Serviços <span class="text-primary-600">Detalhados</span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Conheça em detalhes cada um dos nossos serviços e como eles podem 
            transformar e acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Service Cards -->
          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-globe" class="text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Sites Institucionais</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Sites profissionais, responsivos e otimizados para SEO que transmitem credibilidade 
              e convertem visitantes em clientes.
            </p>
            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Design responsivo e moderno
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Otimização para SEO
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Integração com redes sociais
              </li>
            </ul>
            <BtnWhatsApp 
              msg="Preciso de um site institucional profissional. Podem me ajudar?" 
              textButton="Solicitar Orçamento"
            />
          </div>

          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-shopping-cart" class="text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">E-commerce</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Lojas virtuais completas com sistema de pagamento, gestão de estoque 
              e todas as funcionalidades para vender online.
            </p>
            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Gateway de pagamento
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Gestão de produtos
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Painel administrativo
              </li>
            </ul>
            <BtnWhatsApp 
              msg="Quero criar uma loja virtual para vender online. Vocês podem desenvolver?" 
              textButton="Criar Loja Virtual"
            />
          </div>

          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-cogs" class="text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Sistemas Personalizados</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Desenvolvemos sistemas sob medida para automatizar processos e 
              otimizar a gestão do seu negócio.
            </p>
            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Automação de processos
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Relatórios personalizados
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Integração com outras ferramentas
              </li>
            </ul>
            <BtnWhatsApp 
              msg="Preciso de um sistema personalizado para meu negócio. Podem desenvolver algo específico?" 
              textButton="Desenvolver Sistema"
            />
          </div>

          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fab fa-facebook text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Gestão de Redes Sociais</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Criação de conteúdo, planejamento estratégico e gestão completa 
              das suas redes sociais para aumentar engajamento.
            </p>
            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Criação de conteúdo
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Planejamento editorial
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Relatórios de performance
              </li>
            </ul>
            <BtnWhatsApp 
              msg="Preciso de ajuda para gerenciar minhas redes sociais e criar conteúdo relevante." 
              textButton="Gerenciar Redes"
            />
          </div>

          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-ad text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Campanhas de Anúncios</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Criação e gestão de campanhas no Google Ads, Facebook Ads e Instagram 
              para gerar leads qualificados e vendas.
            </p>
            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Google Ads
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Facebook e Instagram Ads
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Otimização contínua
              </li>
            </ul>
            <BtnWhatsApp 
              msg="Quero criar campanhas de anúncios para gerar mais leads e vendas. Podem me ajudar?" 
              textButton="Criar Campanhas"
            />
          </div>

          <div class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="fas fa-search text-2xl text-white" />
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">SEO & Marketing de Conteúdo</h3>
            <p class="text-secondary-600 mb-6 leading-relaxed">
              Otimização para mecanismos de busca e criação de conteúdo 
              estratégico para aumentar sua visibilidade orgânica.
            </p>
            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Auditoria SEO completa
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Criação de conteúdo
              </li>
              <li class="flex items-center text-secondary-600">
                <font-awesome-icon icon="fas fa-check text-success-500 mr-3" />
                Link building
              </li>
            </ul>
            <BtnWhatsApp 
              msg="Quero melhorar meu posicionamento no Google e criar uma estratégia de conteúdo." 
              textButton="Melhorar SEO"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Como <span class="text-primary-600">Trabalhamos</span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Nosso processo é transparente, colaborativo e focado em resultados. 
            Veja como transformamos suas ideias em soluções de sucesso.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto shadow-large">
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <div class="absolute top-10 left-1/2 w-16 h-1 bg-primary-200 hidden lg:block transform translate-x-4"></div>
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Análise & Planejamento</h3>
            <p class="text-secondary-600 leading-relaxed">
              Entendemos seu negócio, objetivos e desafios para criar uma estratégia personalizada.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto shadow-large">
                <span class="text-2xl font-bold text-white">2</span>
              </div>
              <div class="absolute top-10 left-1/2 w-16 h-1 bg-primary-200 hidden lg:block transform translate-x-4"></div>
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Desenvolvimento</h3>
            <p class="text-secondary-600 leading-relaxed">
              Colocamos a mão na massa e desenvolvemos sua solução com as melhores práticas do mercado.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-3xl flex items-center justify-center mx-auto shadow-large">
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <div class="absolute top-10 left-1/2 w-16 h-1 bg-primary-200 hidden lg:block transform translate-x-4"></div>
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Implementação</h3>
            <p class="text-secondary-600 leading-relaxed">
              Lançamos sua solução com testes rigorosos e treinamento completo da sua equipe.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto shadow-large">
                <span class="text-2xl font-bold text-white">4</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-secondary-800 mb-4">Acompanhamento</h3>
            <p class="text-secondary-600 leading-relaxed">
              Oferecemos suporte contínuo, monitoramento e otimizações para garantir o sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-28 bg-gradient-to-br from-secondary-800 to-secondary-900 text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full text-sm font-medium mb-8">
            <font-awesome-icon icon="fas fa-gift mr-2" />
            Oferta Limitada - Apenas 5 Vagas Disponíveis
          </div>
          
          <h2 class="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para <span class="text-primary-400">transformar</span> seu negócio?
          </h2>
          
          <p class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra exatamente como nossos serviços 
            podem acelerar o crescimento do seu negócio no mundo digital.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-large hover:shadow-xl"
            >
              <font-awesome-icon icon="fas fa-calendar mr-3 group-hover:animate-pulse" />
              Agendar Consultoria Gratuita
              <font-awesome-icon icon="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Vi os serviços da 3W Online e gostaria de uma consultoria gratuita para entender como vocês podem me ajudar." 
              textButton="Consultoria Gratuita"
            />
          </div>

          <p class="text-sm text-gray-400 italic">
            💡 <strong>Desconto especial:</strong> Os primeiros 5 clientes deste mês ganham 20% de desconto!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BtnWhatsApp from '~/components/site/BtnWhatsApp.vue'

definePageMeta({
  layout: 'site'
})

useHead({
  title: 'Serviços de Desenvolvimento e Marketing Digital',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { 
      name: 'description', 
      content: 'Conheça nossos serviços de desenvolvimento de software, criação de sites, e-commerce, marketing digital, gestão de redes sociais e campanhas de anúncios. Soluções completas para seu negócio digital.' 
    },
    { 
      name: 'keywords', 
      content: 'desenvolvimento software, criação sites, e-commerce, marketing digital, gestão redes sociais, campanhas anúncios, SEO, sistemas personalizados, aplicativos mobile' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:title', content: 'Serviços de Desenvolvimento e Marketing Digital - 3W Online' },
    { property: 'og:description', content: 'Desenvolvimento de software personalizado, sites, e-commerce e estratégias de marketing digital que geram resultados reais para seu negócio.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/servicos' },
    
    // Twitter
    { name: 'twitter:title', content: 'Serviços de Desenvolvimento e Marketing Digital - 3W Online' },
    { name: 'twitter:description', content: 'Soluções completas em desenvolvimento de software e marketing digital para transformar seu negócio.' }
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
</style>
