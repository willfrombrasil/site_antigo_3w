export default defineNuxtConfig({
  compatibilityDate: '2025-08-05',
  devtools: { enabled: true },
  ssr: true,
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Grupo 3W Online' },
        { name: 'language', content: 'Portuguese' },
        { name: 'theme-color', content: '#1f2937' },
        { property: 'og:site_name', content: 'Grupo 3W Online' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@3wonline' },
        { name: 'twitter:title', content: 'Grupo 3W Online' },
        { name: 'twitter:description', content: 'Transformamos ideias em soluções digitais de alto impacto.' },
        { name: 'twitter:image', content: 'https://www.3wonline.com.br/logo.png' },
        { name: 'description', content: 'Software house e agência de marketing digital especializada em desenvolvimento de sistemas e estratégias digitais.' },
        { name: 'keywords', content: 'software house, agência de marketing digital, desenvolvimento de sistemas, soluções digitais, consultoria digital' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.3wonline.com.br' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' 
        }
      ],
      script: [
        // Google Tag Manager
        {
          hid: 'gtm',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WVMJV7G6');`
        },
        // Google Analytics (gtag.js)
        {
          hid: 'gtag-script',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-0GGC4J7WB5',
          async: true
        },
        {
          hid: 'gtag-config',
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0GGC4J7WB5');`
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Grupo 3W Online",
            "url": "https://www.3wonline.com.br",
            "logo": "https://www.3wonline.com.br/logo.png",
            "description": "Software house e agência de marketing digital especializada em desenvolvimento de sistemas e estratégias digitais",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressLocality": "Brasil"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99999-9999",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/3wonline",
              "https://www.instagram.com/3wonline",
              "https://www.linkedin.com/company/3wonline"
            ]
          })
        }
      ],
      noscript: [
        // Google Tag Manager (noscript)
        {
          hid: 'gtm-noscript',
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVMJV7G6" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm': ['innerHTML'],
        'gtag-config': ['innerHTML'],
        'gtm-noscript': ['innerHTML']
      }
    }
  },
  
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.3wonline.com.br'
    }
  },
  
  nitro: {
    prerender: {
      routes: ['/', '/sobre', '/servicos', '/contato', '/pagamento', '/termos-uso', '/politica-privacidade']
    }
  }
})
