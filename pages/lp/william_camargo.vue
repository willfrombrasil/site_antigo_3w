<template>
  <div class="bg-gray-900 text-white">
    <!-- Header/Navigation -->
    <header class="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">WC</span>
            </div>
            <span class="text-xl font-bold">William Camargo</span>
          </div>
          
          <!-- Desktop Menu -->
          <ul class="hidden md:flex space-x-8">
            <li><a href="#about" class="hover:text-blue-400 transition-colors">Sobre</a></li>
            <li><a href="#skills" class="hover:text-blue-400 transition-colors">Habilidades</a></li>
            <li><a href="#portfolio" class="hover:text-blue-400 transition-colors">Portfólio</a></li>
            <li><a href="#experience" class="hover:text-blue-400 transition-colors">Experiência</a></li>
            <li><a href="#contact" class="hover:text-blue-400 transition-colors">Contato</a></li>
          </ul>
          
          <!-- CTA Button -->
          <a href="https://wa.me/5541996924829?text=Olá William! Vi seu portfólio e gostaria de conversar sobre um projeto." 
             target="_blank"
             class="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-medium">
            Contratar
          </a>
          
          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="md:hidden">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4">
          <ul class="space-y-2">
            <li><a href="#about" @click="closeMobileMenu" class="block py-2 hover:text-blue-400">Sobre</a></li>
            <li><a href="#skills" @click="closeMobileMenu" class="block py-2 hover:text-blue-400">Habilidades</a></li>
            <li><a href="#portfolio" @click="closeMobileMenu" class="block py-2 hover:text-blue-400">Portfólio</a></li>
            <li><a href="#experience" @click="closeMobileMenu" class="block py-2 hover:text-blue-400">Experiência</a></li>
            <li><a href="#contact" @click="closeMobileMenu" class="block py-2 hover:text-blue-400">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Profile Image -->
          <div class="mb-8">
            <div class="w-40 h-40 mx-auto relative">
              <div class="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                <div class="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-4xl font-bold text-blue-400">
                  WC
                </div>
              </div>
              <div class="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <i class="fas fa-check text-white text-lg"></i>
              </div>
            </div>
          </div>
          
          <!-- Hero Content -->
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            William Camargo
          </h1>
          <p class="text-xl md:text-2xl text-blue-300 mb-4 font-medium">
            Desenvolvedor Full Stack & Arquiteto de Soluções
          </p>
          <p class="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Especialista em criar sites e sistemas que <span class="text-blue-400 font-semibold">transformam negócios</span>. 
            Com mais de 8 anos de experiência, desenvolvo soluções que geram resultados reais.
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-400">300+</div>
              <div class="text-gray-400">Projetos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-400">8+</div>
              <div class="text-gray-400">Anos Exp.</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-400">98%</div>
              <div class="text-gray-400">Satisfação</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-400">24h</div>
              <div class="text-gray-400">Resposta</div>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" 
               class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Ver Portfólio
            </a>
            <a href="https://wa.me/5541996924829?text=Olá William! Gostaria de discutir um projeto." 
               target="_blank"
               class="bg-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105">
              <i class="fab fa-whatsapp mr-2"></i>
              Contratar Agora
            </a>
          </div>
          
          <!-- Social Links -->
          <div class="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/williamcamargo" target="_blank" class="text-gray-400 hover:text-white text-2xl transition-colors">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/williamcamargo" target="_blank" class="text-gray-400 hover:text-blue-400 text-2xl transition-colors">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:william@3wonline.com.br" class="text-gray-400 hover:text-red-400 text-2xl transition-colors">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-blue-400">Minha Jornada</h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Há mais de 8 anos me dedico ao desenvolvimento de soluções digitais que fazem a diferença. 
                Comecei criando sites simples e hoje arquiteto sistemas complexos que automatizam processos 
                e geram milhões em ROI para meus clientes.
              </p>
              <p class="text-gray-300 mb-6 leading-relaxed">
                Minha paixão é transformar ideias em realidade através da tecnologia, sempre focando em 
                resultados mensuráveis e experiências excepcionais para o usuário.
              </p>
              <div class="space-y-4">
                <div class="flex items-center text-green-400">
                  <i class="fas fa-check-circle mr-3"></i>
                  <span>Especialista em desenvolvimento Full Stack</span>
                </div>
                <div class="flex items-center text-green-400">
                  <i class="fas fa-check-circle mr-3"></i>
                  <span>Certificado em metodologias ágeis</span>
                </div>
                <div class="flex items-center text-green-400">
                  <i class="fas fa-check-circle mr-3"></i>
                  <span>Foco em performance e escalabilidade</span>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl">
                <h4 class="text-xl font-semibold mb-4">Especialidades</h4>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div class="bg-white/10 p-3 rounded-lg">
                    <i class="fas fa-code text-blue-300 mb-2 text-lg block"></i>
                    Frontend
                  </div>
                  <div class="bg-white/10 p-3 rounded-lg">
                    <i class="fas fa-server text-purple-300 mb-2 text-lg block"></i>
                    Backend
                  </div>
                  <div class="bg-white/10 p-3 rounded-lg">
                    <i class="fas fa-database text-green-300 mb-2 text-lg block"></i>
                    Database
                  </div>
                  <div class="bg-white/10 p-3 rounded-lg">
                    <i class="fas fa-cloud text-yellow-300 mb-2 text-lg block"></i>
                    Cloud
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Frontend -->
            <div class="bg-gray-800 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-6 text-blue-400">Frontend</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span>Vue.js / Nuxt.js</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>React / Next.js</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>TypeScript</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 88%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>Tailwind CSS</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 92%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend -->
            <div class="bg-gray-800 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-6 text-purple-400">Backend</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span>Node.js / Express</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-purple-500 h-2 rounded-full" style="width: 93%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>PHP / Laravel</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-purple-500 h-2 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>Python / Django</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-purple-500 h-2 rounded-full" style="width: 85%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>API REST / GraphQL</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-purple-500 h-2 rounded-full" style="width: 88%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- DevOps & Tools -->
            <div class="bg-gray-800 p-6 rounded-xl">
              <h3 class="text-xl font-semibold mb-6 text-green-400">DevOps & Tools</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span>AWS / Cloud</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 87%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>Docker / K8s</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 80%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>Git / GitHub</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span>CI/CD Pipelines</span>
                  <div class="w-24 bg-gray-700 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 83%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-12">Portfólio de Projetos</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <i class="fas fa-shopping-cart text-4xl text-white"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">E-commerce Premium</h3>
                <p class="text-gray-400 mb-4">Loja virtual completa com pagamentos integrados e gestão avançada de estoque.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600 text-xs px-2 py-1 rounded">Vue.js</span>
                  <span class="bg-purple-600 text-xs px-2 py-1 rounded">Node.js</span>
                  <span class="bg-green-600 text-xs px-2 py-1 rounded">MongoDB</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-400 font-semibold">+250% vendas</span>
                  <a href="#" class="text-blue-400 hover:text-blue-300">Ver projeto →</a>
                </div>
              </div>
            </div>

            <!-- Project 2 -->
            <div class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <div class="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <i class="fas fa-cogs text-4xl text-white"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">Sistema de Gestão</h3>
                <p class="text-gray-400 mb-4">ERP personalizado que automatizou 90% dos processos manuais da empresa.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600 text-xs px-2 py-1 rounded">React</span>
                  <span class="bg-purple-600 text-xs px-2 py-1 rounded">Laravel</span>
                  <span class="bg-green-600 text-xs px-2 py-1 rounded">MySQL</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-400 font-semibold">-70% custos</span>
                  <a href="#" class="text-blue-400 hover:text-blue-300">Ver projeto →</a>
                </div>
              </div>
            </div>

            <!-- Project 3 -->
            <div class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <i class="fas fa-mobile-alt text-4xl text-white"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">App Mobile</h3>
                <p class="text-gray-400 mb-4">Aplicativo de delivery com mais de 10k downloads e avaliação 4.8 estrelas.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600 text-xs px-2 py-1 rounded">React Native</span>
                  <span class="bg-purple-600 text-xs px-2 py-1 rounded">Firebase</span>
                  <span class="bg-green-600 text-xs px-2 py-1 rounded">AWS</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-400 font-semibold">10k+ downloads</span>
                  <a href="#" class="text-blue-400 hover:text-blue-300">Ver projeto →</a>
                </div>
              </div>
            </div>

            <!-- Project 4 -->
            <div class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <div class="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <i class="fas fa-chart-line text-4xl text-white"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">Dashboard Analytics</h3>
                <p class="text-gray-400 mb-4">Painel de controle em tempo real com BI integrado para tomada de decisões.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600 text-xs px-2 py-1 rounded">Next.js</span>
                  <span class="bg-purple-600 text-xs px-2 py-1 rounded">Python</span>
                  <span class="bg-green-600 text-xs px-2 py-1 rounded">PostgreSQL</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-400 font-semibold">+400% eficiência</span>
                  <a href="#" class="text-blue-400 hover:text-blue-300">Ver projeto →</a>
                </div>
              </div>
            </div>

            <!-- Project 5 -->
            <div class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <div class="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <i class="fas fa-globe text-4xl text-white"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">Site Institucional</h3>
                <p class="text-gray-400 mb-4">Landing page de alta conversão que aumentou leads qualificados em 300%.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600 text-xs px-2 py-1 rounded">Nuxt.js</span>
                  <span class="bg-purple-600 text-xs px-2 py-1 rounded">Tailwind</span>
                  <span class="bg-green-600 text-xs px-2 py-1 rounded">Vercel</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-400 font-semibold">+300% leads</span>
                  <a href="#" class="text-blue-400 hover:text-blue-300">Ver projeto →</a>
                </div>
              </div>
            </div>

            <!-- Project 6 -->
            <div class="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <div class="h-48 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <i class="fas fa-rocket text-4xl text-white"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">SaaS Platform</h3>
                <p class="text-gray-400 mb-4">Plataforma SaaS multi-tenant com mais de 1000 usuários ativos mensais.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600 text-xs px-2 py-1 rounded">Vue.js</span>
                  <span class="bg-purple-600 text-xs px-2 py-1 rounded">Django</span>
                  <span class="bg-green-600 text-xs px-2 py-1 rounded">Redis</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-400 font-semibold">1k+ usuários</span>
                  <a href="#" class="text-blue-400 hover:text-blue-300">Ver projeto →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <p class="text-xl text-blue-100 mb-12">
            Transforme sua ideia em realidade. Entre em contato e vamos criar algo incrível!
          </p>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <!-- WhatsApp -->
            <a href="https://wa.me/5541996924829?text=Olá William! Gostaria de discutir um projeto." 
               target="_blank"
               class="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <i class="fab fa-whatsapp text-4xl text-green-400 mb-4"></i>
              <h3 class="text-lg font-semibold mb-2">WhatsApp</h3>
              <p class="text-blue-100 text-sm">Resposta imediata</p>
              <p class="text-green-400 font-semibold">(41) 99692-4829</p>
            </a>
            
            <!-- Email -->
            <a href="mailto:william@3wonline.com.br" 
               class="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <i class="fas fa-envelope text-4xl text-blue-400 mb-4"></i>
              <h3 class="text-lg font-semibold mb-2">E-mail</h3>
              <p class="text-blue-100 text-sm">Proposta detalhada</p>
              <p class="text-blue-400 font-semibold">william@3wonline.com.br</p>
            </a>
            
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/williamcamargo" 
               target="_blank"
               class="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <i class="fab fa-linkedin text-4xl text-blue-300 mb-4"></i>
              <h3 class="text-lg font-semibold mb-2">LinkedIn</h3>
              <p class="text-blue-100 text-sm">Rede profissional</p>
              <p class="text-blue-300 font-semibold">@williamcamargo</p>
            </a>
          </div>
          
          <!-- Main CTA -->
          <div class="space-y-4">
            <a href="https://wa.me/5541996924829?text=Olá William! Tenho um projeto em mente e gostaria de discutir as possibilidades." 
               target="_blank"
               class="inline-block bg-gradient-to-r from-green-500 to-green-600 px-12 py-4 rounded-lg text-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105">
              <i class="fab fa-whatsapp mr-3"></i>
              Iniciar Conversa
            </a>
            <p class="text-blue-100">
              Resposta garantida em até 2 horas | Orçamento gratuito
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-12 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <div class="flex items-center justify-center space-x-3 mb-6">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">WC</span>
          </div>
          <span class="text-xl font-bold">William Camargo</span>
        </div>
        
        <p class="text-gray-400 mb-6">
          Desenvolvedor Full Stack especializado em soluções que transformam negócios
        </p>
        
        <div class="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/williamcamargo" target="_blank" class="text-gray-400 hover:text-white text-xl">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/williamcamargo" target="_blank" class="text-gray-400 hover:text-blue-400 text-xl">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:william@3wonline.com.br" class="text-gray-400 hover:text-red-400 text-xl">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/5541996924829" target="_blank" class="text-gray-400 hover:text-green-400 text-xl">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        
        <div class="border-t border-gray-800 pt-6 text-gray-500 text-sm">
          <p>&copy; 2025 William Camargo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive data
