<template lang="pug">
  .main-container.column.middle.center
    h1.title.title-big.white
      | Organiza tus vacaciones con amigos
    p.subtitle.text-big.white
      | Nunca antes fue tan fácil!
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/sizes';
@import '../scss/variables/colors';

.main-container {
  background-color: $black; //cambiar a imagen
  height: $home-height;
  width: 100%;
}
</style>
