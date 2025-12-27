<template>
  <Teleport to="body">
    <transition name="cookie-slide">
      <div
        v-if="showBanner"
        class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white shadow-2xl border-t-4 border-primary-600 animate-slide-up"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div class="container mx-auto max-w-7xl">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div class="flex-1">
              <h3 id="cookie-banner-title" class="text-lg font-bold text-secondary-800 mb-2 flex items-center">
                <font-awesome-icon icon="fas fa-cookie-bite" class="text-primary-600 mr-3 text-2xl" />
                Utilizamos Cookies
              </h3>
              <p id="cookie-banner-description" class="text-secondary-600 leading-relaxed">
                Usamos cookies e tecnologias semelhantes para melhorar sua experiência, personalizar conteúdo,
                analisar o tráfego do site e entender de onde vêm nossos visitantes.
                Ao clicar em "Aceitar", você concorda com o uso de cookies conforme nossa
                <NuxtLink to="/politica-privacidade" class="text-primary-600 hover:text-primary-700 font-semibold underline">
                  Política de Privacidade
                </NuxtLink>.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                @click="acceptCookies"
                class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                aria-label="Aceitar cookies"
              >
                <font-awesome-icon icon="fas fa-check" class="mr-2" />
                Aceitar Cookies
              </button>

              <button
                @click="rejectCookies"
                class="px-6 py-3 bg-secondary-100 text-secondary-700 font-semibold rounded-xl hover:bg-secondary-200 transition-all duration-300 flex items-center justify-center"
                aria-label="Rejeitar cookies opcionais"
              >
                <font-awesome-icon icon="fas fa-times" class="mr-2" />
                Apenas Essenciais
              </button>

              <NuxtLink
                to="/politica-privacidade"
                class="px-6 py-3 bg-white border-2 border-secondary-300 text-secondary-700 font-semibold rounded-xl hover:bg-secondary-50 transition-all duration-300 flex items-center justify-center"
                aria-label="Saiba mais sobre cookies"
              >
                <font-awesome-icon icon="fas fa-info-circle" class="mr-2" />
                Saiba Mais
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useGoogleAnalytics } from '~/composables/useGoogleAnalytics'

const showBanner = ref(false)
const { trackBusinessEvent } = useGoogleAnalytics()

const COOKIE_CONSENT_KEY = '3w_cookie_consent'
const COOKIE_CONSENT_DATE_KEY = '3w_cookie_consent_date'
const COOKIE_CONSENT_EXPIRY_DAYS = 365

const getCookieConsent = () => {
  if (typeof window === 'undefined') return null

  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  const consentDate = localStorage.getItem(COOKIE_CONSENT_DATE_KEY)

  if (!consent || !consentDate) return null

  const expiryDate = new Date(consentDate)
  expiryDate.setDate(expiryDate.getDate() + COOKIE_CONSENT_EXPIRY_DAYS)

  if (new Date() > expiryDate) {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    localStorage.removeItem(COOKIE_CONSENT_DATE_KEY)
    return null
  }

  return consent
}

const setCookieConsent = (value: 'accepted' | 'rejected') => {
  if (typeof window === 'undefined') return

  localStorage.setItem(COOKIE_CONSENT_KEY, value)
  localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString())
}

const acceptCookies = () => {
  setCookieConsent('accepted')
  showBanner.value = false

  trackBusinessEvent.cookieConsent('accepted', true)

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted'
    })
  }
}

const rejectCookies = () => {
  setCookieConsent('rejected')
  showBanner.value = false

  trackBusinessEvent.cookieConsent('rejected', false)

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    })
  }
}

onMounted(() => {
  const consent = getCookieConsent()

  if (consent === null) {
    setTimeout(() => {
      showBanner.value = true
    }, 1000)
  } else if (consent === 'accepted') {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      })
    }
  }
})
</script>

<style scoped>
.container {
  max-width: 1400px;
}

.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}

.cookie-slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.cookie-slide-enter-to,
.cookie-slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@media (max-width: 768px) {
  .shadow-2xl {
    box-shadow: 0 -10px 30px -5px rgba(0, 0, 0, 0.15);
  }
}
</style>
