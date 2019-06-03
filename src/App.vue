<template lang="pug">
  v-app(dark)
    //TopMenu(v-if="!isShow")

    v-content.main-content
      Parallax(v-on:show-menu="displayMenu")
        router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Parallax from '@/components/Parallax.vue'
//import TopMenu from '@/components/TopMenu.vue'

@Component({
  components: {
    Parallax//, TopMenu
  }
})
export default class App extends Vue {

  private isShow = false

  private displayMenu (isShowMenu: boolean) {
    this.isShow = isShowMenu
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: hidden;
  }

  body {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f9ffee;
    line-height: 1.6;
    font-weight: 300;
    font-size: 22px;
  }

  .theme--dark.application {
    /*background: radial-gradient(ellipse at bottom, #fedcc8 50%, #2c3669 100%);*/
    background: linear-gradient(#0D47A1 0%, #90CAF9 51%);

    /*
    .main-content {
      padding: 0 !important;
      margin-top: -64px;
    }*/
  }

  .relative {
    position: relative;
  }

  .container {
    position: relative;
  }
</style>
