<template>
  <div class="bg-white font-sans overflow-x-hidden">
    <!-- Sticky Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div class="container mx-auto flex justify-between items-center px-4 py-3">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-desktop text-white text-lg"></i>
          </div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3W Online</h1>
        </div>
        
        <nav class="hidden lg:flex items-center space-x-8">
          <a href="#hero" class="hover:text-purple-600 transition-colors font-medium">Início</a>
          <a href="#solutions" class="hover:text-purple-600 transition-colors font-medium">Soluções</a>
          <a href="#pricing" class="hover:text-purple-600 transition-colors font-medium">Preços</a>
          <a href="#portfolio" class="hover:text-purple-600 transition-colors font-medium">Portfólio</a>
          <button @click="trackCtaClick('header_cta')" onclick="window.open('https://wa.me/5541996924829?text=Quero uma proposta GRATUITA para meu site ou sistema!', '_blank')" 
            class="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-medium shadow-lg">
            Proposta Gratuita
          </button>
        </nav>
        
        <button @click="toggleMenu" class="lg:hidden focus:outline-none">
          <i class="fas fa-bars text-gray-700 text-xl"></i>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 text-white relative overflow-hidden pt-20">
      <!-- Animated Background -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Urgency Badge -->
          <div class="text-center mb-8">
            <span class="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full animate-bounce">
              <i class="fas fa-fire mr-2"></i>
              🔥 PROMOÇÃO ESPECIAL - ÚLTIMAS 72 HORAS
            </span>
          </div>
          
          <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Sites & Sistemas que
              <span class="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Geram Resultados
              </span>
            </h1>
            
            <div class="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              <p class="mb-4">🌟 <strong>Sites profissionais que convertem visitantes em clientes</strong></p>
              <p class="mb-4">⚙️ <strong>Sistemas que automatizam</strong> e eliminam trabalho manual</p>
              <p>💰 <strong>ROI comprovado</strong> com mais vendas e menos custos operacionais</p>
            </div>
            
            <!-- Social Proof -->
            <div class="flex flex-wrap justify-center items-center space-x-8 mb-10 text-gray-300">
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>+300 sites entregues</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>8+ anos no mercado</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle text-green-400"></i>
                <span>98% clientes satisfeitos</span>
              </div>
            </div>
            
            <!-- CTA Principal -->
            <div class="space-y-4">
              <button @click="trackCtaClick('hero_main')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Quero uma PROPOSTA GRATUITA para meu site ou sistema!', '_blank')" 
                class="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
                <i class="fab fa-whatsapp mr-3 text-2xl"></i>
                QUERO MINHA PROPOSTA GRATUITA
              </button>
              
              <p class="text-gray-300 text-sm">
                ⚡ Proposta personalizada em 24h | 🎁 Consultoria 100% GRATUITA | 📞 Sem compromisso
              </p>
            </div>
            
            <!-- Guarantee Badge -->
            <div class="mt-8">
              <div class="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full font-bold">
                <i class="fas fa-shield-alt mr-2"></i>
                GARANTIA DE ENTREGA EM 30 DIAS OU GRÁTIS
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
            ❌ SEU NEGÓCIO ESTÁ PERDENDO DINHEIRO!
          </h2>
          <p class="text-xl text-gray-700 mb-12">
            Você já perdeu clientes por não ter presença digital profissional?
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 text-left">
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Site Amador ou Inexistente</h3>
                  <p class="text-gray-600">Clientes não confiam em empresas sem site profissional. Você perde credibilidade a cada dia.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Processos Manuais Custosos</h3>
                  <p class="text-gray-600">Horas perdidas com tarefas que poderiam ser automatizadas, gerando desperdício de tempo e dinheiro.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Concorrência na Frente</h3>
                  <p class="text-gray-600">Seus concorrentes aparecem primeiro no Google enquanto você fica invisível online.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div class="flex items-start space-x-4">
                <i class="fas fa-times-circle text-red-500 text-2xl mt-1"></i>
                <div>
                  <h3 class="font-bold text-lg mb-2">Oportunidades Perdidas</h3>
                  <p class="text-gray-600">Clientes procurando seus serviços 24/7, mas não conseguem te encontrar ou entrar em contato.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 p-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl">
            <h3 class="text-2xl font-bold mb-4">💸 CADA DIA SEM SITE É DINHEIRO PERDIDO!</h3>
            <p class="text-lg">Estudos mostram que empresas sem presença digital perdem até 40% dos clientes potenciais.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section id="solutions" class="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ✅ SOLUÇÕES QUE <span class="text-purple-600">TRANSFORMAM NEGÓCIOS</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Sites e sistemas <strong>PROFISSIONAIS</strong> que atraem clientes e automatizam processos!
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-globe text-purple-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Sites Profissionais</h3>
                <p class="text-gray-600 mb-4">Sites que convertem visitantes em clientes, otimizados para vendas e SEO.</p>
                <div class="bg-purple-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-purple-600">+250%</span>
                  <p class="text-sm text-purple-700">Aumento em conversões</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-shopping-cart text-pink-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">E-commerce Completo</h3>
                <p class="text-gray-600 mb-4">Lojas virtuais que vendem 24/7 com gestão de estoque e pagamentos integrados.</p>
                <div class="bg-pink-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-pink-600">24/7</span>
                  <p class="text-sm text-pink-700">Vendas automáticas</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-500 transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-cogs text-indigo-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Sistemas Personalizados</h3>
                <p class="text-gray-600 mb-4">Automação completa de processos que elimina trabalho manual e erros.</p>
                <div class="bg-indigo-50 p-4 rounded-lg">
                  <span class="text-2xl font-bold text-indigo-600">90%</span>
                  <p class="text-sm text-indigo-700">Redução de trabalho manual</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Features Grid -->
          <div class="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-mobile-alt text-3xl text-purple-600 mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">100% Responsivo</h4>
              <p class="text-gray-600 text-sm">Funciona perfeitamente em celulares, tablets e computadores</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-search text-3xl text-purple-600 mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">SEO Otimizado</h4>
              <p class="text-gray-600 text-sm">Seu site aparecerá nas primeiras posições do Google</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-bolt text-3xl text-purple-600 mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Carregamento Rápido</h4>
              <p class="text-gray-600 text-sm">Sites otimizados para máxima velocidade e performance</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-shield-alt text-3xl text-purple-600 mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Segurança Total</h4>
              <p class="text-gray-600 text-sm">Proteção máxima contra hackers e ataques</p>
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
              💰 PREÇOS QUE <span class="text-pink-400">CABEM NO SEU BOLSO</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Investimento que se paga sozinho com o aumento de vendas!
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Site Institucional -->
            <div class="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-globe text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Site Institucional</h3>
                <p class="text-purple-100 mb-6 text-sm">Presença profissional que transmite credibilidade e confiança</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-pink-400">R$ 1.497</div>
                  <div class="text-purple-200 line-through">R$ 2.997</div>
                  <div class="text-purple-100 text-sm">À vista</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Design profissional responsivo</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Até 5 páginas otimizadas</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Formulário de contato</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Integração WhatsApp</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> SEO básico incluso</li>
                </ul>
                
                <button @click="trackServiceClick('site_institucional')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar um Site Institucional por R$ 1.497', '_blank')" 
                  class="w-full bg-pink-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-pink-300 transition-colors">
                  QUERO MEU SITE
                </button>
              </div>
            </div>
            
            <!-- E-commerce -->
            <div class="bg-gradient-to-br from-pink-600 to-pink-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
                MAIS VENDIDO
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-shopping-cart text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Loja Virtual</h3>
                <p class="text-pink-100 mb-6 text-sm">E-commerce completo que vende 24 horas por dia</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-pink-300">R$ 2.997</div>
                  <div class="text-pink-200 line-through">R$ 5.997</div>
                  <div class="text-pink-100 text-sm">À vista</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-pink-300 mr-2"></i> Até 100 produtos</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-300 mr-2"></i> Carrinho de compras</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-300 mr-2"></i> Pagamento por PIX/Cartão</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-300 mr-2"></i> Gestão de estoque</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-300 mr-2"></i> Painel administrativo</li>
                </ul>
                
                <button @click="trackServiceClick('loja_virtual')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar uma Loja Virtual por R$ 2.997', '_blank')" 
                  class="w-full bg-pink-300 text-gray-900 py-3 rounded-lg font-bold hover:bg-pink-200 transition-colors">
                  QUERO MINHA LOJA
                </button>
              </div>
            </div>
            
            <!-- Sistema Personalizado -->
            <div class="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-cogs text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Sistema Personalizado</h3>
                <p class="text-indigo-100 mb-6 text-sm">Automação completa dos processos do seu negócio</p>
                
                <div class="mb-6">
                  <div class="text-4xl font-bold text-pink-400">R$ 4.997</div>
                  <div class="text-indigo-200 line-through">R$ 9.997</div>
                  <div class="text-indigo-100 text-sm">À vista</div>
                </div>
                
                <ul class="text-left space-y-2 text-sm mb-6">
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Análise completa de processos</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Sistema 100% personalizado</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Automação de fluxos</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Relatórios inteligentes</li>
                  <li class="flex items-center"><i class="fas fa-check text-pink-400 mr-2"></i> Treinamento incluso</li>
                </ul>
                
                <button @click="trackServiceClick('sistema_personalizado')" onclick="window.open('https://wa.me/5541996924829?text=Quero contratar um Sistema Personalizado por R$ 4.997', '_blank')" 
                  class="w-full bg-pink-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-pink-300 transition-colors">
                  QUERO AUTOMATIZAR
                </button>
              </div>
            </div>
          </div>
          
          <!-- Payment Options -->
          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold mb-8">💳 Facilite seu Pagamento</h3>
            <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div class="bg-gray-800 p-6 rounded-lg">
                <i class="fas fa-qrcode text-3xl text-green-400 mb-4"></i>
                <h4 class="font-bold mb-2">PIX</h4>
                <p class="text-gray-300">10% de desconto à vista</p>
              </div>
              <div class="bg-gray-800 p-6 rounded-lg">
                <i class="fas fa-credit-card text-3xl text-blue-400 mb-4"></i>
                <h4 class="font-bold mb-2">Cartão</h4>
                <p class="text-gray-300">Parcele em até 12x sem juros</p>
              </div>
              <div class="bg-gray-800 p-6 rounded-lg">
                <i class="fas fa-university text-3xl text-purple-400 mb-4"></i>
                <h4 class="font-bold mb-2">Transferência</h4>
                <p class="text-gray-300">5% de desconto à vista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            🚀 TRANSFORME SEU NEGÓCIO AGORA!
          </h2>
          <p class="text-xl md:text-2xl mb-8">
            Não deixe seus concorrentes saírem na frente. Comece sua transformação digital hoje!
          </p>
          
          <!-- Benefits List -->
          <div class="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-3xl mx-auto">
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-pink-300 text-xl"></i>
              <span class="text-lg">Proposta personalizada GRATUITA</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-pink-300 text-xl"></i>
              <span class="text-lg">Entrega garantida em 30 dias</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-pink-300 text-xl"></i>
              <span class="text-lg">Suporte técnico incluso</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-pink-300 text-xl"></i>
              <span class="text-lg">Satisfação garantida ou reembolso</span>
            </div>
          </div>
          
          <!-- Main CTA -->
          <div class="space-y-6">
            <button @click="trackCtaClick('contact_main')" onclick="window.open('https://wa.me/5541996924829?text=Olá! Quero transformar meu negócio com um site/sistema profissional!', '_blank')" 
              class="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse">
              <i class="fab fa-whatsapp mr-3 text-3xl"></i>
              QUERO MINHA PROPOSTA GRATUITA
            </button>
            
            <p class="text-purple-100">
              ⚡ Resposta em menos de 2 minutos | 📞 Atendimento especializado | 🎁 Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-desktop text-white"></i>
          </div>
          <h3 class="text-xl font-bold">3W Online</h3>
        </div>
        <p class="text-gray-400 mb-8">Criando sites e sistemas que transformam negócios há mais de 8 anos.</p>
        
        <div class="border-t border-gray-800 pt-8 text-gray-400">
          <p>&copy; 2025 3W Online. Todos os direitos reservados. | <a href="/termos-uso" class="hover:text-white">Termos de Uso</a> | <a href="/politica-privacidade" class="hover:text-white">Política de Privacidade</a></p>
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
  title: 'Sites e Sistemas Profissionais que Geram Resultados | 3W Online',
  titleTemplate: '%s',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: 'Sites profissionais e sistemas personalizados que convertem visitantes em clientes. E-commerce, automação e presença digital que gera resultados reais. Proposta GRATUITA!' },
    { name: 'keywords', content: 'desenvolvimento de sites, criação de sites, loja virtual, e-commerce, sistemas personalizados, site profissional, 3w online' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Sites e Sistemas Profissionais que Geram Resultados' },
    { property: 'og:description', content: 'Sites profissionais e sistemas que convertem visitantes em clientes. Proposta gratuita em 24h!' },
    { property: 'og:image', content: '/images/og-sites-sistemas.jpg' },
    { property: 'og:url', content: 'https://3wonline.com.br/lp/sites_sistemas' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sites e Sistemas Profissionais que Geram Resultados' },
    { name: 'twitter:description', content: 'Desenvolvimento de sites e sistemas que convertem e automatizam processos' },
    { name: 'twitter:image', content: '/images/og-sites-sistemas.jpg' },
    
    // Additional SEO
    { name: 'theme-color', content: '#9333ea' },
    { name: 'msapplication-TileColor', content: '#9333ea' }
  ],
  link: [
    { rel: 'canonical', href: 'https://3wonline.com.br/lp/sites_sistemas' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "3W Online",
        "description": "Empresa especializada em desenvolvimento de sites profissionais e sistemas personalizados",
        "url": "https://3wonline.com.br",
        "logo": "https://3wonline.com.br/images/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-41-99692-4829",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Site Institucional",
            "price": "1497",
            "priceCurrency": "BRL",
            "description": "Site profissional responsivo com SEO otimizado"
          },
          {
            "@type": "Offer", 
            "name": "Loja Virtual",
            "price": "2997",
            "priceCurrency": "BRL",
            "description": "E-commerce completo com gestão de produtos e pagamentos"
          },
          {
            "@type": "Offer",
            "name": "Sistema Personalizado",
            "price": "4997", 
            "priceCurrency": "BRL",
            "description": "Sistema sob medida para automação de processos empresariais"
          }
        ]
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

// Page tracking on mount
onMounted(() => {
  trackPage('Landing Page Sites e Sistemas', { 
    category: 'landing_page',
    service_type: 'sites_sistemas'
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
