<template lang='pug'>
  .main-container.row.middle.center
    .info-bar.column.middle.center
    form.log-in-container.column.middle.center(@submit.prevent='login' novalidate)
      .log-in.column.middle.start
        span.text-big
          | Usuario
        input.login-input(type='text' placeholder='Nombre de usuario' v-model='nombre')
        span.text-big
          | Contraseña
        input.login-input(type='password' placeholder='Contraseña' v-model='password')
        span.text-big
          | Email
        input.login-input(type='email' placeholder='Email' v-model='email')
      button.log-in-button(type='submit')
        | Iniciar sesión
</template>
<script>
import { login } from '../services/UserService'

export default {
  data: () => ({
    nombre: '',
    password: '',
    email: '',
    rememberMe: true
  }),
  methods: {
    login () {
      login(this.nombre, this.password, this.rememberMe, this.email).then(response => {
        this.$router.push({ path: 'dashboard' })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
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
