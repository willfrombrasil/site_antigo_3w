<template>
  <div class="w-full h-64 md:h-96">
    <Doughnut
      :data="chartData"
      :options="chartOptions"
      class="w-full h-full"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

// Props recebendo info com labels e data
const props = defineProps({
  info: {
    type: Object,
    default: () => ({
      labels: [],
      data: []
    })
  }
})

// Cores fixas para o gráfico (pode ajustar)
const backgroundColors = [
  '#41B883', '#E46651', '#00D8FF', '#DD1B16',
  '#ed7615', '#540045', '#22806b', '#fcaf14',
  '#e6e1cf', '#eac761'
]

// Computed para atualizar o chartData sempre que props.info mudar
const chartData = computed(() => ({
  labels: props.info.labels,
  datasets: [
    {
      backgroundColor: backgroundColors,
      data: props.info.data
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
