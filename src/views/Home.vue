<template lang="pug">
  v-container(fill-height)
    v-layout(wrap align-center justify-center)
      v-flex(xs12)
        AboutMe(v-scroll="handleScroll")

        h3.text-xs-center Do you have an idea?
        section(v-if="isShowIdea")
          HaveIdea
        p My top priority is the quality of the final product, that's why I always keep the client posted on project status and discuss all possible issues that may occur in the future.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AboutMe from '@/components/AboutMe.vue'

@Component({
  components: {
    AboutMe,
    HaveIdea: () => import('@/components/HaveIdea.vue') // lazy
  }
})
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
