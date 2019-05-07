<template lang="pug">
  v-container(fill-height)
    v-layout(text-xs-center wrap  align-center justify-center)
      v-flex(xs12 md12)
        v-avatar(size="192")
          img(v-if="data.avatar" :src="data.avatar" alt="Avatar")
        h1 {{data.name}}
        h2 {{data.title}}

      // v-flex(xs12 md6)
        h3 {{data.title}}
        p {{data.description}}
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class AboutMe extends Vue {

    public data = {
      avatar: require('../assets/avatar.jpeg'),
      name: 'Hey, my name is Damir',
      title: 'Do you want a site for business?',
    }
  }
</script>

<style lang="scss">
.container{
  position: relative;
}
</style>
