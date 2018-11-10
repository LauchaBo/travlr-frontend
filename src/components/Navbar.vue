<template lang="pug">
  .navbar.row.middle.space-between
    router-link(to='/')
      img.logo(src="../assets/travlr-logo-transparent.png")
    .menu.row.middle.center.m-right-3
      span.menu-item.text-normal
        | Funcionalidades
      span.menu-item.text-normal
        | Ingresar
      button.sign-up-button.text-normal
        | Crear cuenta
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../scss/variables/colors';

.navbar {
  height: 100px;
  background-color: $gray;
  padding: 0 20px;
}

.logo {
  width: 100%;
  max-width: 160px;
}

.menu-item {
  margin-right: 10px;
}
</style>
