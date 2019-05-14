<template lang="pug">
  v-container(fill-height)
    v-layout(wrap align-center justify-center)
      //div(v-if="isShow")
        AboutMe

      AboutMe

      v-flex(xs12 md6)
        p(v-scroll="handleScroll" style="opacity: 0;") efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw efwef f fwfwf wfwe f
      v-flex(xs12 md6)
        p efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import scroll from '../scroll-directive'

  @Component({
    components: {
      AboutMe: () => import('@/components/AboutMe.vue') // lazy
    },
    directives: {
      scroll
    }
  })
  export default class Home extends Vue {

    public mounted () {
    }

    public handleScroll (evt: any, el: HTMLElement): boolean {

      const scrollTop: number = evt.currentTarget.scrollTop
      const topElement = el.offsetTop + el.offsetHeight

      if (scrollTop > topElement) {
        el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }

      return scrollTop > topElement
    }
  }
</script>
