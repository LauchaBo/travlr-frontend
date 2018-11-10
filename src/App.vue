<template lang="pug">
  .app-container
    navbar
    router-view
    //footer
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar }
}
</script>

<style lang="scss">
@import './scss/application';
</style>
