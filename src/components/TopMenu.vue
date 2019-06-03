<template lang="pug">
div#nav
  // router-link(to="/") Home |
  // router-link(to="/about") About

  v-toolbar(app)
    v-toolbar-title.headline.text-uppercase
      span.mr-2 Damir
      span.font-weight-light Full stack Wed-developer

    v-spacer

    v-btn(flat href="#" target="_blank")
      span.mr-2 Latest Release
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class TopMenu extends Vue {}
</script>

<style lang="scss">
  #nav {
    padding: 30px;
    z-index: 100;

    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
