<template lang="pug">
  .main-container.row.middle.center
    .info-bar.column.middle.center
    .log-in-container.column.middle.center
      .log-in.column.middle.start
        span.text-big
          | Usuario
        input.login-input(type="text" placeholder="Nombre de usuario" v-model="user")
        span.text-big
          | Contraseña
        input.login-input(type="text" placeholder="Contraseña" v-model="password")
      button.log-in-button
        | Iniciar sesión
</template>
<script>
export default {
  data: () => ({
    user: '',
    password: ''
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

.log-in-container {
  height: 100%;
  width: 100%;
}

.log-in {
  margin-bottom: 30px;

  & > * {
    margin-bottom: 5px;
  }
}
</style>
