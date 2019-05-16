<template lang="pug">
  v-container(fill-height)
    v-layout(text-xs-center align-center justify-center)
      v-flex(xs12)
        v-avatar(size="192")
          img(v-if="data.avatar" :src="data.avatar" alt="photo yesworld")

        h1 {{data.h1}}
        EffectTyping(:pause="2000", :rotate="data.rotate", :isInfinity="false") {{data.title}}
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import EffectTyping from '@/components/EffectTyping.vue'

  @Component({
    components: { EffectTyping }
  })
  export default class Avatar extends Vue {

    public data = {
      avatar: require('../assets/avatar.jpeg'),
      h1: 'Hey! I\'m Damir.',
      title: 'I\'ll create a top-notch website for your ',
      rotate: ['business?', 'e-shop?', 'big project?']
    }
  }
</script>
