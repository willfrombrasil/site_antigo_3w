<template>
  <div>
    <!-- Meta tags são gerenciados pelo useHead -->
  </div>
</template>

<script setup lang="ts">
interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  url?: string
  type?: string
  structuredData?: object
}

const props = withDefaults(defineProps<SEOProps>(), {
  keywords: '',
  ogImage: 'https://www.3wonline.com.br/images/preview.png',
  url: '',
  type: 'website',
  structuredData: () => ({})
})

const route = useRoute()
const currentUrl = props.url || `https://www.3wonline.com.br${route.fullPath}`

// Structured Data padrão para organização
const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '3W Online',
  description: 'Software house e agência de marketing digital especializada em desenvolvimento de sistemas, sites, e-commerce e estratégias de marketing digital.',
  url: 'https://www.3wonline.com.br',
  logo: 'https://www.3wonline.com.br/images/logo.svg',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-99692-4829',
    contactType: 'customer service',
    availableLanguage: 'Portuguese'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressLocality: 'Curitiba',
    addressRegion: 'PR'
  },
  sameAs: [
    'https://facebook.com/grupo3wonline',
    'https://www.instagram.com/grupo3wonline'
  ]
}

// Combinar structured data padrão com props customizado
const finalStructuredData = {
  ...defaultStructuredData,
  ...props.structuredData
}

useHead({
  title: props.title,
  titleTemplate: '%s | 3W Online',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: '3W Online - Software House & Marketing' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#3B82F6' },
    
    // Open Graph
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:type', content: props.type },
    { property: 'og:url', content: currentUrl },
    { property: 'og:image', content: props.ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:site_name', content: '3W Online' },
    
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.ogImage },
    
    // Additional SEO meta tags
    { name: 'geo.region', content: 'BR-PR' },
    { name: 'geo.placename', content: 'Curitiba' },
    { name: 'geo.position', content: '-25.4284;-49.2733' },
    { name: 'ICBM', content: '-25.4284, -49.2733' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl },
    { rel: 'alternate', hreflang: 'pt-BR', href: currentUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(finalStructuredData)
    }
  ]
})
</script>
