<template lang="pug">
  div
    TopMenu

    Parallax
      router-view
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import TopMenu from '@/components/TopMenu.vue'
  import Parallax from '@/components/Parallax.vue'

  @Component({
    components: {
      TopMenu, Parallax
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color: #FEDCC8;
    color: #efbb35;
    position: relative;
  }
</style>
