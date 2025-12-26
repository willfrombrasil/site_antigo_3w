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
            <font-awesome-icon icon="fas fa-user-shield" class="mr-2" />
            LGPD Compliance
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Política de <span class="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent">Privacidade</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
            Transparência total sobre como coletamos, usamos e protegemos seus dados pessoais.
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Content -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Last Updated -->
          <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 mb-12">
            <div class="flex items-center justify-between">
              <div class="flex items-center text-green-700">
                <font-awesome-icon icon="fas fa-shield-alt" class="mr-3 text-green-600" />
                <span class="font-semibold">Política atualizada conforme LGPD</span>
              </div>
              <div class="flex items-center text-green-600 text-sm">
                <font-awesome-icon icon="fas fa-calendar-alt" class="mr-2" />
                {{ lastUpdated }}
              </div>
            </div>
          </div>

          <!-- Privacy Sections -->
          <div class="space-y-12">
            <!-- Section 1 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-info-circle" class="mr-3 text-primary-600" />
                1. Informações Gerais
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  A <strong>3W Online</strong> valoriza e respeita a privacidade dos nossos clientes e visitantes. 
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos 
                  suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
                </p>
                <p>
                  Ao utilizar nossos serviços ou acessar nosso website, você concorda com as práticas 
                  descritas nesta política.
                </p>
              </div>
            </div>

            <!-- Section 2 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-database" class="mr-3 text-primary-600" />
                2. Dados Que Coletamos
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>Coletamos os seguintes tipos de dados pessoais:</p>
                
                <div class="bg-gray-50 rounded-xl p-6 my-6">
                  <h4 class="font-bold text-secondary-800 mb-4 flex items-center">
                    <font-awesome-icon icon="fas fa-user" class="mr-2 text-primary-600" />
                    Dados de Identificação
                  </h4>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Nome completo</li>
                    <li>CPF/CNPJ</li>
                    <li>E-mail</li>
                    <li>Telefone</li>
                    <li>Endereço</li>
                  </ul>
                </div>

                <div class="bg-gray-50 rounded-xl p-6 my-6">
                  <h4 class="font-bold text-secondary-800 mb-4 flex items-center">
                    <font-awesome-icon icon="fas fa-chart-line" class="mr-2 text-primary-600" />
                    Dados de Navegação
                  </h4>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tempo de permanência</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </div>

                <div class="bg-gray-50 rounded-xl p-6 my-6">
                  <h4 class="font-bold text-secondary-800 mb-4 flex items-center">
                    <font-awesome-icon icon="fas fa-briefcase" class="mr-2 text-primary-600" />
                    Dados Comerciais
                  </h4>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Histórico de compras</li>
                    <li>Preferências de serviços</li>
                    <li>Dados de pagamento (criptografados)</li>
                    <li>Comunicações comerciais</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Section 3 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-bullseye" class="mr-3 text-primary-600" />
                3. Finalidade do Tratamento
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
                
                <div class="grid md:grid-cols-2 gap-6 my-8">
                  <div class="bg-blue-50 rounded-xl p-6">
                    <h4 class="font-bold text-blue-800 mb-3 flex items-center">
                      <font-awesome-icon icon="fas fa-cogs" class="mr-2 text-blue-600" />
                      Prestação de Serviços
                    </h4>
                    <ul class="text-sm text-blue-700 space-y-1">
                      <li>• Desenvolvimento de projetos</li>
                      <li>• Suporte técnico</li>
                      <li>• Comunicação sobre projetos</li>
                      <li>• Entrega de soluções</li>
                    </ul>
                  </div>

                  <div class="bg-green-50 rounded-xl p-6">
                    <h4 class="font-bold text-green-800 mb-3 flex items-center">
                      <font-awesome-icon icon="fas fa-chart-bar" class="mr-2 text-green-600" />
                      Melhorias e Análises
                    </h4>
                    <ul class="text-sm text-green-700 space-y-1">
                      <li>• Análise de desempenho</li>
                      <li>• Melhoria dos serviços</li>
                      <li>• Pesquisas de satisfação</li>
                      <li>• Desenvolvimento de novos produtos</li>
                    </ul>
                  </div>

                  <div class="bg-purple-50 rounded-xl p-6">
                    <h4 class="font-bold text-purple-800 mb-3 flex items-center">
                      <font-awesome-icon icon="fas fa-bullhorn" class="mr-2 text-purple-600" />
                      Marketing e Comunicação
                    </h4>
                    <ul class="text-sm text-purple-700 space-y-1">
                      <li>• Newsletter e atualizações</li>
                      <li>• Ofertas personalizadas</li>
                      <li>• Conteúdo relevante</li>
                      <li>• Campanhas promocionais</li>
                    </ul>
                  </div>

                  <div class="bg-orange-50 rounded-xl p-6">
                    <h4 class="font-bold text-orange-800 mb-3 flex items-center">
                      <font-awesome-icon icon="fas fa-gavel" class="mr-2 text-orange-600" />
                      Obrigações Legais
                    </h4>
                    <ul class="text-sm text-orange-700 space-y-1">
                      <li>• Cumprimento da legislação</li>
                      <li>• Emissão de notas fiscais</li>
                      <li>• Relatórios contábeis</li>
                      <li>• Atendimento a órgãos públicos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 4 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-share-alt" class="mr-3 text-primary-600" />
                4. Compartilhamento de Dados
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  A 3W Online não vende, aluga ou comercializa seus dados pessoais. 
                  Compartilhamos informações apenas nas seguintes situações:
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Prestadores de serviços:</strong> Empresas que nos auxiliam na prestação de serviços (hospedagem, pagamento, etc.)</li>
                  <li><strong>Obrigações legais:</strong> Quando exigido por lei ou ordem judicial</li>
                  <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
                  <li><strong>Consentimento:</strong> Quando você autoriza expressamente o compartilhamento</li>
                </ul>
              </div>
            </div>

            <!-- Section 5 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-lock" class="mr-3 text-primary-600" />
                5. Segurança dos Dados
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Implementamos medidas técnicas e organizacionais adequadas para proteger 
                  seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                
                <div class="grid md:grid-cols-3 gap-4 my-8">
                  <div class="text-center p-6 bg-red-50 rounded-xl">
                    <font-awesome-icon icon="fas fa-server" class="text-3xl text-red-600 mb-3" />
                    <h4 class="font-bold text-red-800 mb-2">Infraestrutura Segura</h4>
                    <p class="text-sm text-red-700">Servidores protegidos e criptografia de dados</p>
                  </div>
                  
                  <div class="text-center p-6 bg-blue-50 rounded-xl">
                    <font-awesome-icon icon="fas fa-key" class="text-3xl text-blue-600 mb-3" />
                    <h4 class="font-bold text-blue-800 mb-2">Controle de Acesso</h4>
                    <p class="text-sm text-blue-700">Acesso restrito apenas a funcionários autorizados</p>
                  </div>
                  
                  <div class="text-center p-6 bg-green-50 rounded-xl">
                    <font-awesome-icon icon="fas fa-graduation-cap" class="text-3xl text-green-600 mb-3" />
                    <h4 class="font-bold text-green-800 mb-2">Treinamento</h4>
                    <p class="text-sm text-green-700">Equipe treinada em proteção de dados</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 6 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-user-check" class="mr-3 text-primary-600" />
                6. Seus Direitos (LGPD)
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:</p>
                
                <div class="grid md:grid-cols-2 gap-6 my-8">
                  <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h4 class="font-bold text-blue-800 mb-4 flex items-center">
                      <font-awesome-icon icon="fas fa-eye" class="mr-2 text-blue-600" />
                      Transparência e Acesso
                    </h4>
                    <ul class="text-sm text-blue-700 space-y-2">
                      <li>• Confirmar a existência de tratamento</li>
                      <li>• Acessar seus dados</li>
                      <li>• Obter informações sobre o tratamento</li>
                    </ul>
                  </div>

                  <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h4 class="font-bold text-green-800 mb-4 flex items-center">
                      <font-awesome-icon icon="fas fa-edit" class="mr-2 text-green-600" />
                      Correção e Atualização
                    </h4>
                    <ul class="text-sm text-green-700 space-y-2">
                      <li>• Corrigir dados incompletos</li>
                      <li>• Atualizar dados desatualizados</li>
                      <li>• Anonimizar dados desnecessários</li>
                    </ul>
                  </div>

                  <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                    <h4 class="font-bold text-red-800 mb-4 flex items-center">
                      <font-awesome-icon icon="fas fa-trash" class="mr-2 text-red-600" />
                      Eliminação e Portabilidade
                    </h4>
                    <ul class="text-sm text-red-700 space-y-2">
                      <li>• Eliminar dados desnecessários</li>
                      <li>• Portabilidade de dados</li>
                      <li>• Revogar consentimento</li>
                    </ul>
                  </div>

                  <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h4 class="font-bold text-purple-800 mb-4 flex items-center">
                      <font-awesome-icon icon="fas fa-ban" class="mr-2 text-purple-600" />
                      Oposição e Limitação
                    </h4>
                    <ul class="text-sm text-purple-700 space-y-2">
                      <li>• Opor-se ao tratamento</li>
                      <li>• Informações sobre compartilhamento</li>
                      <li>• Revisão de decisões automatizadas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 7 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-cookie-bite" class="mr-3 text-primary-600" />
                7. Cookies e Tecnologias Similares
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência 
                  em nosso website e personalizar o conteúdo oferecido.
                </p>
                
                <div class="bg-yellow-50 rounded-xl p-6 my-6">
                  <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
                    <font-awesome-icon icon="fas fa-cog" class="mr-2 text-yellow-600" />
                    Tipos de Cookies Utilizados
                  </h4>
                  <ul class="text-sm text-yellow-700 space-y-2">
                    <li><strong>Essenciais:</strong> Necessários para o funcionamento do site</li>
                    <li><strong>Performance:</strong> Para analisar o desempenho e uso do site</li>
                    <li><strong>Funcionais:</strong> Para lembrar suas preferências</li>
                    <li><strong>Marketing:</strong> Para personalizar anúncios (com consentimento)</li>
                  </ul>
                </div>

                <p>
                  Você pode gerenciar suas preferências de cookies através das configurações 
                  do seu navegador.
                </p>
              </div>
            </div>

            <!-- Section 8 -->
            <div class="border-l-4 border-primary-500 pl-8">
              <h2 class="text-3xl font-bold text-secondary-800 mb-6 flex items-center">
                <font-awesome-icon icon="fas fa-clock" class="mr-3 text-primary-600" />
                8. Retenção de Dados
              </h2>
              <div class="prose prose-lg text-secondary-700 leading-relaxed space-y-4">
                <p>
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir 
                  as finalidades para as quais foram coletados, respeitando os prazos legais aplicáveis:
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Dados contratuais:</strong> Durante a vigência do contrato + 5 anos</li>
                  <li><strong>Dados fiscais:</strong> 5 anos conforme legislação tributária</li>
                  <li><strong>Dados de marketing:</strong> Até a revogação do consentimento</li>
                  <li><strong>Dados de navegação:</strong> 6 meses após a coleta</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-secondary-800 mb-4">
                <font-awesome-icon icon="fas fa-headset" class="mr-3 text-primary-600" />
                Exercer Seus Direitos ou Tirar Dúvidas
              </h3>
              <p class="text-secondary-600 mb-6">
                Entre em contato conosco para exercer seus direitos LGPD ou esclarecer dúvidas sobre nossa política de privacidade.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a 
                  href="mailto:privacidade@3wonline.com.br" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <font-awesome-icon icon="fas fa-envelope" class="mr-2" />
                  privacidade@3wonline.com.br
                </a>
                <NuxtLink 
                  to="/contato" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <font-awesome-icon icon="fas fa-phone" class="mr-2" />
                  Formulário de Contato
                </NuxtLink>
              </div>
              <div class="text-sm text-secondary-500">
                <font-awesome-icon icon="fas fa-shield-alt" class="mr-2" />
                Encarregado de Dados (DPO): privacidade@3wonline.com.br
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
  title: 'Política de Privacidade - 3W Online',
  titleTemplate: '%s | LGPD Compliance',
  meta: [
    { 
      name: 'description', 
      content: 'Política de Privacidade da 3W Online em conformidade com a LGPD. Saiba como protegemos e tratamos seus dados pessoais com transparência e segurança.' 
    },
    { 
      name: 'keywords', 
      content: 'política de privacidade, LGPD, proteção de dados, 3w online, tratamento de dados pessoais, direitos do titular' 
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    
    // Open Graph
    { property: 'og:title', content: 'Política de Privacidade - 3W Online | LGPD Compliance' },
    { property: 'og:description', content: 'Conheça nossa política de privacidade em conformidade com a LGPD. Transparência total sobre o tratamento dos seus dados pessoais.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/politica-privacidade' },
    
    // Twitter
    { name: 'twitter:title', content: 'Política de Privacidade - 3W Online | LGPD' },
    { name: 'twitter:description', content: 'Política de privacidade completa e transparente em conformidade com a LGPD.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/politica-privacidade' }
  ]
})

// Structured data para SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Política de Privacidade - 3W Online',
  description: 'Política de Privacidade da 3W Online em conformidade com a LGPD',
  url: 'https://www.3wonline.com.br/politica-privacidade',
  dateModified: '2024-01-15',
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

/* Accessibility improvements */
.focus\:ring-2:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
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
  
  .bg-gradient-to-r {
    background: #f3f4f6 !important;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .prose strong {
    color: #f9fafb;
  }
}
</style>
