<template lang="pug">
  v-container(fill-height)
    v-layout(text-xs-center wrap  align-center justify-center)
      v-flex(xs12 md12)
        v-avatar(size="192")
          img(v-if="data.avatar" :src="data.avatar" alt="Avatar")

        EffectTyping(:pause="2000", :rotate="data.names", :isInfinity="false") {{data.h1}}
        h2 {{data.title}}
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import EffectTyping from '@/components/EffectTyping.vue'

  @Component({
    components: { EffectTyping }
  })
  export default class AboutMe extends Vue {

    public data = {
      avatar: require('../assets/avatar.jpeg'),
      h1: 'Hey, my name is ',
      title: 'Do you want a site for business?',
      names: ['...', 'Yesworld', 'Damir']
    }
  }
</script>

<style lang="scss">
.container{
  position: relative;
}
</style>
