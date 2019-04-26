<template lang="pug">
  div#nav
    router-link(to="/") Home |
    router-link(to="/about") About
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
