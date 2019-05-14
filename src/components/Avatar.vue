<template lang="pug">
  v-container(fill-height)
    v-layout(text-xs-center wrap align-center justify-center)
      v-flex(xs12 md12)
        v-avatar(size="192")
          img(v-if="data.avatar" :src="data.avatar" alt="my photo yesworld")

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
      h1: 'Hey, my name is Damir. I\'m a freelancer.',
      title: 'Do you want a site for ',
      rotate: ['business?', 'e-shop?', 'a big project?']
    }
  }
</script>

