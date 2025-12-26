<template>
  <div class="bg-white font-sans overflow-x-hidden">
    <!-- Sticky Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div class="container mx-auto flex justify-between items-center px-4 py-3">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-code text-white text-lg"></i>
          </div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">3W Online</h1>
        </div>
        
        <nav class="hidden lg:flex items-center space-x-8">
          <a href="#hero" class="hover:text-indigo-600 transition-colors font-medium">Início</a>
          <a href="#benefits" class="hover:text-indigo-600 transition-colors font-medium">Soluções</a>
          <a href="#pricing" class="hover:text-indigo-600 transition-colors font-medium">Preços</a>
          <a href="#testimonials" class="hover:text-indigo-600 transition-colors font-medium">Cases</a>
          <button @click="trackCtaClick('header_cta')" onclick="window.open('https://wa.me/5541996924829?text=Quero uma consultoria GRATUITA para desenvolvimento de sistemas!', '_blank')" 
            class="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-medium shadow-lg">
            Consultoria Gratuita
          </button>
        </nav>
        
        <button @click="toggleMenu" class="lg:hidden focus:outline-none">
          <i class="fas fa-bars text-gray-700 text-xl"></i>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden pt-20">
      <!-- Animated Background -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Urgency Badge -->
          <div class="text-center mb-8">
            <span class="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full animate-bounce">
              <i class="fas fa-fire mr-2"></i>
              🔥 OFERTA LIMITADA - ÚLTIMAS 48 HORAS
            </span>
          </div>
          
          <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Automatize Seu Negócio com
              <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sistemas Sob Medida
              </span>
            </h1>
            
            <div class="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              <p class="mb-4">⚡ <strong>Elimine tarefas repetitivas</strong> e ganhe até 40 horas por semana</p>
              <p class="mb-4">📊 <strong>Controle total do seu negócio</strong> com relatórios em tempo real</p>
              <p>💰 <strong>ROI comprovado de 500%</strong> em produtividade e eficiência</p>
            </div>
            
            <!-- Social Proof -->
            <div class="flex flex-wrap justify-center items-center space-x-8 mb-10 text-gray-300">
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>+200 sistemas desenvolvidos</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>8+ anos de experiência</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>99.9% de disponibilidade</span>
              </div>
            </div>
            
            <!-- CTA Principal -->
            <div class="space-y-4">
              <button @click="trackCtaClick('hero_main')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Quero uma consultoria GRATUITA para automatizar meu negócio com sistemas sob medida!', '_blank')" 
                class="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
                <i class="fab fa-whatsapp mr-3 text-2xl"></i>
                QUERO AUTOMATIZAR MEU NEGÓCIO AGORA
              </button>
              
              <p class="text-gray-300 text-sm">
                ⚡ Consultoria 100% GRATUITA | 🎁 Análise completa do seu processo | 📞 Sem compromisso
              </p>
            </div>
            
            <!-- Guarantee Badge -->
            <div class="mt-8">
              <div class="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full font-bold">
                <i class="fas fa-shield-alt mr-2"></i>
                GARANTIA DE 6 MESES OU SEU DINHEIRO DE VOLTA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Problems Section -->
    <section class="py-20 bg-red-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-red-600 mb-8">
            ❌ PARE DE PERDER TEMPO COM PROCESSOS MANUAIS!
          </h2>
          <p class="text-xl text-gray-700 mb-12">
            Você está desperdiçando dinheiro e tempo com processos que poderiam ser automatizados?
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 text-left">
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Planilhas Desorganizadas</h3>
                  <p class="text-gray-600">Horas perdidas procurando informações em planilhas confusas, dados duplicados e erros constantes.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Processos Lentos</h3>
                  <p class="text-gray-600">Tarefas que levam horas para serem concluídas, atrasando entregas e frustrando clientes.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Falta de Controle</h3>
                  <p class="text-gray-600">Sem visibilidade do que está acontecendo no negócio, decisões tomadas no escuro.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Erros Custosos</h3>
                  <p class="text-gray-600">Erros humanos em processos manuais que custam dinheiro e credibilidade.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 p-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl">
            <h3 class="text-2xl font-bold mb-4">💸 CADA MINUTO PERDIDO É DINHEIRO JOGADO FORA!</h3>
            <p class="text-lg">Enquanto você luta com processos manuais, seus concorrentes estão automatizando e crescendo 10x mais rápido.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section id="benefits" class="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ✅ A AUTOMAÇÃO QUE SEU NEGÓCIO PRECISA!
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas <strong>INTELIGENTES</strong> que trabalham 24/7 para você, aumentando produtividade e eliminando erros.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-cogs text-blue-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Automação Completa</h3>
                <p class="text-gray-600 mb-4">Elimine tarefas repetitivas e ganhe tempo para focar no que realmente importa: crescer seu negócio.</p>
                <div class="bg-blue-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-blue-600">40h</span>
                  <p class="text-sm text-blue-700">Economizadas por semana</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-chart-bar text-green-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Relatórios Inteligentes</h3>
                <p class="text-gray-600 mb-4">Dashboards em tempo real com todas as informações que você precisa para tomar decisões certas.</p>
                <div class="bg-green-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-green-600">99.9%</span>
                  <p class="text-sm text-green-700">Precisão dos dados</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-shield-alt text-purple-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Segurança Máxima</h3>
                <p class="text-gray-600 mb-4">Seus dados protegidos com a melhor tecnologia de segurança, backups automáticos e acesso controlado.</p>
                <div class="bg-purple-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-purple-600">100%</span>
                  <p class="text-sm text-purple-700">Segurança garantida</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Before/After Comparison -->
          <div class="mt-16 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div class="grid md:grid-cols-2">
              <div class="bg-red-50 p-8">
                <h3 class="text-2xl font-bold text-red-600 mb-6 text-center">❌ ANTES (Sem Sistema)</h3>
                <ul class="space-y-4">
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>40+ horas semanais em tarefas manuais</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Erros constantes em planilhas</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Informações espalhadas e desorganizadas</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Decisões baseadas em achismos</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Estresse e frustração diária</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-8">
                <h3 class="text-2xl font-bold text-green-600 mb-6 text-center">✅ DEPOIS (Com Sistema 3W)</h3>
                <ul class="space-y-4">
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Automação de 90% dos processos</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Zero erros em cálculos e relatórios</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Todas informações centralizadas</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Decisões baseadas em dados reais</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Tranquilidade e crescimento sustentável</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              💻 SISTEMAS QUE <span class="text-cyan-400">TRANSFORMAM NEGÓCIOS</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Invista em automação e veja seu ROI multiplicar em 6 meses ou menos!
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Sites Profissionais -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-globe text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Sites Profissionais</h3>
                <p class="text-blue-100 mb-6 text-sm">Presença online que converte visitantes em clientes reais</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-cyan-400">R$ 2.497</div>
                  <div class="text-blue-200 line-through">R$ 4.997</div>
                  <div class="text-blue-100 text-sm">À vista</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Design responsivo premium</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> SEO otimizado para Google</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Formulários inteligentes</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Integração WhatsApp</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Suporte por 6 meses</li>
                </ul>
                
                <button @click="trackServiceClick('site_profissional')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar um Site Profissional por R$ 2.497', '_blank')" 
                  class="w-full bg-cyan-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-cyan-300 transition-colors">
                  QUERO MEU SITE
                </button>
              </div>
            </div>
            
            <!-- Sistemas Personalizados -->
            <div class="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-bold">
                POPULAR
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-cogs text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Sistemas Personalizados</h3>
                <p class="text-green-100 mb-6 text-sm">Automação completa dos seus processos de negócio</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-cyan-400">R$ 9.997</div>
                  <div class="text-green-200 line-through">R$ 19.997</div>
                  <div class="text-green-100 text-sm">À vista</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Análise completa dos processos</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Sistema 100% personalizado</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Dashboards e relatórios</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Automação de fluxos</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Treinamento da equipe</li>
                </ul>
                
                <button @click="trackServiceClick('sistema_personalizado')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar um Sistema Personalizado por R$ 9.997', '_blank')" 
                  class="w-full bg-cyan-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-cyan-300 transition-colors">
                  QUERO AUTOMATIZAR
                </button>
              </div>
            </div>
            
            <!-- Aplicativos Mobile -->
            <div class="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-mobile-alt text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Aplicativos Mobile</h3>
                <p class="text-purple-100 mb-6 text-sm">Leve seu negócio para o bolso dos seus clientes</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-cyan-400">R$ 14.997</div>
                  <div class="text-purple-200 line-through">R$ 29.997</div>
                  <div class="text-purple-100 text-sm">À vista</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> App iOS e Android</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Design UI/UX profissional</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Integração com sistemas</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Push notifications</li>
                  <li class="flex items-center"><i class="fas fa-check text-cyan-400 mr-2"></i> Publicação nas lojas</li>
                </ul>
                
                <button @click="trackServiceClick('app_mobile')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar um Aplicativo Mobile por R$ 14.997', '_blank')" 
                  class="w-full bg-cyan-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-cyan-300 transition-colors">
                  QUERO MEU APP
                </button>
              </div>
            </div>
          </div>
          
          <!-- Combo Offer -->
          <div class="mt-16 bg-gradient-to-r from-yellow-500 to-orange-600 p-8 rounded-xl text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold animate-pulse">
              OFERTA ESPECIAL
            </div>
            <h3 class="text-3xl font-bold text-white mb-4">🎯 COMBO TRANSFORMAÇÃO DIGITAL</h3>
            <p class="text-orange-100 mb-6 text-lg">Site + Sistema + App = Negócio 100% Digital</p>
            
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="text-5xl font-bold text-white mb-2">R$ 19.997</div>
                <div class="text-orange-200 line-through text-2xl">R$ 54.991</div>
                <div class="bg-red-600 text-white px-4 py-2 rounded-full inline-block font-bold mt-2">
                  ECONOMIA DE R$ 34.994
                </div>
              </div>
              
              <div>
                <button @click="trackServiceClick('combo_completo')" onclick="window.open('https://wa.me/5541996924829?text=Quero o COMBO TRANSFORMAÇÃO DIGITAL por R$ 19.997 - Economia de R$ 34.994!', '_blank')" 
                  class="bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors w-full">
                  QUERO ECONOMIZAR R$ 34.994
                </button>
              </div>
            </div>
          </div>
          
          <!-- Payment Options -->
          <div class="mt-12 text-center">
            <h3 class="text-2xl font-bold mb-6">💳 Formas de Pagamento Flexíveis</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-gray-800 p-6 rounded-lg">
                <i class="fas fa-credit-card text-3xl text-green-400 mb-4"></i>
                <h4 class="font-bold mb-2">Cartão de Crédito</h4>
                <p class="text-gray-300">Parcele em até 12x sem juros</p>
              </div>
              <div class="bg-gray-800 p-6 rounded-lg">
                <i class="fas fa-qrcode text-3xl text-green-400 mb-4"></i>
                <h4 class="font-bold mb-2">PIX</h4>
                <p class="text-gray-300">5% de desconto à vista</p>
              </div>
              <div class="bg-gray-800 p-6 rounded-lg">
                <i class="fas fa-university text-3xl text-green-400 mb-4"></i>
                <h4 class="font-bold mb-2">Transferência</h4>
                <p class="text-gray-300">3% de desconto à vista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🚀 CASOS DE <span class="text-indigo-600">SUCESSO REAIS</span>
            </h2>
            <p class="text-xl text-gray-600">
              Veja como nossos sistemas transformaram estes negócios:
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-2xl relative">
              <div class="absolute -top-4 left-6">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                  <i class="fas fa-user text-gray-600 text-xl"></i>
                </div>
                <h4 class="font-bold text-lg text-gray-800 mb-2">Carlos Mendes</h4>
                <p class="text-indigo-600 text-sm mb-4">CEO - Logística Express</p>
                <p class="text-gray-600 italic mb-4">"O sistema desenvolvido pela 3W Online automatizou 95% dos nossos processos. Economizamos 50 horas semanais e aumentamos nossa capacidade operacional em 400% sem contratar mais funcionários!"</p>
                <div class="bg-green-100 p-3 rounded-lg">
                  <span class="text-green-600 font-bold">Resultado: +400% capacidade operacional</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-2xl relative">
              <div class="absolute -top-4 left-6">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 rounded-full mx-auto mb-4 bg-blue-300 flex items-center justify-center">
                  <i class="fas fa-user text-blue-700 text-xl"></i>
                </div>
                <h4 class="font-bold text-lg text-gray-800 mb-2">Marina Silva</h4>
                <p class="text-indigo-600 text-sm mb-4">Diretora - Clínica Vida</p>
                <p class="text-gray-600 italic mb-4">"Antes gastávamos 3 horas diárias organizando agendamentos manualmente. Agora tudo é automático! O sistema paga por si só com a economia de tempo e redução de erros."</p>
                <div class="bg-green-100 p-3 rounded-lg">
                  <span class="text-green-600 font-bold">Resultado: ROI de 800% em 6 meses</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-2xl relative">
              <div class="absolute -top-4 left-6">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 rounded-full mx-auto mb-4 bg-green-300 flex items-center justify-center">
                  <i class="fas fa-user text-green-700 text-xl"></i>
                </div>
                <h4 class="font-bold text-lg text-gray-800 mb-2">Roberto Costa</h4>
                <p class="text-indigo-600 text-sm mb-4">Proprietário - Distribuidora RC</p>
                <p class="text-gray-600 italic mb-4">"Sistema de estoque inteligente que prevê demanda e otimiza compras. Reduzi perdas em 70% e aumentei lucratividade em 200%. Melhor investimento que já fiz!"</p>
                <div class="bg-green-100 p-3 rounded-lg">
                  <span class="text-green-600 font-bold">Resultado: +200% lucratividade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-r from-indigo-600 to-blue-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            💻 PRONTO PARA AUTOMATIZAR SEU NEGÓCIO?
          </h2>
          <p class="text-xl md:text-2xl mb-8">
            Pare de perder tempo com tarefas manuais. Automatize e cresça 10x mais rápido!
          </p>
          
          <!-- Benefits List -->
          <div class="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-3xl mx-auto">
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-cyan-400 text-xl"></i>
              <span class="text-lg">Análise GRATUITA dos seus processos</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-cyan-400 text-xl"></i>
              <span class="text-lg">Proposta personalizada sem compromisso</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-cyan-400 text-xl"></i>
              <span class="text-lg">Garantia de 6 meses</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-cyan-400 text-xl"></i>
              <span class="text-lg">Suporte técnico vitalício</span>
            </div>
          </div>
          
          <!-- Main CTA -->
          <div class="space-y-6">
            <button @click="trackCtaClick('contact_main')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Quero uma análise GRATUITA para automatizar meu negócio com sistemas personalizados!', '_blank')" 
              class="bg-cyan-400 text-gray-900 px-12 py-6 rounded-full text-2xl font-bold hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
              <i class="fab fa-whatsapp mr-3 text-3xl"></i>
              ANÁLISE GRATUITA AGORA
            </button>
            
            <p class="text-indigo-100">
              ⚡ Resposta garantida em menos de 2 minutos | 📞 Atendimento especializado | 🎁 100% Gratuito
            </p>
          </div>
          
          <!-- Urgency -->
          <div class="mt-10 bg-red-600 p-6 rounded-xl max-w-2xl mx-auto">
            <h3 class="text-xl font-bold mb-2">⚠️ ATENÇÃO: AGENDA LIMITADA!</h3>
            <p>Só conseguimos fazer 5 análises detalhadas por semana.</p>
            <p class="font-bold text-cyan-300">Restam apenas 2 vagas para esta semana!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ❓ PERGUNTAS FREQUENTES
            </h2>
            <p class="text-xl text-gray-600">
              Esclareça suas dúvidas sobre desenvolvimento de sistemas
            </p>
          </div>
          
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <button @click="faq.open = !faq.open" class="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors flex justify-between items-center">
                <h3 class="font-bold text-lg text-gray-800">{{ faq.question }}</h3>
                <i :class="['fas transition-transform', faq.open ? 'fa-chevron-up' : 'fa-chevron-down']" class="text-indigo-600"></i>
              </button>
              <div v-show="faq.open" class="px-6 py-4 bg-white transition-all duration-300">
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-code text-white"></i>
            </div>
            <h3 class="text-xl font-bold">3W Online</h3>
          </div>
          <p class="text-gray-400 mb-8">Automatizando negócios e transformando empresas há mais de 8 anos.</p>
          
          <div class="border-t border-gray-800 pt-8 text-gray-400">
            <p>&copy; 2025 3W Online. Todos os direitos reservados. | <a href="/termos-uso" class="hover:text-white">Termos de Uso</a> | <a href="/politica-privacidade" class="hover:text-white">Política de Privacidade</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Google Analytics Integration
