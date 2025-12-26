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
            <font-awesome-icon icon="fas fa-tools" class="mr-2" />
            Ferramentas Essenciais
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ferramentas <span class="text-primary-200">Digitais</span>
            <span class="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent block">
              para seu negócio
            </span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Acesse as melhores ferramentas digitais selecionadas pela 3W Online para 
            impulsionar seu negócio e otimizar seus processos.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-large"
            >
              <font-awesome-icon icon="fas fa-headset" class="mr-3 group-hover:animate-pulse" />
              Precisa de Ajuda?
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Vi a página de ferramentas da 3W Online e gostaria de saber mais sobre como implementá-las no meu negócio." 
              textButton="Consultoria sobre Ferramentas"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Categories -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-3xl lg:text-5xl font-bold text-secondary-800 mb-6">
            Categorias de 
            <span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Ferramentas
            </span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Organizamos as ferramentas por categoria para facilitar sua busca. 
            Todas foram testadas e são recomendadas pela nossa equipe.
          </p>
        </div>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mb-12">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <font-awesome-icon icon="fas fa-search" class="text-gray-400" />
            </div>
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Buscar ferramentas por nome, descrição ou recurso..."
              class="w-full pl-12 pr-12 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white shadow-soft transition-all duration-300 placeholder-gray-400"
            />
            <button
              v-if="searchTerm"
              @click="clearSearch"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Limpar pesquisa"
            >
              <font-awesome-icon icon="fas fa-times" />
            </button>
          </div>
          
          <!-- Search Results Info -->
          <div v-if="searchTerm.trim()" class="mt-3 text-center">
            <p class="text-sm text-secondary-600">
              <span v-if="filteredTools.length > 0">
                Encontrado{{ filteredTools.length === 1 ? '' : 's' }} 
                <strong>{{ filteredTools.length }}</strong> 
                ferramenta{{ filteredTools.length === 1 ? '' : 's' }} 
                para "<strong>{{ searchTerm }}</strong>"
              </span>
              <span v-else class="text-gray-500">
                Nenhuma ferramenta encontrada para "<strong>{{ searchTerm }}</strong>"
              </span>
            </p>
          </div>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="[
              'px-6 py-3 rounded-full font-semibold transition-all duration-300',
              activeCategory === category.id 
                ? 'bg-primary-600 text-white shadow-lg' 
                : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
            ]"
          >
            <font-awesome-icon :icon="category.icon" class="mr-2" />
            {{ category.name }}
          </button>
        </div>

        <!-- Tools Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="tool in filteredTools"
            :key="tool.id"
            class="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
          >
            <!-- Tool Header -->
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-4">
                <div 
                  class="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  :class="tool.colorClass"
                >
                  <font-awesome-icon :icon="tool.icon" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary-800">{{ tool.name }}</h3>
                  <p class="text-sm text-secondary-500">{{ tool.category }}</p>
                </div>
              </div>
              
              <!-- Price Badge -->
              <div 
                :class="[
                  'px-3 py-1 rounded-full text-xs font-semibold',
                  tool.price === 'Gratuito' 
                    ? 'bg-green-100 text-green-700' 
                    : tool.price === 'Freemium'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-orange-100 text-orange-700'
                ]"
              >
                {{ tool.price }}
              </div>
            </div>

            <!-- Tool Description -->
            <p class="text-secondary-600 leading-relaxed mb-6">
              {{ tool.description }}
            </p>

            <!-- Tool Features -->
            <div class="mb-6">
              <h4 class="font-semibold text-secondary-800 mb-3">Principais recursos:</h4>
              <ul class="space-y-2">
                <li 
                  v-for="feature in tool.features" 
                  :key="feature"
                  class="flex items-center text-sm text-secondary-600"
                >
                  <font-awesome-icon icon="fas fa-check" class="text-success-500 mr-2 text-xs" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Tool Actions -->
            <div class="space-y-3">
              <a 
                :href="tool.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300"
                @click="trackToolClick(tool.name, tool.category)"
              >
                <font-awesome-icon icon="fas fa-external-link-alt" class="mr-2" />
                Acessar Ferramenta
              </a>
              
              <button 
                @click="shareTool(tool)"
                class="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-secondary-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                <font-awesome-icon icon="fas fa-share-alt" class="mr-2" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredTools.length === 0" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <font-awesome-icon icon="fas fa-search" class="text-3xl text-gray-400" />
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 mb-4">
              {{ searchTerm.trim() ? 'Nenhuma ferramenta encontrada' : 'Nenhuma ferramenta disponível' }}
            </h3>
            <p class="text-secondary-600 mb-6">
              <span v-if="searchTerm.trim()">
                Não encontramos ferramentas que correspondam à sua pesquisa "<strong>{{ searchTerm }}</strong>".
                <br>Tente usar termos diferentes ou explore outras categorias.
              </span>
              <span v-else>
                Não há ferramentas disponíveis nesta categoria no momento.
              </span>
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                v-if="searchTerm.trim()"
                @click="clearSearch"
                class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300"
              >
                <font-awesome-icon icon="fas fa-times" class="mr-2" />
                Limpar Pesquisa
              </button>
              <button
                @click="selectCategory('all')"
                class="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-secondary-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                <font-awesome-icon icon="fas fa-th-large" class="mr-2" />
                Ver Todas as Ferramentas
              </button>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreTools && !searchTerm.trim()">
          <button 
            @click="loadMoreTools"
            class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white font-semibold rounded-2xl hover:from-secondary-700 hover:to-secondary-600 transform hover:scale-105 transition-all duration-300 shadow-large"
          >
            <font-awesome-icon icon="fas fa-plus" class="mr-3" />
            Carregar Mais Ferramentas
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Tools Section -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
            Ferramentas <span class="text-primary-600">Recomendadas</span>
          </h2>
          <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
            Nossas ferramentas favoritas que utilizamos diariamente na 3W Online
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="featured in featuredTools"
            :key="featured.id"
            class="bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
          >
            <div class="flex items-center space-x-4 mb-6">
              <div 
                class="w-20 h-20 rounded-3xl flex items-center justify-center"
                :class="featured.colorClass"
              >
                <font-awesome-icon :icon="featured.icon" class="text-3xl text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-secondary-800">{{ featured.name }}</h3>
                <p class="text-primary-600 font-medium">⭐ Recomendação 3W Online</p>
              </div>
            </div>
            
            <p class="text-lg text-secondary-600 leading-relaxed mb-6">
              {{ featured.description }}
            </p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-secondary-800 mb-3">Por que recomendamos:</h4>
              <ul class="space-y-2">
                <li 
                  v-for="reason in featured.reasons" 
                  :key="reason"
                  class="flex items-start text-secondary-600"
                >
                  <font-awesome-icon icon="fas fa-star" class="text-accent-500 mr-2 mt-1 text-sm" />
                  {{ reason }}
                </li>
              </ul>
            </div>
            
            <a 
              :href="featured.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold rounded-2xl hover:from-accent-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-large"
            >
              <font-awesome-icon icon="fas fa-crown" class="mr-3" />
              Experimentar Agora
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Help Section -->
    <section class="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 mb-8">
            <font-awesome-icon icon="fas fa-question-circle" class="mr-2" />
            Precisa de Ajuda?
          </div>
          
          <h2 class="text-3xl lg:text-5xl font-bold mb-6">
            Não sabe qual ferramenta <span class="text-primary-200">escolher?</span>
          </h2>
          
          <p class="text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            Nossa equipe pode ajudar você a escolher e implementar as ferramentas certas 
            para seu negócio. Consultoria gratuita disponível!
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NuxtLink 
              to="/contato" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-large"
            >
              <font-awesome-icon icon="fas fa-calendar" class="mr-3 group-hover:animate-pulse" />
              Agendar Consultoria
            </NuxtLink>
            
            <BtnWhatsApp 
              msg="Olá! Preciso de ajuda para escolher as melhores ferramentas digitais para meu negócio. Podem me ajudar?" 
              textButton="Ajuda via WhatsApp"
            />
          </div>

          <p class="text-sm text-primary-200 italic">
            💡 Implementação e treinamento inclusos na nossa consultoria
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BtnWhatsApp from '~/components/site/BtnWhatsApp.vue'
import { useGoogleAnalytics } from '~/composables/useGoogleAnalytics'

