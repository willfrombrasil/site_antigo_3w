
<template>
    <div class="layout-wrapper min-h-screen bg-gray-50">
      <!-- Cabeçalho -->
      <Header />
  
      <!-- Conteúdo principal -->
      <main class="layout-content">
        <slot />
      </main>
  
      <!-- Rodapé -->
      <Footer />
    </div>
</template>

<script setup>
    import Header from '~/components/site/Header.vue'
    import Footer from '~/components/site/Footer.vue'
</script>
  
<style>
  /* Importações de fontes modernas */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  /* Reset e estilos globais */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  /* Define o estilo padrão para o corpo do documento */
  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
    line-height: 1.6;
    color: #1e293b;
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Define a estrutura principal para ocupar 100% da altura */
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Define o conteúdo principal para ocupar o espaço restante */
  .layout-content {
    flex: 1;
    position: relative;
  }
  
  /* Estilos para animações suaves */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .slide-up {
    animation: slideUp 0.8s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Scrollbar personalizada para Webkit */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  /* Container responsivo */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    .container {
      padding: 0 2rem;
    }
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .layout-content {
      padding: 0;
    }
    
    body {
      font-size: 16px;
    }
  }
  
  /* Focus styles para acessibilidade */
  a:focus,
  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  /* Transições suaves para todos os elementos interativos */
  a, button {
    transition: all 0.2s ease-in-out;
  }
</style> 