import { useGoogleAnalytics } from '~/composables/useGoogleAnalytics'
const { trackPage, trackBusinessEvent } = useGoogleAnalytics()

// SEO and Meta Configuration
useHead({
  title: 'Sistemas Sob Medida que Automatizam seu Negócio | ROI de 500% Comprovado',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: 'Automatize seu negócio com sistemas personalizados. Elimine tarefas manuais, ganhe 40h por semana e aumente produtividade em 500%. Análise GRATUITA!' },
    { name: 'keywords', content: 'sistemas personalizados, automação de processos, desenvolvimento de software, sistemas sob medida, aplicativos mobile, sites profissionais, 3w online' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Desenvolvimento de Sistemas' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Sistemas Sob Medida que Automatizam seu Negócio' },
    { property: 'og:description', content: 'Elimine tarefas manuais e ganhe 40h por semana com sistemas personalizados. ROI comprovado de 500%!' },
    { property: 'og:image', content: '/images/og-systems.jpg' },
    { property: 'og:url', content: 'https://3wonline.com.br/lp/system' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sistemas Sob Medida que Automatizam seu Negócio' },
    { name: 'twitter:description', content: 'Automação completa para ganhar 40h por semana e aumentar produtividade em 500%' },
    { name: 'twitter:image', content: '/images/og-systems.jpg' },
    
    // Additional SEO
    { name: 'theme-color', content: '#4f46e5' },
    { name: 'msapplication-TileColor', content: '#4f46e5' }
  ],
  link: [
    { rel: 'canonical', href: 'https://3wonline.com.br/lp/system' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "3W Online",
        "description": "Empresa especializada em desenvolvimento de sistemas personalizados e automação de processos",
        "url": "https://3wonline.com.br",
        "logo": "https://3wonline.com.br/images/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-41-99692-4829",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "offers": {
          "@type": "Offer",
          "name": "Análise Gratuita de Processos",
          "price": "0",
          "priceCurrency": "BRL",
          "description": "Análise completa e gratuita dos processos da empresa para identificar oportunidades de automação"
        }
      })
    }
  ]
})

