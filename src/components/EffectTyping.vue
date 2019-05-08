<template lang="pug">
  h1
    slot
    span {{text}}
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator'

  @Component
  export default class EffectTyping extends Vue {

    @Prop({ default: true })
    private readonly isInfinity!: boolean

    @Prop({ default: [] })
    private readonly rotate!: string[]

    @Prop({ default: 2000 })
    private readonly pause!: number

    private isDelete = false
    private counter = 0
    private text = ''

    private mounted () {
      if (!this.rotate.length) return

      this.start()
    }

    private start () {

      const indexArray = this.counter % this.rotate.length
      const textFull = this.rotate[indexArray]

      let length = this.text.length
      length += this.isDelete ? -1 : +1
      this.text = textFull.substring(0, length)

      let ms = 300 - Math.random() * 100

      if (this.isDelete) {
        ms /= 2
        if (this.text === '') {
          this.isDelete = false
          this.counter++
          ms = 500 // pause before start
        }
      } else if (!this.isDelete && this.text === textFull) {

        // infinity animation or not
        if (!this.isInfinity && this.counter + 1 === this.rotate.length) {
          return
        }

        ms = Math.floor(this.pause)
        this.isDelete = true
      }

      setTimeout(() => {
        this.start()
      }, Math.floor(ms))
    }
  }
</script>

<style lang="scss" scoped>
  h1 > span {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .08em; /* Adjust as needed */
    animation:
      typing 3.5s steps(40, end),
      blink-caret .85s step-end infinite;
    padding-right: 5px;
  }

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
</style>