const { trackPage, trackBusinessEvent } = useGoogleAnalytics()

// Reactive state
const activeCategory = ref('all')
const visibleToolsCount = ref(9)
const searchTerm = ref('')

// Categories data
const categories = ref([
  { id: 'all', name: 'Todas', icon: 'fas fa-th-large' },
  { id: 'design', name: 'Design', icon: 'fas fa-paint-brush' },
  { id: 'development', name: 'Desenvolvimento', icon: 'fas fa-code' },
  { id: 'marketing', name: 'Marketing', icon: 'fas fa-bullhorn' },
  { id: 'analytics', name: 'Analytics', icon: 'fas fa-chart-bar' },
  { id: 'productivity', name: 'Produtividade', icon: 'fas fa-tasks' },
  { id: 'communication', name: 'Comunicação', icon: 'fas fa-comments' },
  { id: 'ecommerce', name: 'E-commerce', icon: 'fas fa-shopping-cart' }
])

// Tools data
const tools = ref([
  // Design Tools
  {
    id: 1,
    name: 'Figma',
    category: 'Design',
    categoryId: 'design',
    description: 'Ferramenta colaborativa de design de interface para criar protótipos, wireframes e designs de alta fidelidade.',
    features: ['Design colaborativo em tempo real', 'Prototipagem interativa', 'Sistema de componentes', 'Plugins extensivos'],
    price: 'Freemium',
    url: 'https://www.figma.com',
    icon: 'fas fa-pencil-ruler',
    colorClass: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Canva',
    category: 'Design',
    categoryId: 'design', 
    description: 'Plataforma de design gráfico fácil de usar para criar posts, banners, apresentações e muito mais.',
    features: ['Templates prontos', 'Banco de imagens gratuitas', 'Editor intuitivo', 'Colaboração em equipe'],
    price: 'Freemium',
    url: 'https://www.canva.com',
    icon: 'fas fa-palette',
    colorClass: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  
  // Development Tools
  {
    id: 3,
    name: 'GitHub',
    category: 'Desenvolvimento',
    categoryId: 'development',
    description: 'Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando Git.',
    features: ['Controle de versão Git', 'Colaboração em código', 'CI/CD integrado', 'Issues e projetos'],
    price: 'Freemium',
    url: 'https://github.com',
    icon: 'fab fa-github',
    colorClass: 'bg-gradient-to-br from-gray-800 to-gray-900'
  },
  {
    id: 4,
    name: 'VS Code',
    category: 'Desenvolvimento',
    categoryId: 'development',
    description: 'Editor de código-fonte leve mas poderoso com suporte para debugging, Git e extensões.',
    features: ['IntelliSense', 'Debugging integrado', 'Git integrado', 'Extensões abundantes'],
    price: 'Gratuito',
    url: 'https://code.visualstudio.com',
    icon: 'fas fa-code',
    colorClass: 'bg-gradient-to-br from-blue-600 to-blue-700'
  },

  // Marketing Tools
  {
    id: 5,
    name: 'Mailchimp',
    category: 'Marketing',
    categoryId: 'marketing',
    description: 'Plataforma de email marketing com automação, segmentação e análise de campanhas.',
    features: ['Email marketing', 'Automação', 'Segmentação avançada', 'Analytics detalhado'],
    price: 'Freemium',
    url: 'https://mailchimp.com',
    icon: 'fas fa-envelope',
    colorClass: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    name: 'Hootsuite',
    category: 'Marketing',
    categoryId: 'marketing',
    description: 'Ferramenta de gerenciamento de redes sociais para agendar posts e monitorar engajamento.',
    features: ['Agendamento de posts', 'Múltiplas redes sociais', 'Analytics social', 'Colaboração em equipe'],
    price: 'Pago',
    url: 'https://hootsuite.com',
    icon: 'fas fa-share-alt',
    colorClass: 'bg-gradient-to-br from-indigo-500 to-purple-600'
  },

  // Analytics Tools
  {
    id: 7,
    name: 'Google Analytics',
    category: 'Analytics',
    categoryId: 'analytics',
    description: 'Ferramenta gratuita do Google para análise de tráfego de sites e comportamento de usuários.',
    features: ['Análise de tráfego', 'Comportamento do usuário', 'Conversões', 'Relatórios customizados'],
    price: 'Gratuito',
    url: 'https://analytics.google.com',
    icon: 'fas fa-chart-line',
    colorClass: 'bg-gradient-to-br from-green-500 to-blue-500'
  },
  {
    id: 8,
    name: 'Hotjar',
    category: 'Analytics',
    categoryId: 'analytics',
    description: 'Ferramenta de análise de comportamento com heatmaps, gravações de sessão e feedback.',
    features: ['Heatmaps', 'Gravações de sessão', 'Feedback dos usuários', 'Funis de conversão'],
    price: 'Freemium',
    url: 'https://www.hotjar.com',
    icon: 'fas fa-fire',
    colorClass: 'bg-gradient-to-br from-red-500 to-pink-500'
  },

  // Productivity Tools
  {
    id: 9,
    name: 'Notion',
    category: 'Produtividade',
    categoryId: 'productivity',
    description: 'Workspace tudo-em-um para notas, tarefas, wikis e colaboração em equipe.',
    features: ['Páginas flexíveis', 'Banco de dados', 'Templates', 'Colaboração'],
    price: 'Freemium',
    url: 'https://www.notion.so',
    icon: 'fas fa-sticky-note',
    colorClass: 'bg-gradient-to-br from-gray-700 to-gray-800'
  },
  {
    id: 10,
    name: 'Trello',
    category: 'Produtividade',
    categoryId: 'productivity',
    description: 'Ferramenta de gerenciamento de projetos baseada em quadros Kanban.',
    features: ['Quadros Kanban', 'Cards e listas', 'Colaboração visual', 'Integrações'],
    price: 'Freemium',
    url: 'https://trello.com',
    icon: 'fas fa-columns',
    colorClass: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },

  // Communication Tools
  {
    id: 11,
    name: 'Slack',
    category: 'Comunicação',
    categoryId: 'communication',
    description: 'Plataforma de comunicação empresarial com canais, mensagens diretas e integrações.',
    features: ['Canais organizados', 'Mensagens diretas', 'Integrações', 'Chamadas de vídeo'],
    price: 'Freemium',
    url: 'https://slack.com',
    icon: 'fab fa-slack',
    colorClass: 'bg-gradient-to-br from-purple-600 to-pink-600'
  },

  // E-commerce Tools
  {
    id: 12,
    name: 'Shopify',
    category: 'E-commerce',
    categoryId: 'ecommerce',
    description: 'Plataforma completa para criar e gerenciar lojas online com facilidade.',
    features: ['Loja online completa', 'Pagamentos integrados', 'Gestão de estoque', 'Apps e temas'],
    price: 'Pago',
    url: 'https://www.shopify.com',
    icon: 'fas fa-store',
    colorClass: 'bg-gradient-to-br from-green-600 to-blue-600'
  }
])

// Featured tools
const featuredTools = ref([
  {
    id: 'featured-1',
    name: 'Figma',
    description: 'Nossa ferramenta principal para design de interfaces. Usamos diariamente para criar todos os protótipos e designs dos nossos projetos.',
    reasons: [
      'Colaboração em tempo real com clientes',
      'Biblioteca de componentes reutilizáveis',
      'Prototipagem interativa avançada',
      'Integração perfeita com desenvolvimento'
    ],
    url: 'https://www.figma.com',
    icon: 'fas fa-pencil-ruler',
    colorClass: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    id: 'featured-2',
    name: 'Google Analytics',
    description: 'Indispensável para medir o sucesso de qualquer projeto digital. Usamos para otimizar continuamente os resultados dos nossos clientes.',
    reasons: [
      'Dados precisos de comportamento',
      'Métricas de conversão detalhadas',
      'Relatórios customizados',
      'Integração com outras ferramentas Google'
    ],
    url: 'https://analytics.google.com',
    icon: 'fas fa-chart-line',
    colorClass: 'bg-gradient-to-br from-green-500 to-blue-500'
  }
])

// Computed properties
const filteredTools = computed(() => {
  let filtered = activeCategory.value === 'all' 
    ? tools.value 
    : tools.value.filter(tool => tool.categoryId === activeCategory.value)
  
  // Apply search filter if there's a search term
  if (searchTerm.value.trim()) {
    const search = searchTerm.value.toLowerCase().trim()
    filtered = filtered.filter(tool => 
      tool.name.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.features.some(feature => feature.toLowerCase().includes(search))
    )
    // When searching, show all results
    return filtered
  }
  
  return filtered.slice(0, visibleToolsCount.value)
})

const hasMoreTools = computed(() => {
  let filtered = activeCategory.value === 'all' 
    ? tools.value 
    : tools.value.filter(tool => tool.categoryId === activeCategory.value)
  
  // Apply search filter if there's a search term
  if (searchTerm.value.trim()) {
    const search = searchTerm.value.toLowerCase().trim()
    filtered = filtered.filter(tool => 
      tool.name.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.features.some(feature => feature.toLowerCase().includes(search))
    )
  }
  
  return visibleToolsCount.value < filtered.length
})

// Methods
const selectCategory = (categoryId: string) => {
  activeCategory.value = categoryId
  visibleToolsCount.value = 9
  // Don't clear search term to allow searching within category
}

const clearSearch = () => {
  searchTerm.value = ''
  visibleToolsCount.value = 9
}

const loadMoreTools = () => {
  visibleToolsCount.value += 6
  trackBusinessEvent.serviceInterest('Tools Page', 'view')
}

const trackToolClick = (toolName: string, category: string) => {
  trackBusinessEvent.serviceInterest(`Tool: ${toolName}`, 'click')
  trackBusinessEvent.serviceInterest(category, 'view')
}

const shareTool = async (tool: any) => {
  const shareData = {
    title: `${tool.name} - Ferramenta Recomendada pela 3W Online`,
    text: tool.description,
    url: tool.url
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
      trackBusinessEvent.serviceInterest(`Tool: ${tool.name}`, 'click')
    } else {
      // Fallback para copiar para clipboard
      await navigator.clipboard.writeText(`${tool.name}: ${tool.url}`)
      alert('Link copiado para a área de transferência!')
      trackBusinessEvent.serviceInterest(`Tool: ${tool.name}`, 'click')
    }
  } catch (error) {
    console.error('Erro ao compartilhar:', error)
  }
}

