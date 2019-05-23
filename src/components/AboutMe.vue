<template lang="pug">
  v-layout.text-xs-center.mb-5(wrap)
    v-flex.mb-3(xs12 md12)
      p I am a full stack web-developer who has successful 10 years of experience.
        | Always passionate to use latest technologies for your projects,
        | focusing on quality than speed on everything I am doing.
        | I love to get on challenging projects. Also I can just improve your website in all ways,
        | and analyze databases for further optimization.

    v-flex(xs12 md12 v-scroll="handleScroll")
      h5().text--accent My skills
      transition(name="slide-in" enter-active-class="animated jello")
        div(v-if="show")
          v-chip(color="red" text-color="white")
            v-avatar.red.darken-2 5.0
            | Technical SEO

          v-chip(color="indigo" text-color="white")
            v-avatar.indigo.darken-2 4.7
            | PHP

          v-chip(color="grey" text-color="white")
            v-avatar.grey.darken-2 4.2
            | Node.js

          v-chip.darken-2(color="yellow" text-color="black")
            v-avatar.yellow.darken-3 4.8
            | JavaScript

          v-chip(color="blue" text-color="white")
            v-avatar.blue.darken-2 3.1
            | TypeScript

          v-chip.darken-2(color="orange" text-color="white")
            v-avatar.orange.darken-4 4.3
            | MySql

          v-chip(color="green" text-color="white")
            v-avatar.green.darken-2 4.0
            | MongoDB
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AboutMe extends Vue {

  public show = false

  public handleScroll (evt: any, el: HTMLElement): boolean {

    const scrollTop: number = evt.currentTarget.scrollTop
    const topElement: number = el.offsetTop + 200

    if (scrollTop > topElement) {
      this.show = true
    }

    return scrollTop > topElement
  }
}
</script>
