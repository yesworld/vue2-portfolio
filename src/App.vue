<template lang="pug">
  div
    //TopMenu

    Parallax(:isDisable="true")
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
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;

    -webkit-font-smoothing: antialiased;
    /*background-color: #FEDCC8;*/
    background: radial-gradient(ellipse at bottom, #fedcc8 50%, #435C7A 150%);
    color: #f9ffee;
    line-height: 1.6;
    font-weight: 300;
    font-size: 22px;
  }

  h1, h2, h3, h4, h5 {
    color: #efbb35;
  }
</style>
