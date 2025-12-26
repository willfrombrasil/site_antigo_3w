<template>
  <div class="w-full h-64">
    <Line
      :chart-data="chartData"
      :chart-options="chartOptions"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      borderColor: '#f87979',
      fill: false,
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Line Chart Example'
    }
  }
})
</script>

<style scoped>
/* Container controls the height, tailwind sets it to 16rem (64) */
</style>
