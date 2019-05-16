<template lang="pug">
  v-layout.mb-5(wrap row)

    v-flex.relative(xs12 md6)
      div.lamp
        div(:style="style")
        div
        div

    v-flex(xs12 md6)
      v-container(grid-list-lg)
        v-layout(row wrap)
          v-flex(xs9)
            v-slider(v-model="R" :max="255" label="Red")
          v-flex(xs3)
            v-text-field(v-model="R" type="number")

        v-layout(row wrap)
          v-flex(xs9)
            v-slider(v-model="G" :max="255" label="Green")
          v-flex(xs3)
            v-text-field(v-model="G" type="number")

        v-layout(row wrap)
          v-flex(xs9)
            v-slider(v-model="B" :max="255" label="Blue")
          v-flex(xs3)
            v-text-field(v-model="B" type="number")
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class HaveIdea extends Vue {
    public R = 255
    public G = 255
    public B = 100

    get style () {
      const color = `${this.R},${this.G},${this.B}`
      const light = `rgba(255,0,0,1) 0%,rgba(${color},1) 3%, rgba(${color},0.8) 1%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 100%);`

      const styleW = 'background:-webkit-radial-gradient(center,ellipse,' + light
      const styleO = 'background:-o-radial-gradient(center,ellipse,' + light
      const style = 'background:radial-gradient(ellipse at center,' + light

      return styleW + styleO + style
    }
  }
</script>

<style lang="scss">
  .lamp{
    height: 81px;
    position: absolute;
    width: 106px;
    transform:scale(4);
    left: 150px;
    top: 40px;

    div,
    div:before,
    div:after{
      content:"";
      display:block;
      position:absolute;
    }

    div{
      width:100px;
      height:100px;
      top:50%;
      left:20px;
      margin-top:-50px;
    }

    div:nth-child(1){
      display:block;
      width: 200px;
      height: 200px;
      position: absolute;
      top: 7px;
      left: -71px;
      /*
      background:-webkit-radial-gradient(center,ellipse,rgba(255,255,255,1) 0%,rgba(255,255,100,1) 3%, rgba(225,225,200,1) 1%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 100%);
      background:-o-radial-gradient(center,ellipse,rgba(255,255,255,1) 0%,rgba(255,255,100,1) 3%, rgba(225,225,200,1) 1%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 100%);
      background:radial-gradient(ellipse at center,rgba(255,255,255,1) 0%,rgba(255,255,100,1) 3%, rgba(225,225,200,1) 1%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 100%);
      animation:lamp 10s ease 2s infinite;
      */
    }

    div:nth-child(2){
      width: 17px;
      height: 21px;
      border: 1px solid #224;
      border-radius: 8px 8px 10px 10px/17px 17px 6px 7px;
      margin-top: -1px;

      &:before{
        width: 17px;
        height: 5px;
        border-radius: 8px 8px 0 0;
        margin-top: 19px;
        margin-left: -1px;
        background: #224;
      }

      &:after{
        width: 19px;
        height: 3px;
        border-radius: 50%;
        margin-top: 23px;
        margin-left: -1.8px;
        background:#224;
      }
    }

    div:nth-child(3){
      width: 15px;
      height: 19px;
      background:rgba(100,100,120,0.3);
      background:-webkit-radial-gradient(center,ellipse,rgba(255,255,255,0) 0%,rgba(100,100,120,0.3) 100%);
      background:-o-radial-gradient(center,ellipse,rgba(255,255,255,0) 0%,rgba(100,100,120,0.3) 100%);
      background:radial-gradient(ellipse at center,rgba(255,255,255,0) 0%,rgba(100,100,120,0.3) 100%);
      border-radius:8px 8px 10px 10px/17px 17px 6px 7px;
      margin-top: 1px;
      margin-left: 1px;

      &:before{
        width: 9px;
        height: 0px;
        border: 2px solid transparent;
        border-bottom: 3px solid #224;
        top: -5px;
        left: 3px;
      }

      &:after{
        width: 15px;
        height: 12px;
        border:1px solid transparent;
        border-top:1px solid #224;
        border-left:1px solid #224;
        border-radius:10px;
        top: -7px;
        left: 0px;
        transform:rotate(65deg) skewX(42deg);
      }
    }
  }

  @keyframes lamp{
    50%{
      opacity:0.5;
      transform:scale(.8);
    }
  }
</style>