// Lifecycle
onMounted(() => {
  trackPage('Tools Page', {
    page_category: 'resources',
    tools_count: tools.value.length
  })
})

// Meta configuration
definePageMeta({
  layout: 'site'
})

useHead({
  title: 'Ferramentas Digitais - Links e Recursos',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { 
      name: 'description', 
      content: 'Acesse as melhores ferramentas digitais selecionadas pela 3W Online. Design, desenvolvimento, marketing, analytics e muito mais. Links diretos e gratuitos.' 
    },
    { 
      name: 'keywords', 
      content: 'ferramentas digitais, design, desenvolvimento, marketing digital, analytics, produtividade, figma, google analytics, github, canva' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:title', content: 'Ferramentas Digitais - 3W Online' },
    { property: 'og:description', content: 'Acesse as melhores ferramentas digitais selecionadas pelos especialistas da 3W Online para impulsionar seu negócio.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.3wonline.com.br/ferramentas' },
    
    // Twitter
    { name: 'twitter:title', content: 'Ferramentas Digitais - 3W Online' },
    { name: 'twitter:description', content: 'Descubra as melhores ferramentas digitais para design, desenvolvimento, marketing e muito mais.' }
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

/* Smooth transitions for filter buttons */
.transition-all {
  transition: all 0.3s ease;
}

/* Custom scrollbar for tools grid */
.tools-grid {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f7fafc;
}

.tools-grid::-webkit-scrollbar {
  width: 6px;
}

.tools-grid::-webkit-scrollbar-track {
  background: #f7fafc;
  border-radius: 3px;
}

.tools-grid::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.tools-grid::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
