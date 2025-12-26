<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const s1 = document.createElement('script')
  const s0 = document.getElementsByTagName('script')[0]
  s1.async = true
  s1.src = 'https://embed.tawk.to/57ae6a7bc582ca2129e3a0db/default'
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  s0.parentNode.insertBefore(s1, s0)
})
</script>
