<template lang="pug">
  .main-container.column.middle.center
    h1.title.title-big.white
      | Organiza tus vacaciones con amigos
    p.subtitle.title-medium.white
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
  background: url('../assets/landing-background1.jpeg') no-repeat center;
  background-size: 100%;
}

.title {
  font-size: 50px;
  text-shadow: 2px 2px 4px $black;
}

.subtitle {
  text-shadow: 2px 2px 4px $black;
}
</style>
