<template>
  <div class="bg-white font-sans overflow-x-hidden">
    <!-- Sticky Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div class="container mx-auto flex justify-between items-center px-4 py-3 relative">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-rocket text-white text-lg"></i>
          </div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3W Online</h1>
        </div>
        
        <button @click="toggleMenu" class="lg:hidden focus:outline-none">
          <i class="fas fa-bars text-gray-700 text-xl"></i>
        </button>
        
        <nav :class="['lg:flex items-center space-x-8 absolute lg:relative bg-white lg:bg-transparent top-full left-0 right-0 lg:top-auto shadow-lg lg:shadow-none p-4 lg:p-0 z-40', menuOpen ? 'block' : 'hidden']">
          <a href="#hero" class="block py-2 lg:inline hover:text-blue-600 transition-colors font-medium">Início</a>
          <a href="#benefits" class="block py-2 lg:inline hover:text-blue-600 transition-colors font-medium">Benefícios</a>
          <a href="#services" class="block py-2 lg:inline hover:text-blue-600 transition-colors font-medium">Serviços</a>
          <a href="#testimonials" class="block py-2 lg:inline hover:text-blue-600 transition-colors font-medium">Cases</a>
          <a href="#contact" class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 font-medium shadow-lg">
            Quero Mais Clientes
          </a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden pt-20">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
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
              Transforme Seu Negócio em uma
              <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> 
                Máquina de Vendas
              </span>
            </h1>
            
            <div class="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              <p class="mb-4">📈 <strong>Aumente suas vendas em até 300%</strong> com estratégias de marketing digital que realmente funcionam</p>
              <p class="mb-4">🎯 Alcance clientes qualificados que estão <strong>prontos para comprar</strong></p>
              <p>💰 Transforme cada real investido em <strong>resultados mensuráveis</strong></p>
            </div>
            
            <!-- Social Proof -->
            <div class="flex flex-wrap justify-center items-center space-x-8 mb-10 text-gray-300">
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>+500 empresas atendidas</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>8+ anos de experiência</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>ROI médio de 400%</span>
              </div>
            </div>
            
            <!-- CTA Principal -->
            <div class="space-y-4">
              <button @click="trackCtaClick('hero_main')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Quero uma consultoria GRATUITA de marketing digital para aumentar minhas vendas em 300%', '_blank')" 
                class="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
                <i class="fab fa-whatsapp mr-3 text-2xl"></i>
                QUERO MINHA CONSULTORIA GRATUITA AGORA
              </button>
              
              <p class="text-gray-300 text-sm">
                ⚡ Resposta em menos de 2 minutos | 🎁 Consultoria 100% GRATUITA | 📞 Sem compromisso
              </p>
            </div>
            
            <!-- Guarantee Badge -->
            <div class="mt-8">
              <div class="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full font-bold">
                <i class="fas fa-shield-alt mr-2"></i>
                GARANTIA DE 30 DIAS OU SEU DINHEIRO DE VOLTA
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i class="fas fa-chevron-down text-white text-2xl opacity-60"></i>
      </div>
    </section>

    <!-- Problems Section -->
    <section class="py-20 bg-red-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-red-600 mb-8">
            ❌ PARE DE PERDER DINHEIRO!
          </h2>
          <p class="text-xl text-gray-700 mb-12">
            Você está cansado de investir em marketing sem ver resultados? Reconhece algum desses problemas?
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 text-left">
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Redes Sociais "Mortas"</h3>
                  <p class="text-gray-600">Seus posts têm poucos likes, comentários e compartilhamentos. Parece que ninguém vê seu conteúdo.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Anúncios que Queimam Dinheiro</h3>
                  <p class="text-gray-600">Já gastou fortunas em Facebook Ads e Google Ads, mas só gerou despesa sem vendas reais.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Concorrência Dominando</h3>
                  <p class="text-gray-600">Seus concorrentes aparecem primeiro no Google e redes sociais enquanto você fica invisível.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Tempo Perdido</h3>
                  <p class="text-gray-600">Horas criando conteúdo que não converte, tentando estratégias que não funcionam.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 p-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl">
            <h3 class="text-2xl font-bold mb-4">⏰ CADA DIA QUE PASSA É DINHEIRO PERDIDO!</h3>
            <p class="text-lg">Enquanto você perde tempo com estratégias que não funcionam, seus concorrentes estão faturando milhões online.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section id="benefits" class="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ✅ A SOLUÇÃO QUE VOCÊ PROCURAVA ESTÁ AQUI!
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Pare de quebrar a cabeça! Nossa metodologia <strong>COMPROVADA</strong> já transformou centenas de negócios em máquinas de vendas online.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-chart-line text-green-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Aumento Real de Vendas</h3>
                <p class="text-gray-600 mb-4">Estratégias comprovadas que geram leads qualificados e convertem em vendas reais.</p>
                <div class="bg-green-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-green-600">+300%</span>
                  <p class="text-sm text-green-700">Aumento médio em vendas</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-target text-blue-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Tráfego Qualificado</h3>
                <p class="text-gray-600 mb-4">Atraia apenas pessoas interessadas no seu produto, que estão prontas para comprar.</p>
                <div class="bg-blue-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-blue-600">95%</span>
                  <p class="text-sm text-blue-700">Taxa de qualificação</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-crown text-purple-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Autoridade no Mercado</h3>
                <p class="text-gray-600 mb-4">Torne-se referência no seu segmento e seja a primeira opção dos clientes.</p>
                <div class="bg-purple-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-purple-600">TOP 3</span>
                  <p class="text-sm text-purple-700">Posição no Google</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Before/After Comparison -->
          <div class="mt-16 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div class="grid md:grid-cols-2">
              <div class="bg-red-50 p-8">
                <h3 class="text-2xl font-bold text-red-600 mb-6 text-center">❌ ANTES (Sem a 3W Online)</h3>
                <ul class="space-y-4">
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Poucos clientes e vendas inconsistentes</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Gastos altos sem retorno em marketing</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Redes sociais sem engajamento</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Concorrência sempre na frente</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Estresse e frustração constante</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-8">
                <h3 class="text-2xl font-bold text-green-600 mb-6 text-center">✅ DEPOIS (Com a 3W Online)</h3>
                <ul class="space-y-4">
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Fila de clientes querendo seus produtos</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>ROI positivo em todos os investimentos</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Redes sociais que vendem 24/7</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i class="fas fa-check text-green-500 mt-1"></i>
                    <span>Posição de destaque no mercado</span>
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

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              🚀 NOSSOS SERVIÇOS QUE <span class="text-yellow-400">TRANSFORMAM NEGÓCIOS</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha o pacote ideal para seu negócio e comece a ver resultados em 30 dias ou menos!
            </p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            <!-- Gestão de Redes Sociais -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                POPULAR
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fab fa-instagram text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Gestão de Redes Sociais</h3>
                <p class="text-blue-100 mb-6 text-sm">Transforme suas redes em máquinas de vendas com conteúdo que converte</p>
                
                <div class="mb-6">
                  <div class="text-3xl font-bold text-yellow-400">R$ 497</div>
                  <div class="text-blue-200 line-through">R$ 897</div>
                  <div class="text-blue-100 text-sm">/mês</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i> 20 posts mensais criativos</li>
                  <li class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i> Stories diários engajantes</li>
                  <li class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i> Copywriting persuasivo</li>
                  <li class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i> Gestão de comentários</li>
                  <li class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i> Relatórios semanais</li>
                </ul>
                
                <button @click="trackServiceClick('redes_sociais')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar a Gestão de Redes Sociais por R$ 497/mês', '_blank')" 
                  class="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  QUERO ESTE PLANO
                </button>
              </div>
            </div>
            
            <!-- Tráfego Pago -->
            <div class="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-bold">
                ROI ALTO
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-bullseye text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Tráfego Pago</h3>
                <p class="text-green-100 mb-6 text-sm">Campanhas que geram leads qualificados e vendas comprovadas</p>
                
                <div class="mb-6">
                  <div class="text-3xl font-bold text-yellow-400">R$ 697</div>
                  <div class="text-green-200 line-through">R$ 1.297</div>
                  <div class="text-green-100 text-sm">/mês</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Facebook e Instagram Ads</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Google Ads otimizado</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Segmentação avançada</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Landing pages convertedoras</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Otimização constante</li>
                </ul>
                
                <button @click="trackServiceClick('trafego_pago')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar o Tráfego Pago por R$ 697/mês', '_blank')" 
                  class="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  QUERO ESTE PLANO
                </button>
              </div>
            </div>
            
            <!-- Artes Criativas -->
            <div class="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-palette text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Artes Criativas</h3>
                <p class="text-purple-100 mb-6 text-sm">Designs que chamam atenção e convertem visitantes em clientes</p>
                
                <div class="mb-6">
                  <div class="text-3xl font-bold text-yellow-400">R$ 97</div>
                  <div class="text-purple-200 line-through">R$ 197</div>
                  <div class="text-purple-100 text-sm">/arte</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Posts para redes sociais</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Banners para anúncios</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Logotipos profissionais</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Materiais impressos</li>
                  <li class="flex items-center"><i class="fas fa-check text-yellow-400 mr-2"></i> Revisões ilimitadas</li>
                </ul>
                
                <button @click="trackServiceClick('artes_criativas')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar Artes Criativas por R$ 97 cada', '_blank')" 
                  class="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  QUERO ESTE PLANO
                </button>
              </div>
            </div>
            
            <!-- Combo Completo -->
            <div class="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-bold animate-pulse">
                OFERTA ESPECIAL
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-crown text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-white">COMBO COMPLETO</h3>
                <p class="text-orange-100 mb-6 text-sm">TUDO que você precisa para dominar o marketing digital</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-white">R$ 997</div>
                  <div class="text-orange-200 line-through">R$ 2.291</div>
                  <div class="text-orange-100 text-sm">/mês</div>
                  <div class="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold mt-2">
                    ECONOMIA DE R$ 1.294
                  </div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6 text-white">
                  <li class="flex items-center"><i class="fas fa-crown text-white mr-2"></i> TUDO dos planos anteriores</li>
                  <li class="flex items-center"><i class="fas fa-crown text-white mr-2"></i> Consultoria estratégica</li>
                  <li class="flex items-center"><i class="fas fa-crown text-white mr-2"></i> Automação de vendas</li>
                  <li class="flex items-center"><i class="fas fa-crown text-white mr-2"></i> E-mail marketing</li>
                  <li class="flex items-center"><i class="fas fa-crown text-white mr-2"></i> Suporte prioritário</li>
                </ul>
                
                <button @click="trackServiceClick('combo_completo')" onclick="window.open('https://wa.me/5541996924829?text=Quero o COMBO COMPLETO por R$ 997/mês - Economia de R$ 1.294!', '_blank')" 
                  class="w-full bg-white text-orange-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors animate-pulse">
                  QUERO ECONOMIZAR R$ 1.294
                </button>
              </div>
            </div>
          </div>
          
          <!-- Urgency Footer -->
          <div class="text-center mt-12">
            <div class="bg-red-600 text-white p-6 rounded-xl max-w-4xl mx-auto">
              <h3 class="text-2xl font-bold mb-4">⏰ OFERTA POR TEMPO LIMITADO!</h3>
              <p class="text-lg mb-4">Estes preços especiais são válidos apenas para os primeiros 50 clientes!</p>
              <div class="flex justify-center items-center space-x-8 text-sm">
                <div class="text-center">
                  <div class="text-2xl font-bold" id="countdown-days">02</div>
                  <div>DIAS</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold" id="countdown-hours">15</div>
                  <div>HORAS</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold" id="countdown-minutes">30</div>
                  <div>MINUTOS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🎯 RESULTADOS <span class="text-blue-600">COMPROVADOS</span>
            </h2>
            <p class="text-xl text-gray-600">
              Veja o que nossos clientes estão dizendo sobre os resultados obtidos:
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
                <h4 class="font-bold text-lg text-gray-800 mb-2">Maria Silva</h4>
                <p class="text-blue-600 text-sm mb-4">Loja de Roupas Femininas</p>
                <p class="text-gray-600 italic mb-4">"Em 3 meses com a 3W Online, minhas vendas aumentaram 400%! Antes eu vendia R$ 5.000/mês, agora estou faturando mais de R$ 20.000. Foi a melhor decisão que tomei para meu negócio!"</p>
                <div class="bg-green-100 p-3 rounded-lg">
                  <span class="text-green-600 font-bold">Resultado: +400% em vendas</span>
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
                <h4 class="font-bold text-lg text-gray-800 mb-2">João Santos</h4>
                <p class="text-blue-600 text-sm mb-4">Clínica Odontológica</p>
                <p class="text-gray-600 italic mb-4">"Estava gastando R$ 3.000/mês em Google Ads sem resultado. A 3W Online otimizou tudo e agora com R$ 1.500/mês estou gerando 50 leads qualificados mensais. ROI de 600%!"</p>
                <div class="bg-green-100 p-3 rounded-lg">
                  <span class="text-green-600 font-bold">Resultado: ROI de 600%</span>
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
                <div class="w-16 h-16 rounded-full mx-auto mb-4 bg-purple-300 flex items-center justify-center">
                  <i class="fas fa-user text-purple-700 text-xl"></i>
                </div>
                <h4 class="font-bold text-lg text-gray-800 mb-2">Ana Costa</h4>
                <p class="text-blue-600 text-sm mb-4">Advocacia Empresarial</p>
                <p class="text-gray-600 italic mb-4">"Minha agenda estava sempre vazia. Após contratar a 3W Online, estou com agenda lotada por 3 meses! Aumentei meu faturamento de R$ 8.000 para R$ 35.000/mês em apenas 4 meses."</p>
                <div class="bg-green-100 p-3 rounded-lg">
                  <span class="text-green-600 font-bold">Resultado: +337% em faturamento</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Video Testimonial -->
          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-8">📹 Veja o depoimento em vídeo:</h3>
            <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
              <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <button class="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <i class="fas fa-play text-2xl ml-1"></i>
                </button>
              </div>
              <p class="text-gray-600 italic">"Clique para ver como a 3W Online transformou meu negócio em apenas 60 dias!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            🚀 PRONTO PARA TRANSFORMAR SEU NEGÓCIO?
          </h2>
          <p class="text-xl md:text-2xl mb-8">
            Não perca mais tempo! Cada dia que passa é dinheiro deixado na mesa.
          </p>
          
          <!-- Benefits List -->
          <div class="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-3xl mx-auto">
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
              <span class="text-lg">Consultoria 100% GRATUITA</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
              <span class="text-lg">Análise completa do seu negócio</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
              <span class="text-lg">Estratégia personalizada</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-yellow-400 text-xl"></i>
              <span class="text-lg">Sem compromisso inicial</span>
            </div>
          </div>
          
          <!-- Main CTA -->
          <div class="space-y-6">
            <button @click="trackCtaClick('contact_main')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Quero agendar minha consultoria GRATUITA de marketing digital agora mesmo!', '_blank')" 
              class="bg-yellow-400 text-gray-900 px-12 py-6 rounded-full text-2xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
              <i class="fab fa-whatsapp mr-3 text-3xl"></i>
              AGENDAR CONSULTORIA GRATUITA AGORA
            </button>
            
            <p class="text-green-100">
              ⚡ Resposta garantida em menos de 2 minutos | 📞 Atendimento 24/7 | 🎁 100% Gratuito
            </p>
          </div>
          
          <!-- Urgency -->
          <div class="mt-10 bg-red-600 p-6 rounded-xl max-w-2xl mx-auto">
            <h3 class="text-xl font-bold mb-2">⚠️ ATENÇÃO: VAGAS LIMITADAS!</h3>
            <p>Só conseguimos atender 10 novos clientes por mês com qualidade máxima.</p>
            <p class="font-bold text-yellow-300">Restam apenas 3 vagas para este mês!</p>
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
              Tire todas suas dúvidas antes de começar sua transformação digital
            </p>
          </div>
          
          <div class="space-y-4">
            <div v-for="(item, index) in faqList" :key="index" class="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <button @click="toggleFaq(index)" class="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors flex justify-between items-center">
                <h3 class="font-bold text-lg text-gray-800">{{ item.question }}</h3>
                <i :class="['fas transition-transform', openedFaq === index ? 'fa-chevron-up' : 'fa-chevron-down']" class="text-blue-600"></i>
              </button>
              <div v-show="openedFaq === index" class="px-6 py-4 bg-white transition-all duration-300">
                <p class="text-gray-600 leading-relaxed">{{ item.answer }}</p>
              </div>
            </div>
          </div>
          
          <!-- Additional CTA -->
          <div class="text-center mt-12">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ainda tem dúvidas? 🤔</h3>
              <p class="text-gray-600 mb-6">Fale direto com nosso especialista e esclareça todas suas questões!</p>
              <button @click="trackCtaClick('faq_cta')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Tenho algumas dúvidas sobre os serviços de marketing digital', '_blank')" 
                class="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
                <i class="fab fa-whatsapp mr-2"></i>
                ESCLARECER DÚVIDAS AGORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <i class="fas fa-rocket text-white"></i>
                </div>
                <h3 class="text-xl font-bold">3W Online</h3>
              </div>
              <p class="text-gray-400">Transformando negócios através do marketing digital há mais de 8 anos.</p>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Serviços</h4>
              <ul class="space-y-2 text-gray-400">
                <li>Gestão de Redes Sociais</li>
                <li>Tráfego Pago</li>
                <li>Artes Criativas</li>
                <li>Consultoria Digital</li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Contato</h4>
              <ul class="space-y-2 text-gray-400">
                <li><i class="fab fa-whatsapp mr-2"></i> (41) 99692-4829</li>
                <li><i class="fas fa-envelope mr-2"></i> contato@3wonline.com.br</li>
                <li><i class="fas fa-map-marker-alt mr-2"></i> Curitiba, PR</li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Redes Sociais</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i class="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i class="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i class="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
  title: 'Marketing Digital que Gera Resultados Reais | Aumente suas Vendas em 300%',
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: 'Transforme seu negócio em uma máquina de vendas com marketing digital que realmente funciona. Aumente suas vendas em até 300% com estratégias comprovadas. Consultoria GRATUITA!' },
    { name: 'keywords', content: 'marketing digital, gestão redes sociais, tráfego pago, vendas online, leads qualificados, ROI marketing, consultoria gratuita, 3w online' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Marketing Digital' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Marketing Digital que Gera Resultados Reais | Aumente suas Vendas em 300%' },
    { property: 'og:description', content: 'Transforme seu negócio em uma máquina de vendas com marketing digital que realmente funciona. Consultoria GRATUITA!' },
    { property: 'og:image', content: '/images/og-marketing.jpg' },
    { property: 'og:url', content: 'https://3wonline.com.br/lp/mkt' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Marketing Digital que Gera Resultados Reais' },
    { name: 'twitter:description', content: 'Aumente suas vendas em até 300% com estratégias comprovadas de marketing digital' },
    { name: 'twitter:image', content: '/images/og-marketing.jpg' },
    
    // Additional SEO
    { name: 'theme-color', content: '#1e40af' },
    { name: 'msapplication-TileColor', content: '#1e40af' }
  ],
  link: [
    { rel: 'canonical', href: 'https://3wonline.com.br/lp/mkt' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "3W Online",
        "description": "Agência de Marketing Digital especializada em resultados reais",
        "url": "https://3wonline.com.br",
        "logo": "https://3wonline.com.br/images/logo.png",
        "sameAs": [
          "https://www.facebook.com/3wonline",
          "https://www.instagram.com/3wonline"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-41-99692-4829",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "offers": {
          "@type": "Offer",
          "name": "Consultoria Gratuita de Marketing Digital",
          "price": "0",
          "priceCurrency": "BRL",
          "description": "Consultoria 100% gratuita para análise e estratégia de marketing digital"
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
const openedFaq = ref(null)

// Methods
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleFaq = (index) => {
  openedFaq.value = openedFaq.value === index ? null : index
}

// Tracking Functions
const trackCtaClick = (location) => {
  trackBusinessEvent.consultationRequest(location)
}

const trackServiceClick = (service) => {
  trackBusinessEvent.serviceInterest(service, 'price_click')
}

// FAQ Data
const faqList = [
  { 
    question: 'Quanto tempo leva para ver os primeiros resultados?', 
    answer: 'Os primeiros resultados aparecem entre 15 a 30 dias, dependendo do serviço. Para redes sociais, o engajamento melhora em 1-2 semanas. Para tráfego pago, os leads começam a chegar em 3-7 dias após o lançamento das campanhas otimizadas.' 
  },
  { 
    question: 'Vocês garantem o aumento nas vendas?', 
    answer: 'Sim! Oferecemos garantia de 30 dias ou seu dinheiro de volta. Se não conseguirmos melhorar seus resultados de marketing digital no primeiro mês, devolvemos 100% do investimento.' 
  },
  { 
    question: 'Como funciona a consultoria gratuita?', 
    answer: 'A consultoria é 100% gratuita e sem compromisso. Analisamos seu negócio, concorrência, presença digital atual e criamos uma estratégia personalizada. Dura cerca de 45 minutos via WhatsApp ou videoconferência.' 
  },
  { 
    question: 'Trabalham com empresas de outros estados?', 
    answer: 'Sim! Atendemos clientes de todo o Brasil de forma 100% online. Já temos cases de sucesso em mais de 15 estados, com reuniões por videoconferência e relatórios detalhados semanais.' 
  },
  { 
    question: 'Qual é o investimento mínimo para começar?', 
    answer: 'O investimento varia conforme suas necessidades. Temos planos a partir de R$ 497/mês. Na consultoria gratuita, identificamos qual plano é ideal para seu perfil e orçamento, sempre com foco no melhor ROI.' 
  },
  { 
    question: 'Posso cancelar a qualquer momento?', 
    answer: 'Sim, sem multas ou burocracias. Trabalhamos com contratos mensais e você pode cancelar quando quiser. Nossa confiança está nos resultados que entregamos, não em contratos de fidelidade.' 
  },
  { 
    question: 'Vocês criam o conteúdo das redes sociais?', 
    answer: 'Sim! Criamos todo o conteúdo: posts, stories, copywriting persuasivo, artes gráficas, vídeos e tudo mais que sua marca precisa para se destacar e converter seguidores em clientes.' 
  },
  { 
    question: 'Como acompanho os resultados das campanhas?', 
    answer: 'Você recebe relatórios semanais detalhados com métricas de performance, ROI, leads gerados, vendas atribuídas e insights para otimização. Também damos acesso a dashboards em tempo real.' 
  }
]

// Page tracking on mount
onMounted(() => {
  trackPage('Landing Page Marketing Digital', { 
    category: 'landing_page',
    service_type: 'marketing_digital'
  })
  
  // Simple countdown timer
  setInterval(() => {
    const now = new Date().getTime()
    const end = now + (2 * 24 * 60 * 60 * 1000) // 2 days from now
    const distance = end - now
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    
    const daysEl = document.getElementById('countdown-days')
    const hoursEl = document.getElementById('countdown-hours')
    const minutesEl = document.getElementById('countdown-minutes')
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0')
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0')
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0')
  }, 1000)
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
