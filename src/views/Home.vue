<template lang="pug">
  v-container(fill-height)
    v-layout(wrap align-center justify-center)
      v-flex(xs12)
        AboutMe(v-scroll="handleScroll")

        h3.text-xs-center Do you have an idea?
        section(v-if="isShowIdea")
          HaveIdea
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import AboutMe from '@/components/AboutMe.vue'
import scroll from '../scroll-directive'

@Component({
  components: {
    AboutMe,
    HaveIdea: () => import('@/components/HaveIdea.vue') // lazy
  },
  directives: {
    scroll
  }
})
// @Component
export default class Home extends Vue {

  public isShowIdea = false

  public handleScroll (evt: any, el: HTMLElement): boolean {

    const scrollTop: number = evt.currentTarget.scrollTop
    const topElement: number = el.offsetTop + el.offsetHeight

    if (scrollTop > topElement) {
      this.isShowIdea = true
      // el.setAttribute(
      //     'style',
      //     'opacity: 1; transform: translate3d(0, -10px, 0)'
      // )
    }

    return scrollTop > topElement
  }
}
</script>
