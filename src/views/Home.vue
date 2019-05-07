<template lang="pug">
  v-container(fill-height)
    v-layout(
    text-xs-center wrap align-center justify-center
    )
      v-flex(xs12 md6)
        h3 {{ scrollTop }}
        p(v-scroll="handleScroll" style="opacity: 0;") efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw
      v-flex(xs12 md6)
        p efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw efwef f fwfwf wfwe fw
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import scroll from '../scroll-directive'

@Component({
  components: {
  },
  directives: {
    scroll
  }
})
export default class Home extends Vue {

  public handleScroll (evt: any, el: any): boolean {

    let scrollX: number = evt.currentTarget.scrollTop
    let topElement = el.offsetTop + el.offsetHeight

    if (scrollX > topElement) {
      el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
      )
    }

    return scrollX > topElement
  }
}
</script>