definePageMeta({
  layout: 'lp'
})

// Reactive Data
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)

// Methods
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Tracking Functions
const trackCtaClick = (location) => {
  trackBusinessEvent.consultationRequest(location)
}

const trackServiceClick = (service) => {
  trackBusinessEvent.serviceInterest(service, 'price_click')
}

// FAQ Data
const faqs = ref([
  {
    question: 'Quanto tempo leva para desenvolver um sistema personalizado?',
    answer: 'O tempo varia conforme a complexidade, mas sistemas simples ficam prontos em 2-4 semanas, enquanto sistemas complexos podem levar 2-3 meses. Sempre entregamos em etapas para você acompanhar o progresso.',
    open: false,
  },
  {
    question: 'Vocês oferecem garantia no sistema desenvolvido?',
    answer: 'Sim! Oferecemos 6 meses de garantia total contra bugs e problemas técnicos. Também incluímos suporte técnico vitalício para dúvidas e pequenos ajustes.',
    open: false,
  },
  {
    question: 'O sistema funciona online ou offline?',
    answer: 'Desenvolvemos tanto sistemas web (online) quanto desktop (offline), dependendo da sua necessidade. Sistemas web permitem acesso de qualquer lugar, enquanto desktop oferece mais velocidade para operações locais.',
    open: false,
  },
  {
    question: 'Posso solicitar alterações depois do sistema pronto?',
    answer: 'Claro! Durante o desenvolvimento, alterações são gratuitas. Após a entrega, pequenos ajustes estão incluídos na garantia. Novas funcionalidades são orçadas separadamente.',
    open: false,
  },
  {
    question: 'Como é feito o treinamento da equipe?',
    answer: 'Incluímos treinamento completo da sua equipe, com manuais em vídeo, documentação detalhada e sessões ao vivo até todos estarem confortáveis com o sistema.',
    open: false,
  },
  {
    question: 'O sistema pode integrar com outros softwares que já uso?',
    answer: 'Sim! Fazemos integração com ERPs, CRMs, sistemas contábeis, APIs de pagamento e qualquer software que sua empresa já utilize. Isso garante que tudo funcione em harmonia.',
    open: false,
  },
  {
    question: 'Preciso comprar servidor ou hospedagem?',
    answer: 'Orientamos você na melhor opção: desde hospedagem simples até servidores dedicados. Também podemos incluir a configuração e manutenção da infraestrutura no projeto.',
    open: false,
  },
  {
    question: 'E se eu quiser expandir o sistema no futuro?',
    answer: 'Desenvolvemos pensando em escalabilidade. O sistema é preparado para crescer junto com sua empresa, facilitando a adição de novas funcionalidades quando necessário.',
    open: false,
  },
])

// Page tracking on mount
onMounted(() => {
  trackPage('Landing Page Sistemas', { 
    category: 'landing_page',
    service_type: 'desenvolvimento_sistemas'
  })
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
  