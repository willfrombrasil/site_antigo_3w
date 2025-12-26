
<template>
  <div class="layout-wrapper">
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

<style>
/* Estilos globais */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Define o estilo padrão para o corpo do documento */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

/* Define a estrutura principal para ocupar 100% da altura */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o layout ocupe no mínimo 100% da altura da tela */
}

/* Define o conteúdo principal para ocupar o espaço restante */
.layout-content {
  flex: 1; /* Faz com que o conteúdo principal ocupe o espaço restante entre o cabeçalho e o rodapé */
  box-sizing: border-box;
}

/* Responsividade básica */
@media (max-width: 768px) {
  .layout-content {
    padding: 0.5rem; /* Reduz o espaçamento em telas menores */
  }
}
</style>

