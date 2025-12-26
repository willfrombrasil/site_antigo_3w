<template>
  <div class="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
    <Bar
      id="bar-chart"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Registro global dos módulos do Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Dados e opções do gráfico
const chartData = {
  labels: ['Janeiro', 'Fevereiro', 'Março'],
  datasets: [
    {
      label: 'Vendas',
      backgroundColor: '#3b82f6',
      data: [40, 20, 12],
      borderRadius: 6,
      barThickness: 40
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#4B5563', // gray-700
        font: {
          size: 14
        }
      }
    },
    title: {
      display: true,
      text: 'Relatório Mensal',
      color: '#1F2937', // gray-800
      font: {
        size: 18
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#4B5563'
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        color: '#4B5563'
      },
      grid: {
        color: '#E5E7EB' // gray-200
      }
    }
  }
}
</script>

<style scoped>
/* Define altura para manter responsividade com aspecto visual agradável */
#bar-chart {
  height: 400px;
}
</style>
