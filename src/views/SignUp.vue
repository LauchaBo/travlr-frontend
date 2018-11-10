<template lang="pug">
  .main-container.row.middle.center
    .info-bar.column.middle.center
    .sign-up-container.column.middle.center
      .sign-up.column.middle.start
        span.text-normal
          | Usuario
        input.login-input(type="text" placeholder="Nombre de usuario" v-model="user")
        span.text-normal
          | E-Mail
        input.login-input(type="text" placeholder="Nombre de usuario" v-model="email")
        span.text
          | Contraseña
        input.login-input(type="text" placeholder="Contraseña" v-model="password1")
        span.text
          | Repita su contraseña
        input.login-input(type="text" placeholder="Contraseña" v-model="password2")
</template>
<script>
export default {
  data: () => ({
    user: '',
    email: '',
    password1: '',
    password2: ''
  })
}
</script>
<style lang="scss" scoped>
@import '../scss/variables/colors';
@import '../scss/variables/sizes';

.main-container {
  height: calc(100vh - #{$navbar-height});
  min-height: 500px;
}

.info-bar {
  background-color: $black;
  height: 100%;
  width: 400px;
}

.sign-up-container {
  height: 100%;
  width: 100%;
}
</style>