const mobileMenuOpen = ref(false)

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// SEO Configuration
useHead({
  title: 'William Camargo - Desenvolvedor Full Stack & Arquiteto de Soluções',
  titleTemplate: '%s',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: 'Portfólio de William Camargo, desenvolvedor full stack especializado em criar sites e sistemas que transformam negócios. 8+ anos de experiência, 300+ projetos entregues.' },
    { name: 'keywords', content: 'desenvolvedor full stack, william camargo, portfolio desenvolvedor, sites profissionais, sistemas personalizados, vue.js, react, node.js' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'William Camargo' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: 'William Camargo - Desenvolvedor Full Stack' },
    { property: 'og:description', content: 'Portfólio profissional de William Camargo. Desenvolvedor especializado em soluções que transformam negócios.' },
    { property: 'og:image', content: '/images/william-camargo-og.jpg' },
    { property: 'og:url', content: 'https://3wonline.com.br/lp/william_camargo' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'William Camargo - Desenvolvedor Full Stack' },
    { name: 'twitter:description', content: 'Portfólio profissional e projetos de desenvolvimento web' },
    { name: 'twitter:image', content: '/images/william-camargo-og.jpg' },
    
    // Professional
    { name: 'theme-color', content: '#1e40af' },
    { name: 'msapplication-TileColor', content: '#1e40af' }
  ],
  link: [
    { rel: 'canonical', href: 'https://3wonline.com.br/lp/william_camargo' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "William Camargo",
        "jobTitle": "Desenvolvedor Full Stack & Arquiteto de Soluções",
        "description": "Especialista em desenvolvimento de sites e sistemas que transformam negócios",
        "url": "https://3wonline.com.br/lp/william_camargo",
        "image": "https://3wonline.com.br/images/william-camargo.jpg",
        "email": "william@3wonline.com.br",
        "telephone": "+55-41-99692-4829",
        "sameAs": [
          "https://linkedin.com/in/williamcamargo",
          "https://github.com/williamcamargo"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "3W Online",
          "url": "https://3wonline.com.br"
        },
        "knowsAbout": [
          "Desenvolvimento Web",
          "JavaScript",
          "Vue.js",
          "React",
          "Node.js",
          "PHP",
          "Laravel",
          "Python",
          "DevOps",
          "AWS"
        ]
      })
    }
  ]
})

definePageMeta({
  layout: 'lp'
})

onMounted(() => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})
</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient backgrounds */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
