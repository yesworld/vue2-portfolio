<template lang="pug">
  div.parallax
    div.layer.l_1
      div.image
    div.layer.l_2
      div.image
    div.layer.l_3
      div.image
    div.layer.l_4
      div.image
    div.layer.l_5
      div.image
    div.layer.l_6
      div.image

    div.content
      section.center
        slot
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Parallax extends Vue {}
</script>

<style lang="scss">
  .parallax {
    perspective: 100px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: -1;

    .layer{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin-left: -7px;

      .image{
        display: block;
        position: absolute;
        bottom: 0;
        background: url(../assets/firewatch/layer_1.png) 50% 0;
        height: 455px;
        width: 100%;
      }

      &.l_2 .image{
        background-image: url(../assets/firewatch/layer_2.png);
      }
      &.l_3 .image{
        background-image: url(../assets/firewatch/layer_3.png);
      }
      &.l_4 .image{
        background-image: url(../assets/firewatch/layer_4.png);
      }
      &.l_5 .image{
        background-image: url(../assets/firewatch/layer_5.png);
      }
      &.l_6 .image{
        background-image: url(../assets/firewatch/layer_6.png);
      }
    }

    .content{
      background: #2D112B;
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 2000px;
      z-index: 1000;
      margin-top: -1px;
      padding-top: 40px;

      section.center {
        width: 600px;
        margin: 0 auto;
      }
    }
  }

  $parallax__layers: 6;

  @for $i from 1 through $parallax__layers {
    $x: ($parallax__layers - $i) / 2;
    $z: (-100 * $x)+px;
    .parallax .layer.l_#{$i}{
      transform: translateZ($z) scale($x + 1);
    }
  }
</style>
