<template>
  <b-container class="text-center py-5">
    <b-icon icon="exclamation-triangle" variant="secondary" font-scale="7.5"></b-icon>
    <h1 class="my-5">Ops... Algo deu errado!</h1>
    <b-button variant="outline-secondary" pill v-on:click="btn_voltar()"><b-icon icon="skip-backward" aria-hidden="true"></b-icon> Voltar</b-button>
  </b-container>
</template>

<script>
export default {
  name: 'error.vue',

  methods: {
    btn_voltar () {
      return history.back()
    }
  }
}
</script>

<style scoped></style>
